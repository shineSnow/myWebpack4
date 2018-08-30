import App from "./app.js"



if(module.hot) {
    module.hot.accept(()=> {
        console.log('资源热更新!')
    })
}