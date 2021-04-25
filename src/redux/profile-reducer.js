import {usersAPI, profileAPI} from './../api/api'


const ADD_POST = 'profile/ADD-POST'
const SET_USER_PROFILE = 'profile/SET_USER_PROFILE'
const SET_STATUS = 'profile/SET_STATUS'

let initialState = {
	posts: [
		{message: 'Hi, how are you?', likesCount: 1},
    {message: 'It\'s my first post', likesCount: 5},
	],
	newPostText: '',
	'profile': null,
	'status': '',
}

const profileReducer = (state=initialState, action) => {
	switch (action.type) {
			
		case ADD_POST:
			return {
				...state,
				posts: [...state.posts, {message: action.message, likesCount: 0}],
			}

		case SET_USER_PROFILE:
			return {
				...state,
				profile: action.profile,
			}

		case SET_STATUS:
			return {
				...state,
				status: action.status,
			}

		default:
			return state;
	}
}

export const addPost = (message) => ({type: ADD_POST, message})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (id) => async (dispatch) => {
	let response = await usersAPI.getUserProfileData(id)
	dispatch(setUserProfile(response.data))
}

export const getStatus = (id) => async (dispatch) => {
	let response = await profileAPI.getStatus(id)
	dispatch(setStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
	let response = await profileAPI.updateStatus(status)
	if (!response.data.resultCode) {
		dispatch(setStatus(status))
	}
}

export default profileReducer