import { combineReducers } from 'redux'
import { userReducer } from './user/userReducer'

const rootReducer = combineReducers({
userReducer : userReducer.reduce

})

export default rootReducer
