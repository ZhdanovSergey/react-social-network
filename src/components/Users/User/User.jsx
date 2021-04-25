import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {follow, unfollow} from './../../../redux/users-reducer'
import {getFollowingInProgressArr} from './../../../redux/users-selectors'
import styles from './User.module.css'
import userDefaultPhoto from './../../../assets/images/user-default-photo.png'

let User = (props) => {

	let isFollowingInProgress = props.followingInProgressArr.some(id => id === props.id)

	return (
		<div className={`${styles.block} ${props.className}`}>
			<div className={styles.aside}>
				<NavLink to={'/profile/' + props.id} className={styles.photo}>
					<img src={(props.photos.small !== null) ? props.photos.small : userDefaultPhoto} alt=""/>
				</NavLink>
				{
					(props.followed)
					? <button disabled={isFollowingInProgress} onClick={() => {
						props.unfollow(props.id)
					}} className={styles.followBtn}>unfollow</button>
					: <button disabled={isFollowingInProgress} onClick={() => {
						props.follow(props.id)
					}} className={styles.followBtn}>follow</button>
				}
				
			</div>
			<div className={styles.main}>
				<div className={styles.left}>
					<div className={styles.name}>{props.name}</div>
					<div className={styles.status}>{props.status}</div>
				</div>
				<div className={styles.right}>
					<div className={styles.country}>{props.country}</div>
					<div className={styles.city}>{props.city}</div>
				</div>
			</div>
		</div>
	)
}

let mstp = (state) => ({
	followingInProgressArr: getFollowingInProgressArr(state),
})

let mdtp = {
	follow,
	unfollow,
}

export default connect(mstp, mdtp)(User)