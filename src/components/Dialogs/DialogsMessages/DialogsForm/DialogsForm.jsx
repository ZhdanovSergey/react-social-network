import {reduxForm, Field} from 'redux-form'
import {Textarea} from './../../../common/FormControls/FormControls'
import {required, maxLengthCreator} from './../../../../utils/validators'

let maxLength20 = maxLengthCreator(20);

let DialogsForm = reduxForm({
	form: 'dialogsMessage',
})((props) => (
	<form onSubmit={props.handleSubmit}>
		<Field component={Textarea}
					 validate={[required, maxLength20]}
					 name="message" />
		<button>send</button>
	</form>
))

export default DialogsForm