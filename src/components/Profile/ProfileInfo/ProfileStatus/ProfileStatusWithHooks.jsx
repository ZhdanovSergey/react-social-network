import React, {useState, useEffect} from 'react'
import styles from './ProfileStatus.module.css'


let ProfileStatusWithHooks = React.memo((props) => {

	let [editMode, setEditMode] = useState(false)
	let [status, setStatus] = useState(props.status)

	useEffect(() => {
		setStatus(props.status)
	}, [props.status])

	let activateEditMode = () => setEditMode(true)
	let deactivateEditMode = () => {
		props.updateStatus(status)
		setEditMode(false)
	}
	let onStatusChange = (e) => setStatus(e.currentTarget.value)
	
	return (
		<div className={`${styles.block} ${props.className}`}>
			{
				editMode
				? <input type="text" value={status} autoFocus={true} onChange={onStatusChange} onBlur={deactivateEditMode} />
				: <div onDoubleClick={activateEditMode}>{props.status || '----------'}</div>
			}
    </div>
	)
})

export default ProfileStatusWithHooks