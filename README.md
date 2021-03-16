# Discord Bot: Tob! 

![](https://i.ibb.co/3FtJNcG/tob.png)

__Created by Bart, Max et Jojo, Tob is gonna help you to know when is the next Train or Bus that you have to take to Go Home
from one place to another (only valid in Paris and peripheria )__


**Dependencies**: 

`TypeScript ( npm i -g typescript )`

`discord.js master ( npm i discordjs/discord.js )`

`discord-akairo master ( npm i 1Computer1/discord-akairo )`

`Node Types ( npm i @types/node )`

**Dedans SRC creer config.ts**

```
export let token: string = "TOKE HERE"

export let prefix: string = ",";

export let owners: string[] = []; 
```

**How to run it ?**

Dans le dossier root, compiler le typescript
`tsc`

cd dans le dossier dist/
`cd dist`

executer node
`node Bot.js`
