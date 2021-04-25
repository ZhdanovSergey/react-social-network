import * as axios from 'axios'

const instance = axios.create({
	withCredentials: true,
	baseURL: 'https://social-network.samuraijs.com/api/1.0/',
	headers: {
		'api-key': '36662d2d-b224-434c-bf73-d1e05439521c',
	},
})

export const usersAPI = {
	requestUsers(currentPage=1, pageSize=10) {
		return instance.get(`users?page=${currentPage}&count=${pageSize}`)
	},
	follow(id) {
		return instance.post(`follow/${id}`)
	},
	unfollow(id) {
		return instance.delete(`follow/${id}`)
	},
	getUserProfileData(id) {
		console.warn('Obsolete method, please use profileAPI')
		return profileAPI.getProfile(id)
	},
}

export const authAPI = {
	getAuthData() {
		return instance.get('auth/me')
	},
	login(email, password, rememberMe) {
		return instance.post('auth/login', {email, password, rememberMe})
	},
	logout() {
		return instance.delete('auth/login')
	},
}

export const profileAPI = {
	getProfile(id) {
		return instance.get('profile/' + id)
	},
	getStatus(id) {
		return instance.get('profile/status/' + id)
	},
	updateStatus(status) {
		return instance.put('profile/status/', {status})
	},
}