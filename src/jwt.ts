import  {sign, verify, JwtPayload, JsonWebTokenError } from 'jsonwebtoken'

export const JSON_SECRET = "This is a json secret"

export function createJWT(data : string) : string | null {
    return data == '' ? null : sign({data}, JSON_SECRET)
}

console.log(createJWT("This is a sample"))

export function verifyJWT(JWT: string) : JwtPayload | string{
   try {
     return verify(JWT, JSON_SECRET)
   } catch (error) {
    if (error instanceof JsonWebTokenError) {
       throw new Error("Jwt is malformed")
    } else if(error instanceof Error){
         throw new Error(error.message)
    }
    else throw new Error("Unknonw JWT verification error")
   }
}

console.log(verifyJWT("This is not a random string"))
console.log(verifyJWT("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiVGhpcyBpcyBhIHNhbXBsZSIsImlhdCI6MTc1NjQ3NTY3NX0.A6LJYqM-xdz9DdJDkOIBu5dQ5DqkXv5T-T26GouOQE0"))