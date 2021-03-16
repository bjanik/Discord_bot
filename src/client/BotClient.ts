
import { AkairoClient, CommandHandler, ListenerHandler} from "discord-akairo";
import { User, Message} from "discord.js"
import { join} from "path"
import { prefix, owners } from "../config"

declare module "discord-akairo" {
    interface AkairoClient {
        commandHandler: CommandHandler
        listenerHandler: ListenerHandler
    }
}
interface BotOptions {
    token?: string;
    owners?: string | string [];
}

export default class BotClient extends AkairoClient {
    public config: BotOptions;
    public listenerHandler: ListenerHandler = new ListenerHandler(this, {directory: join(__dirname, "..", "listeners")})
    public commandHandler: CommandHandler = new CommandHandler(this,
         { directory: join(__dirname, "..", "commands"), prefix: prefix, allowMention: true, handleEdits: true,
        commandUtil: true, commandUtilLifetime: 3e5, defaultCooldown: 6e4, argumentDefaults: {
            prompt: {
                modifyStart: (_: Message, str: string): string => `${str}\n\ntype \`cancel\` to cancel the command ... `,
                modifyRetry:   (_: Message, str: string): string => `${str}\n\ntype \`cancel\` to cancel the command ... `,
                timeout: "You took to long, command has now been cancelled...",
                ended: "You execeed the maximum amout of tries, this command has now been cancelled...",
                cancel: "This command has been cancelled...",
                retries: 3,
                time: 3e4
            }, 
            otherwise: ""
        },
    ignorePermissions: owners
    });
// Constructor that will modify the options from the default class to our options
public constructor(config: BotOptions) {
    super({
        ownerID: config.owners
    });
    this.config = config;
}
// Init function to intialize our handlers commands and  listeners
private async _init(): Promise<void> {
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
 public async start(): Promise<string> {
     await this._init();
     return this.login(this.config.token)

 }
}