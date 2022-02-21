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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
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
var url_1 = require("url");
var fromEntries = function (iterable) {
    return __spreadArray([], __read(iterable)).reduce(function (obj, _a) {
        var _b = __read(_a, 2), key = _b[0], val = _b[1];
        obj[key] = val;
        return obj;
    }, {});
};
var tokenify = function (username, password, _a) {
    var _b = _a === void 0 ? {} : _a, log = _b.log;
    return __awaiter(void 0, void 0, void 0, function () {
        var cookiefetch, url, _c, formSite, site, dom, document, authenticity, loginParams, login, playLoginParams, _d, _e, _f, _g, _h, schoolLogin, playLogin, clientId, tokenParams, tokenLogin, secondTokenLogin, tokenProp, tokenInit, master, masterJson;
        var _j, _k, _l, _m, _o;
        return __generator(this, function (_p) {
            switch (_p.label) {
                case 0:
                    cookiefetch = fetch_cookie_1.default(node_fetch_1.default);
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
                        throw new Error("The form page request was unable to be fetched with a code of " + formSite.status + ".");
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
                        throw new Error("Initial login request was unsuccessful with code " + login.status + ".");
                    if (log)
                        console.log("Initial login request done with a code of " + login.status + ".");
                    playLoginParams = new URLSearchParams();
                    _e = (_d = playLoginParams).set;
                    _f = ["authenticity_token"];
                    _h = (_g = jsdom_1.default.JSDOM).bind;
                    return [4, cookiefetch((_k = login.headers.get("location")) !== null && _k !== void 0 ? _k : "")];
                case 5: return [4, (_p.sent()).text()];
                case 6:
                    _e.apply(_d, _f.concat([(_m = (_l = new (_h.apply(_g, [void 0, _p.sent()]))().window.document.querySelector("input[name=authenticity_token]")) === null || _l === void 0 ? void 0 : _l.getAttribute("value")) !== null && _m !== void 0 ? _m : ""]));
                    return [4, cookiefetch("https://sso.prodigygame.com/premises?premises=home&rid=" + new url_1.URL(login.headers.get("location") || "").searchParams.get("rid"), { headers: { "content-type": "application/x-www-form-urlencoded" }, body: playLoginParams.toString(), method: "POST", redirect: "manual" })];
                case 7:
                    schoolLogin = _p.sent();
                    return [4, cookiefetch(schoolLogin.headers.get("location") || "", { redirect: "follow" })];
                case 8:
                    playLogin = _p.sent();
                    if (!playLogin.ok && !playLogin.status.toString().startsWith("3"))
                        throw new Error("Client ID request failed with a code of " + playLogin.status);
                    if (log)
                        console.log("Client ID request done with a code of " + playLogin.status + ".");
                    return [4, playLogin.text()];
                case 9:
                    clientId = (_o = (_p.sent()).match(/client_id="([0-9a-f]+)"/)) === null || _o === void 0 ? void 0 : _o[1];
                    if (clientId === undefined)
                        throw new Error("Client ID was not found on in the request response.");
                    tokenParams = new URLSearchParams();
                    tokenParams.set("client_id", clientId);
                    tokenParams.set("redirect_uri", "https://play.prodigygame.com/play");
                    tokenParams.set("response_type", "id_token token");
                    tokenParams.set("scope", "openid profile email sid identity_provider");
                    tokenParams.set("state", "b292a37841634f2eb2c6c283285e0e1a");
                    tokenParams.set("nonce", "e651b05312b74195beb22f99a116c630");
                    tokenParams.set("prompt", "login");
                    tokenParams.set("mobilePlatform", "undefined");
                    return [4, cookiefetch("https://sso.prodigygame.com/oauth/authorize?" + tokenParams, {
                            redirect: "manual"
                        })];
                case 10:
                    tokenLogin = _p.sent();
                    if (!tokenLogin.ok && !tokenLogin.status.toString().startsWith("3"))
                        throw new Error("First authentication request failed with a code of " + tokenLogin.status + ".");
                    if (log)
                        console.log("First token request done with a code of " + tokenLogin.status + ".");
                    return [4, cookiefetch(tokenLogin.headers.get("location") || "", {
                            redirect: "manual"
                        })];
                case 11:
                    secondTokenLogin = _p.sent();
                    if (!secondTokenLogin.ok && !secondTokenLogin.status.toString().startsWith("3"))
                        throw new Error("Second authentication request failed with a code of " + secondTokenLogin.status + ".");
                    if (log)
                        console.log("Second token request done with a code of " + secondTokenLogin.status + ".");
                    tokenProp = new url_1.URL((secondTokenLogin.headers.get("location") || "").replace("#", "?")).searchParams;
                    tokenInit = tokenProp.toString().split("&").reduce(function (obj, item) {
                        obj[item.split("=")[0]] = decodeURIComponent(item.split("=")[1]);
                        return obj;
                    }, {});
                    return [4, node_fetch_1.default("https://api.prodigygame.com/game-auth-api/v4/user", {
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                identityToken: tokenInit.access_token
                            }),
                            method: "POST"
                        })];
                case 12:
                    master = _p.sent();
                    if (!master.ok)
                        throw new Error("Master request failed with a code of " + master.status + ".");
                    if (log)
                        console.log("Master request done with a code of " + master.status + ".");
                    return [4, master.json()];
                case 13:
                    masterJson = _p.sent();
                    return [2, __assign(__assign({}, tokenInit), masterJson)];
            }
        });
    });
};
exports.tokenify = tokenify;
