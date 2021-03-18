import React, { Component } from "react";
import Carts from "./Carts";
import ProductDetail from "./ProductDetail";
import ProductItem from "./ProductItem";

export default class Product extends Component {
  arrProduct = [
    {
      maSP: 1,
      tenSP: "VinSmart Live",
      manHinh: 'AMOLED, 6.2", Full HD+',
      heDieuHanh: "Android 9.0 (Pie)",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 5700000,
      hinhAnh: "./img-20210304/img/vsphone.jpg",
    },

    {
      maSP: 2,
      tenSP: "Meizu 16Xs",
      manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
      heDieuHanh: "Android 9.0 (Pie); Flyme",
      cameraTruoc: "20 MP",
      cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 7600000,
      hinhAnh: "./img-20210304/img/meizuphone.jpg",
    },

    {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: 'OLED, 6.5", 1242 x 2688 Pixels',
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img-20210304/img/applephone.jpg",
    },
  ]

  state = {
      productDetail: this.arrProduct[0],
      gioHang: []
  }

  renderProduct = () => {
    return this.arrProduct.map((product, index) => {
      return (
        <div className="col-4" key={index}>
            <ProductItem product = {product} viewDetail={this.viewDetail} datHang={this.datHang}/>
        </div>
      );
    });
  };

  viewDetail = (product) => {
        this.setState({
            productDetail: product
        })
  }

  datHang = (product) => {

    //lay thong tin can thiet tu san pham da click

    let spGioHang = {
        maSP: product.maSP,
        tenSP: product.tenSP,
        hinhAnh: product.hinhAnh,
        soLuong: 1,
        giaBan: product.giaBan
    }
    console.log(spGioHang);
    // console.log(spGioHang.giaBan * spGioHang.soLuong);

    //tao ra gio hang tam de them san pham

     let gioHangCapNhat = [...this.state.gioHang];

     //kiem tra xem san pham co trong gio hang chua

     let index = gioHangCapNhat.findIndex(sp => sp.maSP === spGioHang.maSP)

     if(index !== -1){
         gioHangCapNhat[index].soLuong += 1;
     }else{
         gioHangCapNhat.push(spGioHang);
     }



     //set state cho gio hang

     this.setState({
         gioHang: gioHangCapNhat
     })

  }

  render() {
    return (
      <div className="container">
        <Carts gioHang = {this.state.gioHang}/>
        <h3 className="text-center py-5">DANH SÁCH SẢN PHẨM</h3>
        <div className="row">
            {this.renderProduct()}
        </div>

        <ProductDetail productDetail={this.state.productDetail}/>
      </div>
    );
  }
}
