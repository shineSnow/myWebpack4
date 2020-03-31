import Api from '../util/api.js'
const url = {
    homeList:'http://localhost/money/'
}




export const homeList = () => {
    return Api.get(url.homeList)
}