import React from 'react'
import styles from './Header.module.css'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {logout} from './../../redux/auth-reducer'

class Header extends React.Component {

	render() {
		return (
			<div className={`${styles.block} ${this.props.className}`}>
	  		<img src="https://cdn.logo.com/hotlink-ok/logo-social-sq.png" width='50' alt="" />
	  		<div className={styles.loginBlock}>
	  			{	this.props.isAuth
	  				? <div>{this.props.login} - <button onClick={this.props.logout}>Logout</button></div>
	  				: <NavLink to={'/login'}>Login</NavLink>
	  			}
	  		</div>
	  	</div>
		)
	}
}

let mstp = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
})
let mdtp = {
	logout,
}

export default connect(mstp, mdtp)(Header)