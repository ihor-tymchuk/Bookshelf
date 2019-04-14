import { ADD_BOOK_FOR_USER, ADD_BOOK_FOR_USER_WITH_FRIENDS, ENTER_SERCH } from  './actionsTypes.js'

export function addBookForUser (name, year, author, userId, usersArr) {
    return dispatch => {
        for (let p = 0;p < usersArr.length ; p++){
            if (usersArr[p].id === userId) {
                dispatch({
                    type: ADD_BOOK_FOR_USER,
                    payload: {name, year, author, userId, p, usersArr}
                })
            }
        }
        
    }
} 

export function addBookForUserWithFriends (name, year, author, friendId, usersArr, userId) {
    return dispatch => {
        for (let p = 0; p < usersArr.length; p++){
            if (usersArr[p].id === userId) {
                dispatch({
                    type: ADD_BOOK_FOR_USER_WITH_FRIENDS,
                    payload: {name, year, author, p, usersArr}
                })
            }
        }
        
    }
} 

export function enterSerch (serch){
    return {
        type: ENTER_SERCH,
        payload: serch,
        name: serch.persist(),
    }
}

