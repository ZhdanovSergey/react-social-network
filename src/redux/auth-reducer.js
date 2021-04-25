import {authAPI} from './../api/api'
import {stopSubmit} from 'redux-form'

const SET_AUTH_USER_DATA = 'auth/SET_AUTH_USER_DATA'

let initialState = {
	id: null,
  email: null,
  login: null,
  isAuth: false,
}

let authReducer = (state=initialState, action) => {
	switch (action.type) {

		case SET_AUTH_USER_DATA:
			return {
				...state,
				...action.payload,
			}

		default:
			return state;
	}
}

export let setAuthUserData = (id, email, login, isAuth) => ({
	type: SET_AUTH_USER_DATA,
	payload: {id, email, login, isAuth},
})

export let getAuthUserData = () => async (dispatch) => {
	let response = await authAPI.getAuthData()
	if (!response.data.resultCode) {
		let {id, email, login} = response.data.data
		dispatch(setAuthUserData(id, email, login, true))
	}
}

export let login = (email, password, rememberMe) => async (dispatch) => {
	let response = await authAPI.login(email, password, rememberMe)
	if (!response.data.resultCode) {
		dispatch(getAuthUserData())
	} else {
		let errorMessage = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
		dispatch(stopSubmit('login', {_error: errorMessage}))
	}
}

export let logout = () => async (dispatch) => {
	let response = await authAPI.logout()
	if (!response.data.resultCode) {
		dispatch(setAuthUserData(null, null, null, false))
	}
}

export default authReducer