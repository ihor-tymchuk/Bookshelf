import reduxThunk from 'redux-thunk'
import indexReducer from './indexReducer'
import {createStore, applyMiddleware, compose} from 'redux'
import throttle from 'lodash/throttle'
import { saveState } from './utils/syncLocalStorege'




const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const loggerMiddleware = store => next => action => {
    const result = next(action)
    // console.log('Middleware', store.getState() )
    return result
}


const Store = createStore (indexReducer, composeEnhancers (applyMiddleware(reduxThunk, loggerMiddleware)))

Store.subscribe(throttle( () => {
  saveState ({
    usersColection: Store.getState().usersReducer
  })
}, 1000))



export default Store