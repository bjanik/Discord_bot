import { getArticles } from "../src/commands/LireCommand"
import { assert, expect } from 'chai';

const data = [
    {
    title: "string",
    link: "http://hola.com"
},
{
    title: "Numero 2",
    link: "http://hola.com"
}
]

// le num du article 
let n:number = 0 

describe("Lire_article", () => {
    it("should return an objet with two props", () => {

        expect(getArticles(data,n).title).to.equal("string")
        expect(getArticles(data,n).link.slice(0,7)).to.equal("http://")
        n=+1
        
        expect(getArticles(data,n).title).to.equal("Numero 2")
        expect(getArticles(data,n).link.slice(0,7)).to.equal("http://")
    })
})