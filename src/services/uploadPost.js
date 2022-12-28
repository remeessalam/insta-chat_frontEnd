import axios from './axioscall'

const InsertPost = (post) => {

    return (
        new Promise(async (resolve, reject) => {
            let token = JSON.parse(localStorage.getItem('userToken'))
            const data = await axios.post('/post/uploadPost', { post }, { headers: { 'x-access-token': token } })
            resolve(data)
        })
    )
}

export default InsertPost