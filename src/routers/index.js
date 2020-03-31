
import Index from '../components/index/index'
import About from '../components/about/index'
import News from '../components/news/index'
import Test from '../components/test/index'
import LazyLoad from '../components/lazyLoad/index'

const routes =[
    {
        path:'/',
        exact: true,
        cmp:() => Index,
    },
    {
        path:'/about',
        cmp:() => About,
    },
    {
        path:'/news',
        cmp:() => News,
    },
    {
        path:'/test',
        cmp:() => Test,
    },
    {
        path:'/lazyLoad',
        cmp:() => LazyLoad
    }
]



export default routes

