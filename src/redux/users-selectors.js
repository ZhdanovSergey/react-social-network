import {createSelector} from 'reselect';

let getUsersPrimitive = (state) => {
	return state.usersPage.users;
};

export let getUsersWrong = (state) => {
	return getUsersPrimitive(state).filter(u => true);
};

export let getUsers = createSelector(getUsersPrimitive, (users) => {
	return users.filter(u => true);
});

export let getPageSize = (state) => {
	return state.usersPage.pageSize;
};

export let getIsFetching = (state) => {
	return state.usersPage.isFetching;
};

export let getFollowingInProgressArr = (state) => {
	return state.usersPage.followingInProgressArr;
};

export let getTotalUsersCount = (state) => {
	return state.usersPage.totalUsersCount;
};

export let getPaginatorPortionSize = (state) => {
	return state.usersPage.paginatorPortionSize;
};