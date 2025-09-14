import {hashPassword} from "./hashFunction"

export function add(a: number,b: number) :number{
    return a + b
}


export function reverseString(str: string) : string | null{
    if(str == '') return null
    return str.split('').reverse().join('')
}

export function convertCurrencyToUSD(currency: number): number | null{
    return currency == 0 ? 0 :  currency * 87.5
}

const hashingPassword = hashPassword("This is a test pass").then((hashedPassword) => {console.log(hashedPassword)})
.catch((error) => {console.log("Encountered the following errro", error)})