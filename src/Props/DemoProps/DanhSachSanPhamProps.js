import React, { Component } from 'react'
import SanPhamProps from './SanPhamProps'

export default class DanhSachSanPhamProps extends Component {


    productList = [
        { id: 1, name: 'iphoneX', price: 1000, img: 'https://picsum.photos/200/200' },
        { id: 2, name: 'iphoneXS', price: 2000, img: 'https://picsum.photos/200/200' },
        { id: 3, name: 'iphoneXS Max', price: 3000, img: 'https://picsum.photos/200/200' }
    ];

    renderSanPham = () => {
        return this.productList.map((product, index) => {
            return <div className="col-4" key={index}>
                <SanPhamProps sanPham={product}/>
            </div>
        })
    }
    render() {
        return (
            <div className="container mt-5">
                <div className="row">
                    {this.renderSanPham()}
                </div>

            </div>
        )
    }
}
