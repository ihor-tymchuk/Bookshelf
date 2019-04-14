import { NEW_USER } from  './actionsTypes.js'

export function enterReg (input, type){
    return{
        type: type,
        payload: input,
        input: input.persist()
    }
}

export function createNewUser (firstName, lastName, brD, brM, brY, list, login, password){
    return {
        type: NEW_USER,
        payload: {firstName, lastName, brD, brM, brY, list, login, password}
    }
}