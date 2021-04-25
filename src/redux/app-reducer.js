import {getAuthUserData} from './auth-reducer'


const INITIALIZING_SUCCESS = 'app/INITIALIZING_SUCCESS'

let initialState = {
	initialized: false,
}

let appReducer = (state=initialState, action) => {
	switch (action.type) {

		case INITIALIZING_SUCCESS:
			return {
				...state,
				initialized: true,
			}

		default:
			return state
	}
}

export let initializingSuccess = () => ({type: INITIALIZING_SUCCESS})

export let initialize = () => (dispatch) => {
	Promise.all([
		dispatch(getAuthUserData()),
	]).then(() => {
		dispatch(initializingSuccess())
	})
}

export default appReducer