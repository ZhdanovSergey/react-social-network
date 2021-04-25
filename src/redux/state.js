import dialogsReducer from './dialogs-reducer.js'
import profileReducer from './profile-reducer.js'

let store = {
	_state: {
		profilePage: {
			myPosts: {
				posts: [
					{message: 'Hi, how are you?', likesCount: 1},
			    {message: 'It\'s my first post', likesCount: 5},
				],
				newPostText: '',
			},
		},
		messagesPage: {
			dialogsList: [
				{id: 1, name: 'Dima'},
				{id: 2, name: 'Andrey'},
				{id: 3, name: 'Sveta'},
				{id: 4, name: 'Sasha'},
				{id: 5, name: 'Sergey'},
			],
			messages: {
				messagesList: [
					{message: 'Hello'},
					{message: 'How are you?'},
					{message: 'I\'m fine'},
					{message: 'I\'m fine too'},
					{message: 'Good bye!'},
				],
				'newMessageText': '',
			},
		},
	},
	_callSubscriber() {
	},
	getState() {
		return this._state;
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},
	dispatch(action){
		this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._callSubscriber(this._state);
	},
}

export default store