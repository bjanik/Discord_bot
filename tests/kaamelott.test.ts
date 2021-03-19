import { expect } from 'chai';
import { create_reply } from "../src/commands/kaamelottCommand"

const data = {
    "citation" : {
        "citation": "C'est pas faux",
        "infos": {
            "personnage": 'Perceval'
        }
    }
}

describe("create_reply", () => {
    it("should return sentence - character", () => {
        expect(create_reply(data)).to.equal("C'est pas faux - Perceval")
    })
})