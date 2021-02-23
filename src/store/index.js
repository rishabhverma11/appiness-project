import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from '../rootReducers'
console.log("Hii fromstore")
const store = createStore(
  rootReducer,    
  applyMiddleware(thunk)
)

export default store
