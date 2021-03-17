
class Gun {
    barrel: Array<number>;
    chamber: number

    constructor() {
        this.barrel = new Array(0, 0, 0, 0, 0, 0)
        this.chamber = 0
    }

    load_barrel() {
        this.barrel[this.chamber] = 0
        let chamber = Math.floor(Math.random() * 6)
        this.chamber = Math.floor(Math.random() * 6);
        this.barrel[chamber] = 1
    }

    trigger() {
        if (this.barrel[this.chamber] == 1) {
            this.load_barrel()
            return "BANG! You're dead. Let's reload the gun";
        }
        this.chamber++;
        if (this.chamber > 5)
            this.chamber = 0
        return "CLIC! You're lucky"
    }
}