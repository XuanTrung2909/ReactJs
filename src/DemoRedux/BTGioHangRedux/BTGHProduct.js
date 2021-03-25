import React, { Component } from 'react'
import BTGHCart from './BTGHCart';
import BTGHProductDetail from './BTGHProductDetail';
import BTGHProductItem from './BTGHProductItem'

export default class BTGHProduct extends Component {

    

    renderProduct = () => {
        let {arrProduct} = this.props;
        return arrProduct.map((productItem, index) => {
            return (
                <div className="col-4" key={index}>
                    <BTGHProductItem productItem = {productItem}/>
                </div>
            )
        })
    }
    render() {
        return (
            <div className = "container">
                <h1 className="text-center py-5">GIỎ HÀNG</h1>
                <BTGHCart />
                <h1 className="text-center py-5">DANH SÁCH SẢN PHẨM</h1>
                <div className="row">
                    {this.renderProduct()}
                </div>

                <BTGHProductDetail />
            </div>
        )
    }
}
