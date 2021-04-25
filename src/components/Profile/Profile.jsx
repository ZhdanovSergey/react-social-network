import React from 'react'
import {connect} from 'react-redux'
import {getUserProfile, getStatus, updateStatus} from './../../redux/profile-reducer.js'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'
import styles from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import MyPosts from './MyPosts/MyPosts'

class Profile extends React.Component {

	componentDidMount() {
		let userId = this.props.match.params.userId || this.props.authorizedUserId
		if (!userId) {
			this.props.history.push('/login')
		} else {
			this.props.getUserProfile(userId)
			this.props.getStatus(userId)
		}
	}

	render() {
		return (
			<div className={`${styles.block} ${this.props.className}`}>
	      <ProfileInfo className={styles.info}
	      						 profile={this.props.profile}
	      						 status={this.props.status}
	      						 updateStatus={this.props.updateStatus} />
	    	<MyPosts className={styles.posts}
	    					 state={this.props.myPosts}/>
	    </div>
		)
	}
}

let mstp = (state) => ({
	profile: state.profilePage.profile,
	status: state.profilePage.status,
	authorizedUserId: state.auth.id,
})
let mdtp = {
	getUserProfile,
	getStatus,
	updateStatus,
}

export default compose(
	withRouter,
	connect(mstp, mdtp),
)(Profile)