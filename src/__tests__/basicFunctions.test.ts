import { add, reverseString } from "../basicFunctions";
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

    it('works on empty stings', () => {
    expect(reverseString('')).toBe(null)
    })
})