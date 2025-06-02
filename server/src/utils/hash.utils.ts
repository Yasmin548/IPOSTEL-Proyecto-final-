import bcrypt from "bcrypt"
const rounds = 10

//Encripta la contraseña
export const hashPassword = async(password:string):Promise<string>=>{
    return bcrypt.hash(password, rounds)
}

//Compara las contraseñas y devuelve un true/false
export const comparePassword = async(password:string, hashedPassword:string): Promise<boolean>=>{
    return bcrypt.compare(password, hashedPassword)
}