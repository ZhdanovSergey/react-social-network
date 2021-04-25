import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

const withAuthRedirect = (Component) => {

	const AuthRedirectComponent = (props) => {
		if (!props.isAuth) return <Redirect to={'/login'} />
		return <Component {...props} />
	}

	const mstp = (state) => ({
		isAuth: state.auth.isAuth,
	})

	return connect(mstp)(AuthRedirectComponent)
}

export default withAuthRedirect