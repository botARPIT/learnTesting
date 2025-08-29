export enum CarBody {
    SEDAN = "SEDAN",
    MUSCLE = "MUSCLE",
    SPORT = "SPORT",
    SUV = "SUV"
}

export type CarType = "ELECTRIC" | "DIESEL"

export enum SportsCarEngine {
    V8 = "V8",
    V12 = "V12"
}
abstract class Car{
    seats: number
    body: CarBody
    company: string
    carType: CarType

    constructor(seats: number, body: CarBody, company: string, carType: CarType){
        this.seats = seats,
        this.body = body,
        this.company = company,
        this.carType = carType
    }

    start(carType: CarType) {}
      
}

export class SportsCar extends Car{
    year : string
    engineType: SportsCarEngine
    aerodynamic: boolean
    speed: number
    constructor(seats: number, body: CarBody, company: string, carType: CarType,
        year: string, engine: SportsCarEngine, aerodynamic: boolean, speed: number
    ){
        super(seats, body, company, carType)
        this.year = year,
        this.engineType = engine,
        this.aerodynamic = aerodynamic,
        this.speed = speed
    }

    start(): string{
        if(this.carType == "DIESEL"){
            console.log("This is a classic beast")
            return "The body is old but the soul is still new"
        } console.log("The new gen is here") 
        return "New body but old blood"
    }

    getTopSpeed(){
        return this.speed
    }

    getEngineType(){
        return this.engineType
    }

    isAerodynamic(){
        return this.aerodynamic
    }

    getCarInfo(){
        return {
            seats: this.seats,
            body: this.body,
            company: this.company,
            car_Type: this.carType,
            engine: this.engineType,
            year : this.year,
            is_Aerodynamic: this.aerodynamic,
            speed: this.speed
        }
    }
}


const Ferrari = new SportsCar(2, CarBody.SPORT, "Ferrari", "DIESEL", "2007", SportsCarEngine.V8, true, 320)

console.log(Ferrari.getCarInfo())
console.log(Ferrari.getEngineType())
console.log(Ferrari.isAerodynamic())
console.log(Ferrari.start())