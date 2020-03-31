import {observable,action} from 'mobx'

import {homeList} from '../../api/index.js'


class Store {
    @observable homeList = [];
    @action getList() {
        homeList().then(res => {
            if(res.code === 200) {
                console.log(res.data)
                 this.homeList = res.data;
            }
        })
    }


}

export default new Store()