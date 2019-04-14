import {  ENTER_NAME, ENTER_PASS, SIGN_OUT, SUBMIT_NEW } from "../actions/actionsTypes";


const initialState = {
    loginIn: false,
    userId: 1, // тимчасово зафіксую користувача з id=1
    userName: "Login",
    value: 0,
    nameInput: "",
    passInput: "",

    
}


    

export default function log_in(state = initialState, action) {

   

    switch(action.type) {
        
        case ENTER_NAME:
            return {
                ...state, 
                nameInput: action.payload.target.value
            }
            

        case ENTER_PASS:
            return {
                ...state, 
                passInput: action.payload.target.value
            }
        case SIGN_OUT:
            return {
                ...state, 
                loginIn: false,
                
            }
        case SUBMIT_NEW: {
            return {
                ...state,  
                value: state.value +1,
                userId: action.payload,
                loginIn: true,
                userName: action.payload,
                nameInput: "",
                passInput: "",
            }
        }

        
        default: 
            return state
    }
}
