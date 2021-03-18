import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
      let {product, viewDetail, datHang} = this.props;
    return (
      <div className="card text-left">
        <img
          className="card-img-top img-fluid"
          src={product.hinhAnh}
          alt={product.tenSP}
        />
        <div className="card-body">
          <h4 className="card-title">{product.tenSP}</h4>
          <button className="btn btn-success" onClick={() =>{
              viewDetail(product);
          }}>Xem Chi Tiết</button>
          <button className="btn btn-success ml-5" onClick={() => {
            datHang(product);
          }} >Đặt Hàng</button>
        </div>
      </div>
    );
  }
}
