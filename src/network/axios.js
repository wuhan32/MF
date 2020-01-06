import originAxios from 'axios'

export default function axios(option) {
	return new Promise((resolve, reject) => {
		const instance = originAxios.create({
			baseURL: 'http://www.dahengzh.com:8080/oa',
		});
	 

		instance(option).then(res => {
			resolve(res)
		}).catch(err => {
			reject(err)
		})
	})
}

