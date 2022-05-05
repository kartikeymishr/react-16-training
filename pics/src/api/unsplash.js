import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID b2SDP4h3LLtcagrfYWzZ3W7m6P7xFHK_GyMROYetwJg'
    }
})