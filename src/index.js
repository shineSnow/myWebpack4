import "babel-polyfill"
import React, {Component} from "react"
import ReactDOM from "react-dom"
import {Button} from "antd"
import Container from './container/app'


class APP extends Component {
    render() {
        return (
            <div>
                <Container>
                    <div>it is the success light!总是会有很多坑,但是我会勇往直前!</div>
                </Container>
            </div>
        )
    }
}

ReactDOM.render(<APP/>,document.getElementById("app"))















if(module.hot) {
    module.hot.accept(()=> {
        console.log('资源热更新!')
    })
}