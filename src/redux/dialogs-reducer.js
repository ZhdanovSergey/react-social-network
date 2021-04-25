const ADD_MESSAGE = 'dialogs/ADD-MESSAGE'

let initialState = {
	dialogsList: [
		{id: 1, name: 'Dima'},
		{id: 2, name: 'Andrey'},
		{id: 3, name: 'Sveta'},
		{id: 4, name: 'Sasha'},
		{id: 5, name: 'Sergey'},
	],
	messagesList: [
		{message: 'Hello'},
		{message: 'How are you?'},
		{message: 'I\'m fine'},
		{message: 'I\'m fine too'},
		{message: 'Good bye!'},
	],
}

const dialogsReducer = (state=initialState, action) => {
	switch (action.type) {
			
		case ADD_MESSAGE:
			return {
				...state,
				messagesList: [...state.messagesList, {message: action.message}],
			}

		default:
			return state;
	}
}

export const addMessage = (message) => ({type: ADD_MESSAGE, message})

export default dialogsReducer