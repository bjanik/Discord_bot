//import { hello_reply } from './hello_reply';
import Discord from "discord.js";
import {token} from "../config";

const client = new Discord.Client();

const prefix = "!";
const jojo = (message) => {
    message.reply("pong")
}
const funcs = {
    //"hello": hello_reply,
    "ping": jojo,
}

client.login(token)

client.once("ready", () => {
    console.log("Ready!");
  });
  

client.on('message', msg => {
// command 1 
    if (msg.content === 'ping') {
      msg.reply('Pong!');
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