import React, {Component} from "react"
import ReactDOM from "react-dom"



class APP extends Component {
    render() {
        return (
            <div>
                <h1>this is title</h1>
                <div>it is the success light!总是会有很多坑,但是我会勇往直前!</div>
            </div>
        )
    }
}

ReactDOM.render(<APP/>,document.getElementById("app"))