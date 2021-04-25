import {combineReducers, createStore, applyMiddleware, compose} from 'redux'
import thunkMiddleware from 'redux-thunk'
import appReducer from './app-reducer.js'
import navbarReducer from './navbar-reducer.js'
import dialogsReducer from './dialogs-reducer.js'
import profileReducer from './profile-reducer.js'
import usersReducer from './users-reducer.js'
import authReducer from './auth-reducer.js'
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
	app: appReducer,
	navbar: navbarReducer,
	profilePage: profileReducer,
	messagesPage: dialogsReducer,
	usersPage: usersReducer,
	auth: authReducer,
	form: formReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;