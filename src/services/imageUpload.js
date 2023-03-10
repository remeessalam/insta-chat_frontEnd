import axios from "axios";

const uploadImage = (images) => {

  return new Promise((resolve, reject) => {
    let urls = []
    images.map(async (img) => {
      const formData = new FormData()
      formData.append('file', img)
      formData.append('upload_preset', "bdfqt5ve")
      try {
        let data = await axios.post('https://api.cloudinary.com/v1_1/dgveluvei/image/upload', formData)
        // console.log(data.data.public_id,'gdgdctfdtt')
        if (data) {
          urls.push({ url: data.data.secure_url })
          resolve(urls)
        } else {
          resolve(false)
        }
      } catch (err) {
        reject(err)
        // console.log(err,'return data uploadedddd')
      }
    })
  })
}

export default uploadImage