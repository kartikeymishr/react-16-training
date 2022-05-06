import axios from 'axios'

const KEY = 'AIzaSyDhiP0HRg0EdAeIserHv_fVd4OZLVSYcEE'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
        type: 'video'
    }
})

