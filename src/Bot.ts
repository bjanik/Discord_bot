//import { hello_reply } from './hello_reply';
import Discord from "discord.js";
import {token} from "../config";
import ping from "./commands/PingCommand"
import lire from "./commands/LireCommand"
import help from "./commands/HelpCommand"
import ball from "./commands/8ballCommand"
import roulette from "./commands/RouletteCommand"
import kaamelott from "./commands/kaamelottCommand";
import ball from "./commands/8ballCommand"

const client = new Discord.Client();

const prefix = "!";

client.login(token)

client.once("ready", () => {
    console.log("Ready!");
});

let functionsMap = new Map([['ping', ping],
                            ['lire', lire],
                            ['read', lire],
                            ['help', help],
                            ['8ball', ball],
                            ['roulette', roulette],
                            ['kaamelott', kaamelott],
                            ['8ball', ball]])

// COMMANDS ############

client.on('message', msg => {
    if (msg.author.bot || !msg.content.startsWith(prefix)) return
    const msg_split = msg.content.split(' ');
    const command = msg_split[0].slice(1)
    if (functionsMap.has(command)) {
      functionsMap.get(command)(msg)
    }
    else {
      msg.reply(`Sorry, '${command}' command is invalid!`)
	}
});

// END OF COMMANDS ####################

  client.once("reconnecting", () => {
    console.log("Reconnecting!");
  });
  
  client.once("disconnect", () => {
    console.log("Disconnect!");
  });
