import { expect } from 'chai';
import { Gun } from '../src/commands/RouletteCommand';

describe('roulette testing', () => {
    it('checks initial state', () => {
        const gun = new Gun()
        expect(gun.triggers).to.equal(0)

        // Only one bullet must be in the charger, thus sum(gun.barrel) should be 1
        expect(gun.barrel.reduce((sum, val) => sum + val)).to.equal(1)

        if (gun.barrel[gun.chamber] == 1) {
            let fate = gun.trigger()
            expect(fate).to.equal(":boom: You're dead! Let's reload the gun")
        }

        // Barrel has 6 chambers, so it is impossible to trigger 6 times without actually firing at least once
        let outcomes = []
        for (let i = 0; i < 6; i++) {
            outcomes.push(gun.trigger())
        }
        expect(outcomes.some(outcome => outcome === ":boom: You're dead! Let's reload the gun")).to.equal(true)

    })
})