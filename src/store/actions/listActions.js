import { ENTER_NAME_INPUT, ENTER_YEAR_INPUT, ENTER_AUTHOR_INPUT, CLICK_ADD_BOOK, CLICK_DELETE_BOOK } from './actionsTypes.js'



export function enterNameInput(name) {
    return {
        type: ENTER_NAME_INPUT,
        payload: name,
        name: name.persist(), 
    }
}

export function enterYearInput(name) {
    return {
        type: ENTER_YEAR_INPUT,
        payload: name,
        name: name.persist(), 
    }
}

export function enterAuthorInput(name) {
    return {
        type: ENTER_AUTHOR_INPUT,
        payload: name,
        name: name.persist(), 
    }
}

export function clickAddBook (name, year, author, id, usersArr, numb, keys) {
    return dispatch => {
        for (let k=0;k<usersArr.length; k++) {
            if (usersArr[k].id === id) {
                dispatch({
                    type: CLICK_ADD_BOOK,
                    payload: {
                        numb,
                        name,
                        year,
                        author,
                        k
                    }
                })
            } 
        }
    }
}

export function clickDeleteBook (name, year, author, id, usersArr, numb, keys) {
    console.log(keys)
    return dispatch => {
       usersArr.map( (user, index) => {
           if (user.id === id) {
               dispatch({
                   type: CLICK_DELETE_BOOK,
                   payload: {
                        keys,
                        index
                   }
               })
           }} )
       }
    }


