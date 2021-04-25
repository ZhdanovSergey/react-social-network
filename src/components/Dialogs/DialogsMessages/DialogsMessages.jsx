import {connect} from 'react-redux'
import {addMessage} from './../../../redux/dialogs-reducer.js'
import DialogsForm from './DialogsForm/DialogsForm'
import el from './DialogsMessages.module.css'


let DialogsMessages = (props) => (
	<div className={`${el.block} ${props.className}`}>
		<div>
			{props.messagesList.map((item) => (
				<div className={el.item}>{item.message}</div>
			))}
		</div>
		<DialogsForm onSubmit={(formData) => { props.addMessage(formData.message) }} />
	</div>
)

let mstp = (state) => ({
	messagesList: state.messagesPage.messagesList,
})
let mdtp = {
	addMessage,
}

export default connect(mstp,mdtp)(DialogsMessages);