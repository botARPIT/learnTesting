import { describe, it, expect, vi } from "vitest"
import bcrypt from 'bcrypt'

import {hashPassword} from "../hashFunction"

vi.mock('bcrypt', () =>(
     {
    default: {
        hash: vi.fn()
    }
}
))
describe("learning how to hash a password using mocking", ()=> {
    it('should take a string as input and returns it hash', async() => {
        const password = "Test password"
        const fakeHashedPassword = "This is a hashed password"

       const mockedBcrypt =  vi.mocked(bcrypt) 
       mockedBcrypt.hash.mockResolvedValue(fakeHashedPassword as never)

        const result = await hashPassword(password)

        expect(mockedBcrypt.hash).toHaveBeenCalledWith(password, 10)
        expect(result).toBe(fakeHashedPassword)

    })
})