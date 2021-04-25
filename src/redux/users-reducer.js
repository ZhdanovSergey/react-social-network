import {usersAPI} from './../api/api'
import {updateObjectsInArray} from './../utils/object-helpers'

const FOLLOW_SUCCESS = 'users/FOLLOW_SUCCESS'
const UNFOLLOW_SUCCESS = 'users/UNFOLLOW_SUCCESS'
const SET_USERS = 'users/SET_USERS'
const SET_TOTAL_USERS_COUNT = 'users/SET_TOTAL_USERS_COUNT'
const SET_IS_FETCHING = 'users/SET_IS_FETCHING'
const SET_FOLLOWING_IN_PROGRESS_ARR = 'users/SET_FOLLOWING_IN_PROGRESS_ARR'

let initialState = {
	users: [],
	pageSize: 5,
	paginatorPortionSize: 10,
	totalUsersCount: 0,
	isFetching: false,
	followingInProgressArr: [],
}

const usersReducer = (state=initialState, action) => {

	switch(action.type) {

		case FOLLOW_SUCCESS:
			return {
				...state,
				users: updateObjectsInArray(state.users, 'id', action.id, {followed: true}),
			}

		case UNFOLLOW_SUCCESS:
			return {
				...state,
				users: updateObjectsInArray(state.users, 'id', action.id, {followed: false}),
			}

		case SET_USERS:
			return {
				...state,
				users: [...action.users],
			}

		case SET_TOTAL_USERS_COUNT:
			return {
				...state,
				totalUsersCount: action.totalUsersCount,
			}

		case SET_IS_FETCHING:
			return {
				...state,
				isFetching: action.isFetching,
			}

		case SET_FOLLOWING_IN_PROGRESS_ARR:
			return {
				...state,
				followingInProgressArr: action.isFollowingInProgress
					? [...state.followingInProgressArr, action.id]
					: state.followingInProgressArr.filter(id => id !== action.id),
			}

		default:
			return state;
	}
}

export const followSuccess = (id) => ({type: FOLLOW_SUCCESS, id})
export const unfollowSuccess = (id) => ({type: UNFOLLOW_SUCCESS, id})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setTotalUsersCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, totalUsersCount})
export const setIsFetching = (isFetching) => ({type: SET_IS_FETCHING, isFetching})
export const setFollowingInProgressArr = (id, isFollowingInProgress) => ({type: SET_FOLLOWING_IN_PROGRESS_ARR, id, isFollowingInProgress})

export const requestUsers = (currentPage, pageSize) => async (dispatch) => {
	dispatch(setIsFetching(true))
	let response = await usersAPI.requestUsers(currentPage, pageSize)
	dispatch(setUsers(response.data.items))
	dispatch(setTotalUsersCount(response.data.totalCount))
	dispatch(setIsFetching(false))
}

export const changePage = (pageNumber, pageSize) => (dispatch) => {
	dispatch(requestUsers(pageNumber, pageSize))
}

let followUnfollowFlow = async (dispatch, apiMethod, actionCreator, id) => {
	dispatch(setFollowingInProgressArr(id, true))
	let response = await apiMethod(id)
	if (!response.data.resultCode) {
		dispatch(actionCreator(id))
	}
	dispatch(setFollowingInProgressArr(id, false))
}

export const follow = (id) => async (dispatch) => {
	followUnfollowFlow(dispatch, usersAPI.follow.bind(usersAPI), followSuccess, id)
}

export const unfollow = (id) => async (dispatch) => {
	followUnfollowFlow(dispatch, usersAPI.unfollow.bind(usersAPI), unfollowSuccess, id)
}

export default usersReducer