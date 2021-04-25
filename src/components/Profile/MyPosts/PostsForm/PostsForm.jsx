import {reduxForm, Field} from 'redux-form'
import {required, maxLengthCreator} from './../../../../utils/validators'
import {Textarea} from './../../../common/FormControls/FormControls'

let maxLength10 = maxLengthCreator(10)

let PostsForm = reduxForm({
  form: 'posts',
})((props) => (
	<form onSubmit={props.handleSubmit}>
    <div>
      <Field component={Textarea}
      			 name="message"
      			 validate={[required, maxLength10]}
      			 placeholder="Let`s write post!" />
    </div>
    <div>
      <button>send</button>
    </div>
  </form>
))

export default PostsForm