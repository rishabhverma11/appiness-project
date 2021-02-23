import { combineReducers } from 'redux'
import reducers from './reducers/reducers'

const rootReducer = combineReducers({
  user: reducers
  
})
export default rootReducer
