import {vi, describe, it, expect} from 'vitest'
import { createJWT } from '../jwt'
vi.mock('../jwt', () => {
    return {
        createJWT: vi.fn()
    }
})


describe("testing createJWT function", () => {
     const mockedCreateJWT = vi.mocked(createJWT)
    it("should return a jwt", () => {
        mockedCreateJWT.mockReturnValue("testing")
        expect(createJWT("test")).toBe("testing")
        expect(mockedCreateJWT).toHaveBeenCalledWith("test")
    }) 

    it("should return null", () => {
        mockedCreateJWT.mockReturnValue(null)
        expect(createJWT('')).toBe(null)
        expect(mockedCreateJWT).toHaveBeenCalledWith('')
    })
})