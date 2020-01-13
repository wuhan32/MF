import originAxios from 'axios'

export default function axios(option) {
    return new Promise((resolve, reject) => {
        const instance = originAxios.create({
            baseURL: 'http://www.dahengzh.com:8080/oa',
            //baseURL: 'http://192.168.0.172:8080/dhjs_web/'
        });


        instance(option).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}