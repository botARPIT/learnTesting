import { add, convertCurrencyToUSD, reverseString } from "../basicFunctions";
import {describe, it, expect} from 'vitest';

describe('add()',() => {
    it('adds two numbers', () => {
        expect(add(2, 3)).toBe(5)
    })
})

describe('reverse()', () => {
    it('reverses a given string', ()=> {
        expect(reverseString("pool")).toBe('loop')  
    })

    it('returns null for empty srings', () => {
    expect(reverseString('')).toBe(null)
    })
})

describe("currency convertor", () => {
    it('converts INR currency to respective USD equivallent', () => {
        expect(convertCurrencyToUSD(1)).toBe(87.5)
    })

    it('returns zero if the value is passed is zero', () => {
        expect(convertCurrencyToUSD(0)).toBe(0)
    })
})