import {reduxForm, Field} from 'redux-form'
import {Input} from './../common/FormControls/FormControls'
import styles from './../common/FormControls/FormControls.module.css'
import {required} from './../../utils/validators'
import {login} from './../../redux/auth-reducer'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'


let LoginForm = reduxForm({
	form: 'login',
})((props) => (
	<form onSubmit={props.handleSubmit}>
		<div>
			<Field name="login" component={Input} type="text"	placeholder="Login"	validate={[required]} />
		</div>
		<div>
			<Field name="password" component={Input} type="password" placeholder="Password"	validate={[required]} />
		</div>
		<div>
			<label>
				<Field name="rememberMe" component="input" type="checkbox" />
				remember me
			</label>
		</div>
		{ props.error && <div className={styles.formSummaryError}>{props.error}</div> }
		<button>Log in</button>
	</form>
))


let Login = (props) => {

	let onSubmit = (formData) => {
		props.login(formData.login, formData.password, formData.rememberMe);
	}

	if (props.isAuth) return <Redirect to="/profile" />

	return (
		<div>
			<h1>LOGIN</h1>
			<LoginForm onSubmit={onSubmit}/>
		</div>
	)
}

let mstp = (state) => ({
	isAuth: state.auth.isAuth,
})
let mdtp = {
	login,
}

export default connect(mstp, mdtp)(Login)