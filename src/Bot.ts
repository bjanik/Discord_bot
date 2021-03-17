//import { hello_reply } from './hello_reply';
import Discord from "discord.js";
import {token} from "../config";
import ping from "./commands/PingCommand"

const client = new Discord.Client();

const prefix = "!";

client.login(token)

client.once("ready", () => {
    console.log("Ready!");
  });
  

client.on('message', msg => {
// command 1 
    if (msg.content === 'ping') {
        ping(msg)        
    }
// command 2 
// command 3  etc.

  });


  client.once("reconnecting", () => {
    console.log("Reconnecting!");
  });
  
  client.once("disconnect", () => {
    console.log("Disconnect!");
  });