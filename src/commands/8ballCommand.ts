//FONCTION !8ball

export default function ball(msg){
    const answers : Array<string> = ['Yes','No','Maybe'];
    return msg.reply(answers[Math.floor(Math.random()*3)]);
}