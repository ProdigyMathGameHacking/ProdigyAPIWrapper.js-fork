"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAccount = void 0;
var jsdom_1 = __importDefault(require("jsdom"));
var node_fetch_1 = __importDefault(require("node-fetch"));
var node_fetch_2 = __importDefault(require("fetch-cookie/node-fetch"));
function generateAccount(username, password, lastInitial) {
    var _a, _b, _c;
    return __awaiter(this, void 0, void 0, function () {
        var cookiefetch, formSite, site, dom, document, URI_ENCODED_AUTHTOKEN, page, credentials, _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    cookiefetch = (0, node_fetch_2.default)(node_fetch_1.default);
                    return [4, cookiefetch("https://sso.prodigygame.com/game/signup")];
                case 1:
                    formSite = _f.sent();
                    return [4, formSite.text()];
                case 2:
                    site = _f.sent();
                    dom = new jsdom_1.default.JSDOM(site);
                    document = dom.window.document;
                    URI_ENCODED_AUTHTOKEN = encodeURIComponent((_a = document.getElementsByName("authenticity_token")[0].getAttribute("value")) !== null && _a !== void 0 ? _a : "");
                    return [4, cookiefetch("https://sso.prodigygame.com/game/signup", {
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
                            body: "utf8=%E2%9C%93&authenticity_token=".concat(URI_ENCODED_AUTHTOKEN, "&game_signup_form%5Bfirst_name%5D=").concat(username, "&game_signup_form%5Blast_initial%5D=").concat(lastInitial, "&game_signup_form%5Bpassword%5D=").concat(password, "&button="),
                            method: "POST"
                        })];
                case 3:
                    page = _f.sent();
                    _e = (_d = jsdom_1.default.JSDOM).bind;
                    return [4, page.text()];
                case 4:
                    credentials = new (_e.apply(_d, [void 0, _f.sent()]))().window.document.getElementsByClassName("credentials-value");
                    return [2, [(_b = credentials[0]) === null || _b === void 0 ? void 0 : _b.innerHTML, (_c = credentials[1]) === null || _c === void 0 ? void 0 : _c.innerHTML]];
            }
        });
    });
}
exports.generateAccount = generateAccount;
