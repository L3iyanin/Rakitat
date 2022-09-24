import axios from 'axios';

export const getChannelInfo = (channelId: string) => {
	return axios.get(`/chat/members/${channelId}`)
			.then(res => res.data)
			// .catch(err => console.error(`err`, err))
};

export const addFriendToChannel = (channelId: string, friendId: string) => {
	return axios.post(`/chat/add/${friendId}/${channelId}`)
			.then(res => res.data)
			// .catch(err => console.error(`err`, err))
}

export const makeMemberAdmin = (channelId: string, userId: string) => {
	return axios.post(`/chat/make-admin/${userId}/${channelId}`)
			.then(res => res.data)
			// .catch(err => console.error(`err`, err))
}

export const makeAdminMember = (channelId: string, userId: string) => {
	return axios.post(`/chat/make-member/${userId}/${channelId}`)
			.then(res => res.data)
			// .catch(err => console.error(`err`, err))
}

export const kickOutMember = (channelId: string, userId: string) => {
	return axios.post(`/chat/kick/${userId}/${channelId}`)
			.then(res => res.data)
			// .catch(err => console.error(`err`, err))
}