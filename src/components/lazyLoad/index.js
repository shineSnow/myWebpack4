import React from 'react'

import test from '../../asset/imgs/test.jpg'

const list = [
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
    {origin:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1536668888316&di=2507f347800a0218bac7d5b7aa3efb26&imgtype=jpg&src=http%3A%2F%2Fimg2.imgtn.bdimg.com%2Fit%2Fu%3D3069461887%2C2943087415%26fm%3D214%26gp%3D0.jpg"},
]

export default class extends React.Component {
    componentDidMount() {
        window.addEventListener("scroll",() => {
            console.log()
        },false)
        console.log(this.ref)
    }
    render() {

        return (
            <div>
                <h1>lazyload</h1>
                <ul>
                    {
                        list.map((v,i) => {
                            return <li><img  ref ={(ele) => this.img = ele} style={{height:'200px'}} src={v.origin} data-scr={v.origin} key={i} alt={i}/></li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
