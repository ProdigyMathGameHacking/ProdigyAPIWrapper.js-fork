/* eslint-disable import/first */
/* eslint-disable camelcase */
if (typeof SharedArrayBuffer === "undefined") {
    // @ts-ignore
    global.SharedArrayBuffer = ArrayBuffer;
}
import JSDOM from "jsdom";
import fetch from "node-fetch";
import fetchCookie from "fetch-cookie";
import { sha256 } from "js-sha256";
import { URL } from "url";

interface MasterResponse {
    clientID: string
    userID: number
    token: string
    authToken: string
    userType: string
    name: string
    objectID: number
    registerDate: string
    lastVisited: string
    ownerIDs: number[]
    classIDs: number[]
    isTowerTownEnabled: boolean
    identityUri: string
    identityClientId: string
    identityToken: string
    refreshToken: string
    premises: string
}

const fromEntries = <T = any>(iterable: Iterable<readonly [PropertyKey, T]>) =>
    [...iterable].reduce((obj, [key, val]) => {
        obj[key as string] = val;
        return obj;
    }, {} as { [key: string]: T });

const genRanHex = (size: number) => [...Array(size)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");

export const tokenify = async (username: string, password: string, { log }: { log?: boolean } = {}) => {
    const cookiefetch: typeof fetch = fetchCookie(fetch);

    if (log) console.log("Fetching login route...");
    const url = fromEntries((await cookiefetch("https://sso.prodigygame.com/game/login", {
        redirect: "manual"
    })).headers).location;
    const formSite = await cookiefetch(url);
    if (!formSite.ok) throw new Error(`The form page request was unable to be fetched with a code of ${formSite.status}.`);
    const site = await formSite.text();
    const dom = new JSDOM.JSDOM(site);
    if (log) console.log("Successfully fetched.");
    const { document } = dom.window;
    const authenticity = document.querySelector("input[name=authenticity_token]")?.getAttribute("value");
    if (!authenticity) throw new Error("Authenticity token failed. No authenticity input was found.");
    if (log) console.log("Authenticity token obtained!");
    const loginParams = new URLSearchParams();
    loginParams.set("utf8", "✓");
    loginParams.set("authenticity_token", authenticity);
    loginParams.set("unauthenticated_game_login_form[username]", username);
    loginParams.set("unauthenticated_game_login_form[password]", password);
    loginParams.set("button", "");
    const login = await cookiefetch(formSite.url, {
        headers: {
            "content-type": "application/x-www-form-urlencoded"
        },
        body: loginParams.toString(),
        method: "POST",
        redirect: "manual"
    });
    if (!login.ok && !login.status.toString().startsWith("3")) throw new Error(`Initial login request was unsuccessful with code ${login.status}.`);
    if (log) console.log(`Initial login request done with a code of ${login.status}.`);
    const playLoginParams = new URLSearchParams();
    playLoginParams.set("authenticity_token", new JSDOM.JSDOM(await (await cookiefetch(login.headers.get("location") ?? "")).text()).window.document.querySelector("input[name=authenticity_token]")?.getAttribute("value") ?? "");
    const rid = new URL(login.headers.get("location") || "").searchParams.get("rid");
    const schoolLogin = await cookiefetch(`https://sso.prodigygame.com/premises?premises=home&rid=${rid}`, { headers: { "content-type": "application/x-www-form-urlencoded" }, body: playLoginParams.toString(), method: "POST", redirect: "manual" });
    const playLogin = await cookiefetch(schoolLogin.headers.get("location") || "", { redirect: "follow" });
    if (!playLogin.ok && !playLogin.status.toString().startsWith("3")) throw new Error(`Client ID request failed with a code of ${playLogin.status}`);
    if (log) console.log(`Client ID request done with a code of ${playLogin.status}.`);
    const clientId = (await playLogin.text()).match(/client_id="([0-9a-f]+)"/)?.[1];
    if (clientId === undefined) throw new Error("Client ID was not found on in the request response.");
    const tokenParams = new URLSearchParams();
    const verifier = genRanHex(96);
    const challenge = Buffer.from(sha256(verifier), "hex").toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
    tokenParams.set("client_id", clientId);
    tokenParams.set("code_challenge", challenge);
    tokenParams.set("code_challenge_method", "S256");
    tokenParams.set("rid", rid as string);
    tokenParams.set("redirect_uri", "https://play.prodigygame.com/launcher");
    tokenParams.set("response_type", "code");
    tokenParams.set("response_mode", "query");
    tokenParams.set("scope", "openid profile email sid identity_provider premises");
    tokenParams.set("state", "042a380791654df0b90a820cd940a799");
    tokenParams.set("mobilePlatform", "undefined");
    const tokenLogin = await cookiefetch("https://sso.prodigygame.com/oauth/authorize?" + tokenParams, {
        redirect: "manual"
    });
    if (!tokenLogin.ok && !tokenLogin.status.toString().startsWith("3")) throw new Error(`First authentication request failed with a code of ${tokenLogin.status}.`);
    if (log) console.log(`First token request done with a code of ${tokenLogin.status}.`);
    const launcherLogin = await cookiefetch(tokenLogin.headers.get("location") || "", {
        redirect: "manual"
    });
    if (!launcherLogin.ok && !launcherLogin.status.toString().startsWith("3")) throw new Error(`Second authentication request failed with a code of ${launcherLogin.status}.`);
    if (log) console.log(`Login request done with a code of ${launcherLogin.status}.`);
    const tokenInfoParams = new URLSearchParams();
    tokenInfoParams.set("client_id", clientId);
    tokenInfoParams.set("code_verifier", verifier);
    tokenInfoParams.set("grant_type", "authorization_code");
    tokenInfoParams.set("redirect_uri", "https://play.prodigygame.com/launcher");
    tokenInfoParams.set("code", new URL(launcherLogin.url).searchParams.get("code") as string);
    const tokenInfo = await (await cookiefetch("https://sso.prodigygame.com/oauth/token", {
        headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/x-www-form-urlencoded",
            "sec-ch-ua": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            Referer: "https://play.prodigygame.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        body: tokenInfoParams.toString(),
        method: "POST"
    })).json();
    const profileInfo = await (await cookiefetch("https://sso.prodigygame.com/oauth/userinfo", {
        headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            authorization: "Bearer " + tokenInfo.access_token,
            "if-none-match": "W/\"5b286425d5daec2d178cdc71cff23daa\"",
            "sec-ch-ua": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            Referer: "https://play.prodigygame.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        method: "GET"
    })).json();
    const decodedIdToken = JSON.parse(Buffer.from(tokenInfo.id_token.split(".")[1], "base64").toString());
    await cookiefetch("https://api.prodigygame.com/game-cortex-server/v1/coreGame.setSession", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            identity_token: tokenInfo.access_token,
            refresh_token: tokenInfo.refresh_token,
            profile: {
                ...profileInfo,
                auth_time: decodedIdToken.auth_time,
                sid: decodedIdToken.sid,
                session_exp: decodedIdToken.session_exp
            },
            clientId: clientId,
            identityUri: "https://sso.prodigygame.com"
        })
    });
    const master = await cookiefetch("https://api.prodigygame.com/game-cortex-server/v1/coreGame.login", {
        headers: {
            accept: "*/*",
            "accept-language": "en-US,en;q=0.9",
            "content-type": "application/json",
            "sec-ch-ua": "\"Chromium\";v=\"106\", \"Google Chrome\";v=\"106\", \"Not;A=Brand\";v=\"99\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"Windows\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-site",
            Referer: "https://math.prodigygame.com/",
            "Referrer-Policy": "strict-origin-when-cross-origin"
        },
        body: "{\"clientID\":\"1\"}",
        method: "POST"
    });
    if (!master.ok) throw new Error(`Master request failed with a code of ${master.status}.`);
    if (log) console.log(`Master request done with a code of ${master.status}.`);
    const masterJson: MasterResponse = await master.json();
    return masterJson;
};
