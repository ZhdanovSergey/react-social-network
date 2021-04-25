let initialState = {
	navList: [
		{url: '/profile', text: 'Profile'},
		{url: '/messages', text: 'Messages'},
		{url: '/users', text: 'Users'},
		{url: '/news', text: 'News'},
		{url: '/music', text: 'Music'},
		{url: '/settings', text: 'Settings'},
	],
}

const navbarReducer = (state=initialState, action) => {
	switch (action.type) {
		default:
			return state;
	}
}

export default navbarReducer