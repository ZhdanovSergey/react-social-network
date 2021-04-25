import React from 'react'
import {compose} from 'redux'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {requestUsers, changePage} from './../../redux/users-reducer'
import {getUsers, getPageSize, getIsFetching, getTotalUsersCount, getPaginatorPortionSize} from './../../redux/users-selectors'
import Pagination from './../common/Pagination/Pagination'
import Preloader from './../common/Preloader/Preloader'
import User from './User/User'
import styles from './Users.module.css'


class Users extends React.Component {

	getPage = () => {
		return parseInt(new URLSearchParams(this.props.location.search).get('page') ?? 1);
	}

	componentDidMount = () => {
		this.props.requestUsers(this.getPage(), this.props.pageSize);
	}

	render() {
		return (
			<div className={`${styles.block} ${this.props.className}`}>

				{ this.props.isFetching ? <Preloader className={styles.preloader}/> : null }

				<Pagination
					className={styles.pagination}
					pageSize={this.props.pageSize}
					currentPage={  this.getPage() }
					totalItemsCount={this.props.totalUsersCount}
					portionSize={this.props.paginatorPortionSize}
					changePage={this.props.changePage}
					url={'/users'}
				/>

				<div className={styles.list}>
					{this.props.users.map((user) => (
						<User	{...user} className={styles.item} />
					))}
				</div>

			</div>
		)
	}
}

let mstp = (state) => ({
	users: getUsers(state),
	pageSize: getPageSize(state),
	totalUsersCount: getTotalUsersCount(state),
	paginatorPortionSize: getPaginatorPortionSize(state),
	isFetching: getIsFetching(state),
})

let mdtp = {
	requestUsers,
	changePage,
}

export default compose(
	withRouter,
	connect(mstp, mdtp),
)(Users)