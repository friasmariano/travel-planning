
import { describe, expect, test } from 'vitest'
import helpers from '../helpers'

describe('Helpers', () => {
    test("Contains a 'helloWorld' function", async () => {
        expect(typeof helpers.helloWorld).toBe('function')
    })
})