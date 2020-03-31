import React from 'react'
import style from './style.css'
import store from './store.js'
import {observer} from 'mobx-react'
import {toJS} from 'mobx'

@observer
export default class extends React.Component {

    componentWillMount() {
        store.getList();
    }

    render() {
        let list = store.homeList
        console.log('list',toJS(list))
        return (
            <div>
                <h1  className={style.co} style={{padding:'5px'}}>index</h1>
                <div>
                    <ul>
                        {
                            list&&list.map(item => {
                                return <li key={item.id}>
                                    <span>{item.id}</span>
                                    <h3>{item.name}</h3>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}