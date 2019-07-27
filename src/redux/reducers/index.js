import {combineReducers} from 'redux'
import currentUser from './user'
import homePageReducer from './homePageReducer'
const rootReducer  = combineReducers({
  currentUser: currentUser,
  homePageReducer:homePageReducer
})

export default rootReducer