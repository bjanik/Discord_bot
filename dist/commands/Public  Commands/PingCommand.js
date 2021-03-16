"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
class PingCommand extends discord_akairo_1.Command {
    constructor() {
        super("ping", {
            aliases: ["ping"],
            category: "Public Commands",
            description: {
                content: "Check the latency of the Discord APi",
                usage: "ping",
                examples: [
                    "ping"
                ]
            },
            ratelimit: 3
        });
    }
    exec(message) {
        return message.util.send(`Pong! \`${this.client.ws.ping}ms\``);
    }
}
exports.default = PingCommand;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUGluZ0NvbW1hbmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tbWFuZHMvUHVibGljICBDb21tYW5kcy9QaW5nQ29tbWFuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1EQUF5QztBQUd6QyxNQUFxQixXQUFZLFNBQVEsd0JBQU87SUFDNUM7UUFDSSxLQUFLLENBQUMsTUFBTSxFQUFFO1lBQ1YsT0FBTyxFQUFFLENBQUMsTUFBTSxDQUFDO1lBQ2pCLFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsV0FBVyxFQUFFO2dCQUNULE9BQU8sRUFBRSxzQ0FBc0M7Z0JBQy9DLEtBQUssRUFBRSxNQUFNO2dCQUNiLFFBQVEsRUFBRTtvQkFDTixNQUFNO2lCQUNUO2FBQ0o7WUFDRCxTQUFTLEVBQUUsQ0FBQztTQUNmLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRSxJQUFJLENBQUMsT0FBZ0I7UUFDeEIsT0FBTyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLElBQUksTUFBTSxDQUFDLENBQUE7SUFDbEUsQ0FBQztDQUNBO0FBbkJELDhCQW1CQyJ9