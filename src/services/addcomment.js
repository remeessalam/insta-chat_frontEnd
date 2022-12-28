import axios from './axioscall'

const addComment = (postId, text) => {

    let token = JSON.parse(localStorage.getItem('userToken'))

    return new Promise((resolve, rejecct) => {
        axios.post('/post/sendcomment', { postId, text }, { headers: { 'x-access-token': token } }).then(data => {
            resolve(data.data)
        }).catch(err => rejecct(err))
    })
}



export default addComment