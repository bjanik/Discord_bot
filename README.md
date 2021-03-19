# Discord Bot ("Tob 🤖") v0.5

**Tob** is a bot from discord created to enhance your discord experience and to test a new programming architecture in typescript, node into a virtual environment ran by docker. 🐳

### Requeriments 📋

- Docker 🐋

### Used tech 👨‍💻

- **Docker 🐋**
- **Node JS v14**
- **TypeScript**

### Used Libraries 📒

- _Discord.js_
- _Axios (For requesting)_
- _Cheerios (For Scrapping)_
- _TypeScript_
- _@types/node_
- _mocha_ (For testing)
- _Chai_ (Test unitaires)
- _ffmpeg_ (audio files)
- _ytdl-core_

### List of commands 📖

| Version of Tob | Command available       | Action                                                                   |
| -------------- | ----------------------- | ------------------------------------------------------------------------ |
| 0.1            | !ping                   | Returns pong!                                                            |
| 0.2            | !lire , read            | Return a random article to read from hackernews                          |
| 0.2            | !help                   | Return the list of commands                                              |
| 0.3            | !roulette               | Starts a russian roulette game of six turns max                          |
| 0.4            | !kaamelott              | Returns a message with a legendary quote from the french series kaamelot |
| x.x            | !!play + 'youtube link' | Play a song from a youtube link in a voice channel                       |
| x.x            | !stop                   | Stops playing the music tha tit started to play                          |
| x.x            | !8ball                  | The magic ball that return yes and no to a question                      |

### How to build this ? ⚒️

In the root directory build the docker image and run it

`docker build . -t tob && docker run -itd tob`

The commands in docker to run the bot  
`npm run bot`

The commands to test the bot

` npm run test`

### Credits 👥

Thanks to Bart, Jordan et max to making this project smooth and functional as possible and David and Amin for being a great support into bringing this to live.
