"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const discord_akairo_1 = require("discord-akairo");
const path_1 = require("path");
const config_1 = require("../config");
class BotClient extends discord_akairo_1.AkairoClient {
    // Constructor that will modify the options from the default class to our options
    constructor(config) {
        super({
            ownerID: config.owners
        });
        this.listenerHandler = new discord_akairo_1.ListenerHandler(this, { directory: path_1.join(__dirname, "..", "listeners") });
        this.commandHandler = new discord_akairo_1.CommandHandler(this, { directory: path_1.join(__dirname, "..", "commands"), prefix: config_1.prefix, allowMention: true, handleEdits: true,
            commandUtil: true, commandUtilLifetime: 3e5, defaultCooldown: 6e4, argumentDefaults: {
                prompt: {
                    modifyStart: (_, str) => `${str}\n\ntype \`cancel\` to cancel the command ... `,
                    modifyRetry: (_, str) => `${str}\n\ntype \`cancel\` to cancel the command ... `,
                    timeout: "You took to long, command has now been cancelled...",
                    ended: "You execeed the maximum amout of tries, this command has now been cancelled...",
                    cancel: "This command has been cancelled...",
                    retries: 3,
                    time: 3e4
                },
                otherwise: ""
            }, ignorePermissions: config_1.owners });
        this.config = config;
    }
    // Init function to intialize our handlers commands and  listeners
    async _init() {
        this.commandHandler.useListenerHandler(this.listenerHandler);
        this.listenerHandler.setEmitters({
            CommandHandler: this.commandHandler,
            ListenerHandler: this.listenerHandler,
            process
        });
        // Load the commands and the listeners events
        this.commandHandler.loadAll();
        this.listenerHandler.loadAll();
    }
    // Start the config after the init and load the token
    async start() {
        await this._init();
        return this.login(this.config.token);
    }
}
exports.default = BotClient;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQm90Q2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NsaWVudC9Cb3RDbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxtREFBOEU7QUFFOUUsK0JBQTBCO0FBQzFCLHNDQUEwQztBQWExQyxNQUFxQixTQUFVLFNBQVEsNkJBQVk7SUFtQm5ELGlGQUFpRjtJQUNqRixZQUFtQixNQUFrQjtRQUNqQyxLQUFLLENBQUM7WUFDRixPQUFPLEVBQUUsTUFBTSxDQUFDLE1BQU07U0FDekIsQ0FBQyxDQUFDO1FBckJJLG9CQUFlLEdBQW9CLElBQUksZ0NBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBQyxTQUFTLEVBQUUsV0FBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsV0FBVyxDQUFDLEVBQUMsQ0FBQyxDQUFBO1FBQzdHLG1CQUFjLEdBQW1CLElBQUksK0JBQWMsQ0FBQyxJQUFJLEVBQzFELEVBQUUsU0FBUyxFQUFFLFdBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxFQUFFLE1BQU0sRUFBRSxlQUFNLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsSUFBSTtZQUN0RyxXQUFXLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLEdBQUcsRUFBRSxlQUFlLEVBQUUsR0FBRyxFQUFFLGdCQUFnQixFQUFFO2dCQUNqRixNQUFNLEVBQUU7b0JBQ0osV0FBVyxFQUFFLENBQUMsQ0FBVSxFQUFFLEdBQVcsRUFBVSxFQUFFLENBQUMsR0FBRyxHQUFHLGdEQUFnRDtvQkFDeEcsV0FBVyxFQUFJLENBQUMsQ0FBVSxFQUFFLEdBQVcsRUFBVSxFQUFFLENBQUMsR0FBRyxHQUFHLGdEQUFnRDtvQkFDMUcsT0FBTyxFQUFFLHFEQUFxRDtvQkFDOUQsS0FBSyxFQUFFLGdGQUFnRjtvQkFDdkYsTUFBTSxFQUFFLG9DQUFvQztvQkFDNUMsT0FBTyxFQUFFLENBQUM7b0JBQ1YsSUFBSSxFQUFFLEdBQUc7aUJBQ1o7Z0JBQ0QsU0FBUyxFQUFFLEVBQUU7YUFDaEIsRUFDTCxpQkFBaUIsRUFBRSxlQUFNLEVBQ3hCLENBQUMsQ0FBQztRQU1ILElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3pCLENBQUM7SUFDRCxrRUFBa0U7SUFDMUQsS0FBSyxDQUFDLEtBQUs7UUFDZixJQUFJLENBQUMsY0FBYyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQztZQUM3QixjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWM7WUFDbkMsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLE9BQU87U0FDVixDQUFDLENBQUM7UUFFSCw2Q0FBNkM7UUFDN0MsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBRW5DLENBQUM7SUFDRCxxREFBcUQ7SUFDN0MsS0FBSyxDQUFDLEtBQUs7UUFDZCxNQUFNLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNuQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUV4QyxDQUFDO0NBQ0Q7QUE5Q0QsNEJBOENDIn0=