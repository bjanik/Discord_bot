import axios from 'axios';

const url: string = 'https://kaamelott.chaudie.re/api/random';

const AxiosInstance = axios.create();

export const create_reply = data => {
    const sentence = data.citation.citation
    const character = data.citation.infos.personnage
    const reply = `${sentence} - ${character}`
    return reply
}

export default function kaamelott(msg) {
    AxiosInstance.get(url)
    .then(response => {
        if (response.status === 200) {
            const data = response.data
            const reply = create_reply(data)
            msg.reply(reply)
        }
    })
    .catch(console.error)
}
