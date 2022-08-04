import JSDOM from "jsdom";
import fetch from "node-fetch";
import fetchCookie from "fetch-cookie/node-fetch";

export async function generateAccount (username: string, password: string, lastInitial: string) {
    const cookiefetch = fetchCookie(fetch);
    const formSite = await cookiefetch("https://sso.prodigygame.com/game/signup");
    const site = await formSite.text();
    const dom = new JSDOM.JSDOM(site);
    const { document } = dom.window;
    const URI_ENCODED_AUTHTOKEN = encodeURIComponent(document.getElementsByName("authenticity_token")[0].getAttribute("value") ?? "");
    const page = await cookiefetch("https://sso.prodigygame.com/game/signup", {
        headers: {
            accept: "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
            "accept-language": "en-US,en;q=0.9,az;q=0.8,cs;q=0.7",
            "cache-control": "max-age=0",
            "content-type": "application/x-www-form-urlencoded",
            "sec-ch-ua": "\" Not A;Brand\";v=\"99\", \"Chromium\";v=\"90\", \"Google Chrome\";v=\"90\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-dest": "document",
            "sec-fetch-mode": "navigate",
            "sec-fetch-site": "same-origin",
            "sec-fetch-user": "?1",
            "upgrade-insecure-requests": "1"
        },
        body: `utf8=%E2%9C%93&authenticity_token=${URI_ENCODED_AUTHTOKEN}&game_signup_form%5Bfirst_name%5D=${username}&game_signup_form%5Blast_initial%5D=${lastInitial}&game_signup_form%5Bpassword%5D=${password}&button=`,
        method: "POST"
    });
    const credentials = new JSDOM.JSDOM(await page.text()).window.document.getElementsByClassName("credentials-value");
    return [credentials[0]?.innerHTML, credentials[1]?.innerHTML];
}
