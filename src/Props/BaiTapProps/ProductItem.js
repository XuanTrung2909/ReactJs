import React, { Component } from 'react'

export default class ProductItem extends Component {

    
    render() {
        let {productItem, viewDetail, themGioHang} = this.props;
        return (
            <div className="card text-left">
                <img className="card-img-top img-fluid" src={productItem.hinhAnh} alt={productItem.tenSP} />
                <div className="card-body">
                    <h4 className="card-title">{productItem.tenSP}</h4>
                    <button className="btn btn-success" onClick={() => {
                        viewDetail(productItem);
                    }}>Xem Chi Tiet</button>
                    <button className="btn btn-success ml-4" onClick= {()=>{

                        //su dung ham themgiohang tren component cha (Product)
                        themGioHang(productItem)
                    }}>Them Gio Hang</button>
                </div>
            </div>
        )
    }
}