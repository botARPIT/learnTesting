import { describe, it, expect } from "vitest";
import { CarBody, SportsCar, SportsCarEngine } from "../carClass";

const BMW = new SportsCar(4, CarBody.SEDAN, "BMW", "ELECTRIC", "2007", SportsCarEngine.V12, false, 420)

describe("sports car class", () => {
    it('gets the top speed of the car', () => {
        expect(BMW.getTopSpeed()).toBe(420)
    })

    it("return if a car is aerodynamic or not", () => {
        expect(BMW.isAerodynamic()).toBe(false)
    })

    it("return the engine type", () => {
        expect(BMW.getEngineType()).toBe(SportsCarEngine.V12)
    })

    it("starts the car", () => {
        expect(BMW.start()).toBe("New body but old blood")
    })

    it('gets the car info', () => {
        expect(BMW.getCarInfo()).toEqual({
            seats: 4,
            body: CarBody.SEDAN,
            company: "BMW",
            car_Type: "ELECTRIC",
            engine: SportsCarEngine.V12,
            year: "2007",
            is_Aerodynamic: false,
            speed: 420

        })
    })
})