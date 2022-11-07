"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tokenify = void 0;
if (typeof SharedArrayBuffer === "undefined") {
    global.SharedArrayBuffer = ArrayBuffer;
}
var jsdom_1 = __importDefault(require("jsdom"));
var node_fetch_1 = __importDefault(require("node-fetch"));
var fetch_cookie_1 = __importDefault(require("fetch-cookie"));
var js_sha256_1 = require("js-sha256");
var url_1 = require("url");
var fromEntries = function (iterable) {
    return __spreadArray([], __read(iterable), false).reduce(function (obj, _a) {
        var _b = __read(_a, 2), key = _b[0], val = _b[1];
        obj[key] = val;
        return obj;
    }, {});
};
var genRanHex = function (size) { return __spreadArray([], __read(Array(size)), false).map(function () { return Math.floor(Math.random() * 16).toString(16); }).join(""); };
var tokenify = function (username, password, _a) {
    var _b = _a === void 0 ? {} : _a, log = _b.log;
    return __awaiter(void 0, void 0, void 0, function () {
        var cookiefetch, url, _c, formSite, site, dom, document, authenticity, loginParams, login, playLoginParams, _d, _e, _f, _g, _h, rid, schoolLogin, playLogin, clientId, tokenParams, verifier, challenge, tokenLogin, launcherLogin, tokenInfoParams, tokenInfo, profileInfo, decodedIdToken, master, masterJson;
        var _j, _k, _l, _m, _o;
        return __generator(this, function (_p) {
            switch (_p.label) {
                case 0:
                    cookiefetch = (0, fetch_cookie_1.default)(node_fetch_1.default);
                    if (log)
                        console.log("Fetching login route...");
                    _c = fromEntries;
                    return [4, cookiefetch("https://sso.prodigygame.com/game/login", {
                            redirect: "manual"
                        })];
                case 1:
                    url = _c.apply(void 0, [(_p.sent()).headers]).location;
                    return [4, cookiefetch(url)];
                case 2:
                    formSite = _p.sent();
                    if (!formSite.ok)
                        throw new Error("The form page request was unable to be fetched with a code of ".concat(formSite.status, "."));
                    return [4, formSite.text()];
                case 3:
                    site = _p.sent();
                    dom = new jsdom_1.default.JSDOM(site);
                    if (log)
                        console.log("Successfully fetched.");
                    document = dom.window.document;
                    authenticity = (_j = document.querySelector("input[name=authenticity_token]")) === null || _j === void 0 ? void 0 : _j.getAttribute("value");
                    if (!authenticity)
                        throw new Error("Authenticity token failed. No authenticity input was found.");
                    if (log)
                        console.log("Authenticity token obtained!");
                    loginParams = new URLSearchParams();
                    loginParams.set("utf8", "✓");
                    loginParams.set("authenticity_token", authenticity);
                    loginParams.set("unauthenticated_game_login_form[username]", username);
                    loginParams.set("unauthenticated_game_login_form[password]", password);
                    loginParams.set("button", "");
                    return [4, cookiefetch(formSite.url, {
                            headers: {
                                "content-type": "application/x-www-form-urlencoded"
                            },
                            body: loginParams.toString(),
                            method: "POST",
                            redirect: "manual"
                        })];
                case 4:
                    login = _p.sent();
                    if (!login.ok && !login.status.toString().startsWith("3"))
                        throw new Error("Initial login request was unsuccessful with code ".concat(login.status, "."));
                    if (log)
                        console.log("Initial login request done with a code of ".concat(login.status, "."));
                    playLoginParams = new URLSearchParams();
                    _e = (_d = playLoginParams).set;
                    _f = ["authenticity_token"];
                    _h = (_g = jsdom_1.default.JSDOM).bind;
                    return [4, cookiefetch((_k = login.headers.get("location")) !== null && _k !== void 0 ? _k : "")];
                case 5: return [4, (_p.sent()).text()];
                case 6:
                    _e.apply(_d, _f.concat([(_m = (_l = new (_h.apply(_g, [void 0, _p.sent()]))().window.document.querySelector("input[name=authenticity_token]")) === null || _l === void 0 ? void 0 : _l.getAttribute("value")) !== null && _m !== void 0 ? _m : ""]));
                    rid = new url_1.URL(login.headers.get("location") || "").searchParams.get("rid");
                    return [4, cookiefetch("https://sso.prodigygame.com/premises?premises=home&rid=".concat(rid), { headers: { "content-type": "application/x-www-form-urlencoded" }, body: playLoginParams.toString(), method: "POST", redirect: "manual" })];
                case 7:
                    schoolLogin = _p.sent();
                    return [4, cookiefetch(schoolLogin.headers.get("location") || "", { redirect: "follow" })];
                case 8:
                    playLogin = _p.sent();
                    if (!playLogin.ok && !playLogin.status.toString().startsWith("3"))
                        throw new Error("Client ID request failed with a code of ".concat(playLogin.status));
                    if (log)
                        console.log("Client ID request done with a code of ".concat(playLogin.status, "."));
                    return [4, playLogin.text()];
                case 9:
                    clientId = (_o = (_p.sent()).match(/client_id="([0-9a-f]+)"/)) === null || _o === void 0 ? void 0 : _o[1];
                    if (clientId === undefined)
                        throw new Error("Client ID was not found on in the request response.");
                    tokenParams = new URLSearchParams();
                    verifier = genRanHex(96);
                    challenge = Buffer.from((0, js_sha256_1.sha256)(verifier), "hex").toString("base64").replace(/=/g, "").replace(/\+/g, "-").replace(/\//g, "_");
                    tokenParams.set("client_id", clientId);
                    tokenParams.set("code_challenge", challenge);
                    tokenParams.set("code_challenge_method", "S256");
                    tokenParams.set("rid", rid);
                    tokenParams.set("redirect_uri", "https://play.prodigygame.com/launcher");
                    tokenParams.set("response_type", "code");
                    tokenParams.set("response_mode", "query");
                    tokenParams.set("scope", "openid profile email sid identity_provider premises");
                    tokenParams.set("state", "042a380791654df0b90a820cd940a799");
                    tokenParams.set("mobilePlatform", "undefined");
                    return [4, cookiefetch("https://sso.prodigygame.com/oauth/authorize?" + tokenParams, {
                            redirect: "manual"
                        })];
                case 10:
                    tokenLogin = _p.sent();
                    if (!tokenLogin.ok && !tokenLogin.status.toString().startsWith("3"))
                        throw new Error("First authentication request failed with a code of ".concat(tokenLogin.status, "."));
                    if (log)
                        console.log("First token request done with a code of ".concat(tokenLogin.status, "."));
                    return [4, cookiefetch(tokenLogin.headers.get("location") || "", {
                            redirect: "manual"
                        })];
                case 11:
                    launcherLogin = _p.sent();
                    if (!launcherLogin.ok && !launcherLogin.status.toString().startsWith("3"))
                        throw new Error("Second authentication request failed with a code of ".concat(launcherLogin.status, "."));
                    if (log)
                        console.log("Login request done with a code of ".concat(launcherLogin.status, "."));
                    tokenInfoParams = new URLSearchParams();
                    tokenInfoParams.set("client_id", clientId);
                    tokenInfoParams.set("code_verifier", verifier);
                    tokenInfoParams.set("grant_type", "authorization_code");
                    tokenInfoParams.set("redirect_uri", "https://play.prodigygame.com/launcher");
                    tokenInfoParams.set("code", new url_1.URL(launcherLogin.url).searchParams.get("code"));
                    return [4, cookiefetch("https://sso.prodigygame.com/oauth/token", {
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
                        })];
                case 12: return [4, (_p.sent()).json()];
                case 13:
                    tokenInfo = _p.sent();
                    return [4, cookiefetch("https://sso.prodigygame.com/oauth/userinfo", {
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
                        })];
                case 14: return [4, (_p.sent()).json()];
                case 15:
                    profileInfo = _p.sent();
                    decodedIdToken = JSON.parse(Buffer.from(tokenInfo.id_token.split(".")[1], "base64").toString());
                    return [4, cookiefetch("https://api.prodigygame.com/game-cortex-server/v1/coreGame.setSession", {
                            method: "POST",
                            headers: { "Content-Type": "application/json" },
                            body: JSON.stringify({
                                identity_token: tokenInfo.access_token,
                                refresh_token: tokenInfo.refresh_token,
                                profile: __assign(__assign({}, profileInfo), { auth_time: decodedIdToken.auth_time, sid: decodedIdToken.sid, session_exp: decodedIdToken.session_exp }),
                                clientId: clientId,
                                identityUri: "https://sso.prodigygame.com"
                            })
                        })];
                case 16:
                    _p.sent();
                    return [4, cookiefetch("https://api.prodigygame.com/game-cortex-server/v1/coreGame.login", {
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
                        })];
                case 17:
                    master = _p.sent();
                    if (!master.ok)
                        throw new Error("Master request failed with a code of ".concat(master.status, "."));
                    if (log)
                        console.log("Master request done with a code of ".concat(master.status, "."));
                    return [4, master.json()];
                case 18:
                    masterJson = _p.sent();
                    return [2, masterJson];
            }
        });
    });
};
exports.tokenify = tokenify;
