import profileReducer, {addPost} from './profile-reducer'


let initState = {
	posts: [
		{message: 'Hi, how are you?', likesCount: 1},
    {message: 'It\'s my first post', likesCount: 5},
	],
	newPostText: '',
	'profile': null,
	'status': '',
}

it('length of posts should be incremented', () => {
	let action = addPost('test message')
	let newState = profileReducer(initState, action)
	expect(newState.posts.length).toBe(3)
})

it('new post message should be correct', () => {
	let action = addPost('test message')
	let newState = profileReducer(initState, action)
	expect(newState.posts[2].message).toBe('test message')
}) 