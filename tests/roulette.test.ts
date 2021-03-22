import { expect } from 'chai';
import { Gun } from '../src/commands/RouletteCommand';

describe('roulette testing', () => {
    it('checks initial state', () => {
        const gun = new Gun()
        expect(gun.triggers).to.equal(0)

        // Only one bullet must be in the charger, thus sum(gun.barrel) should be 1
        expect(gun.barrel.reduce((sum, val) => sum + val)).to.equal(1)
    }),

    it('checks result when trigger', () => {
        const gun = new Gun()

        let fate = gun.trigger()
        if (gun.triggers == 0) {
            expect(fate).to.equal(":boom: You're dead! Let's reload the gun")
        }
        else {
            expect(fate).to.equal("CLIC! You're lucky! 1/6")
        }
    }),

    it('checks it fires at least once', () => {
        const gun = new Gun()

        // Barrel has 6 chambers, so it is impossible to trigger 6 times without actually firing at least once
        let outcomes = []
        for (let i = 0; i < 6; i++) {
            outcomes.push(gun.trigger())
        }
        expect(outcomes.some(outcome => outcome === ":boom: You're dead! Let's reload the gun")).to.equal(true)

    })
})