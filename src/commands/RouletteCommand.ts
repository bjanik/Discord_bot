
export class Gun {
    barrel: Array<number>;
    chamber: number
    triggers: number

    constructor() {
        this.barrel = new Array(0, 0, 0, 0, 0, 0)
        this.chamber = 0
        this.load_barrel()
    }

    load_barrel() {
        let chamber = Math.floor(Math.random() * 6)
        this.barrel[this.chamber] = 0
        this.triggers = 0
        this.chamber = Math.floor(Math.random() * 6);
        this.barrel[chamber] = 1
    }

    trigger() {
        if (this.barrel[this.chamber] == 1) {
            this.load_barrel()
            return ":boom: You're dead! Let's reload the gun";
        }
        this.chamber++;
        this.triggers++
        if (this.chamber > 5)
            this.chamber = 0
        return `CLIC! You're lucky! ${this.triggers}/6`
    }
}

const gun = new Gun()

export default function roulette(msg) {
    console.log(gun.barrel)
    msg.reply(gun.trigger())
}