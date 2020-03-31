class Api {
    get(url) {
        return fetch(url).then(res => {
            return res.json();
        })
    }

    post(url, data) {
        return fetch(url, {method: 'POST', body: JSON.stringify(data), credentials: 'include'}).then(res => res.json())
    }
}

export default new Api()