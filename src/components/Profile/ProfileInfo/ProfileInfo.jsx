import s from './ProfileInfo.module.css'
import Preloader from './../../common/Preloader/Preloader'
import userDefaultPhoto from './../../../assets/images/user-default-photo.png'
import ProfileStatus from './ProfileStatus/ProfileStatus'

const ProfileInfo = (props) => {

	if (!props.profile) {
		return <Preloader/>
	}

	return (
		<div className={`${s.block} ${props.className}`}>
      <div className={s.content}>{props.profile.fullName}</div>
      <ProfileStatus className={s.status} status={props.status} updateStatus={props.updateStatus} />
      <img src={ (props.profile.photos.large !== null) ? props.profile.photos.large : userDefaultPhoto} alt=""/>
    </div>
	)
}

export default ProfileInfo