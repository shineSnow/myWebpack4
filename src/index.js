import "babel-polyfill"
import React, {Component} from "react"
import ReactDOM from "react-dom"
import Container from './container/app'
import {BrowserRouter, Route} from 'react-router-dom'

import routes from './routers/index'

class APP extends Component {
    render() {
        return (
            <BrowserRouter>
                <Container>
                    <div>
                        {routes.map((route, index) => (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                component={route.cmp()}
                            />
                        ))}
                    </div>
                </Container>
            </BrowserRouter>

        )
    }
}

ReactDOM.render(<APP/>, document.getElementById("app"));


if (module.hot) {
    module.hot.accept(() => {
        console.log('资源热更新!')
    })
}