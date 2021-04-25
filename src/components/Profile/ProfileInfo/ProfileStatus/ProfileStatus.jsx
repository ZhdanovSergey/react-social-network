import React from 'react'
import el from './ProfileStatus.module.css'

class ProfileStatus extends React.Component {

	state = {
		status: this.props.status,
		editMode: false,
	}

	componentDidUpdate = (prevProps, prevState) => {
		if (this.props.status !== prevProps.status) {
			this.setState({
				status: this.props.status,
			})
		}
	}

	activateEditMode = () => {
		this.setState({
			editMode: true,
		})
	}

	deactivateEditMode = () => {
		this.props.updateStatus(this.state.status);
		this.setState({
			editMode: false,
		})
	}

	onStatusChange = (e) => {
		this.setState({
			status: e.currentTarget.value,
		})
	}

	render() {
		return (
			<div className={`${el.block} ${this.props.className}`}>
				{
					!this.state.editMode
					? <span onDoubleClick={this.activateEditMode}>{this.props.status || '----------'}</span>
					: <input type="text" value={this.state.status} autoFocus={true} onBlur={this.deactivateEditMode} onChange={this.onStatusChange} />
				}
	    </div>
		)
	}
}

export default ProfileStatus