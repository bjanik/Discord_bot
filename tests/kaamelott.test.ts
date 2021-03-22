import axios from 'axios';
import MockAdapter from 'axios-mock-adapter'
import { expect } from 'chai';
import { create_reply, get_reply } from "../src/commands/kaamelottCommand"

const citation_data = {
    "citation" : {
        "citation": "C'est pas faux",
        "infos": {
            "personnage": 'Perceval'
        }
    }
}

describe("test get_reply", () => {
    it("should return an error message because request returned a status code != 200", () => {
        let mock = new MockAdapter(axios)
        let response = {
            status: 404,
            data: citation_data
        }
        mock.onGet('https://kaamelott.chaudie.re/api/random').reply(404, citation_data)
        expect(get_reply(response)).to.equal("Sorry dude, server returned 404 status code")

        response = {
            status: 500,
            data: citation_data
        }
        mock.onGet('https://kaamelott.chaudie.re/api/random').reply(404, citation_data)
        expect(get_reply(response)).to.equal("Sorry dude, server returned 500 status code")
    })
})

describe("create_reply", () => {
    it("should return sentence - character", () => {
        let mock = new MockAdapter(axios)
        const response = {
            status: 200,
            data: citation_data
        }
        mock.onGet('https://kaamelott.chaudie.re/api/random').reply(200, response)
        expect(create_reply(citation_data)).to.equal("C'est pas faux - Perceval")

        expect(get_reply(response)).to.equal("C'est pas faux - Perceval")

    })
})