//FONCTION !HELP

export default function help(msg){
    return msg.channel.send(
`
\`\`\`Bienvenue a Tob !

Tob permet d'écouter votre musique provenant de youtube mais aussi de donner de la lecture provenant de thehackernews.com ou bien de jouer a la roulette russe !

!help //Affiche les commandes du bot 🔍

!play 'youtube link' //Ajoute votre vidéo a la file d'attente et 
lance la musique dans votre channel vocal ⏯️
!play //Relance la musique ⏯️ 
!stop  //Stop la musique ⏹️ 
!skip //Passe a la musique suivante ⏭️ 
            
!read //Affiche un article aléatoire de thehackernews.com 📖 
            
!roulette //Jeux de la roulette russe 💥

!8ball 'message' //Boule Magique 🎱 

!kaamelott  //Envoi un dialogue aléatoire de kaamelott 🍻 ⚔️ 👑 

\`\`\` 
`

    )
}