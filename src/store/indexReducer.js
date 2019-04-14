import loginReducer from './reducers/loginReducer.js'
import usersReducer from './reducers/usersReduser.js'
import booksReducer from './reducers/booksReducer.js'

import {combineReducers} from 'redux'

export default combineReducers({
    loginReducer,
    usersReducer,
    booksReducer,
})