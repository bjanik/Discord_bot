import axios from 'axios';
import { Message } from "discord.js";

const url: string = 'https://kaamelott.chaudie.re/api/random';

const AxiosInstance = axios.create();


export function create_reply(data: any): string {
    const sentence = data.citation.citation
    const character = data.citation.infos.personnage
    const reply = `${sentence} - ${character}`
    return reply
}

export function get_reply(response: any): string {
    let reply: string
    if (response.status === 200) {
        const data = response.data
        reply = create_reply(data)
    }
    else {
        reply = `Sorry dude, server returned ${response.status} status code`
    }
    return reply
}

export default function kaamelott(msg: Message) {
    AxiosInstance.get(url)
    .then(response => {
        const reply = get_reply(response)
        msg.reply(reply)
    })
    .catch(console.error)
}
