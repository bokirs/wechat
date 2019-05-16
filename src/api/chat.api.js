import axios from 'axios'
// import HttpRequest from "./axios.request"
// const baseUrl = "";
// const axios = new HttpRequest(baseUrl);

const option = {
    url: "",
    location: {
        "city": "武汉",
        "province": "湖北",
        "street": "光谷"
    },
    userId: 327365736
}
export const chat = (msg, options = option ) => {
    const data = {
        "reqType":0,
        "perception": {
            "inputText": {
                "text": msg
            },
            "inputImage": {
                "url": option.url
            },
            "selfInfo": {
                "location": options.location
            }
        },
        "userInfo": {
            "apiKey": "a3852b96b4bb48a4b723e8fb0f947fd9",
            "userId": option.userId
        }
    }
    return new Promise((resolve,reject) => {
        axios.post("/api/v2",data).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}