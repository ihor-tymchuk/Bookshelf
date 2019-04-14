import { ENTER_NAME, ENTER_PASS, SIGN_OUT, SUBMIT_NEW} from "./actionsTypes";



export function enterName(name) {
    return {
        type: ENTER_NAME,
        payload: name,
        name: name.persist(), 
    }
}



export function enterPass(name) {
    return {
        type: ENTER_PASS,
        payload: name,
        name: name.persist(), 
    }
}

export function signOut () {
    return {
        type: SIGN_OUT
    }
}

export function submitNew(log, pass, users){
    
   return  dispatch => {

    for (let i=0;i<users.length; i++) {
        if (users[i].Login === log){
            if (users[i].Password === pass){
                dispatch({
                    type: SUBMIT_NEW,
                    payload: users[i].id
                }) 
            } 
            }
        }

   }

    
    } 


  


