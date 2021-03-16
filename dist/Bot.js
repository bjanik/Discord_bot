"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const BotClient_1 = __importDefault(require("./client/BotClient"));
const client = new BotClient_1.default({ token: config_1.token, owners: config_1.owners });
client.start();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL0JvdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHFDQUF1QztBQUN2QyxtRUFBMkM7QUFFM0MsTUFBTSxNQUFNLEdBQWMsSUFBSSxtQkFBUyxDQUFDLEVBQUMsS0FBSyxFQUFMLGNBQUssRUFBRSxNQUFNLEVBQU4sZUFBTSxFQUFDLENBQUMsQ0FBQztBQUN6RCxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMifQ==