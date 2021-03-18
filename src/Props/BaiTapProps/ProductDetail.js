import React, { Component } from 'react'

export default class ProductDetail extends Component {
    render() {
        let {productDetail} = this.props;
        return (
            <div className="row mt-5">
                <div className="col-4">
                    <h3 className="text-center">{productDetail.tenSP}</h3>
                    <img src={productDetail.hinhAnh} alt={productDetail.tenSP} className="img-fluid"/>
                </div>
                <div className="col-8">
                    <h3 className="text-center">Thông Số Kỹ Thuật</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Màn hình</th>
                                <th>{productDetail.manHinh}</th>
                            </tr>
                            <tr>
                                <th>Hệ Điều hành</th>
                                <th>{productDetail.heDieuHanh}</th>
                            </tr>
                            <tr>
                                <th>Camera Trước</th>
                                <th>{productDetail.cameraTruoc}</th>
                            </tr>
                            <tr>
                                <th>Camera Sau</th>
                                <th>{productDetail.cameraSau}</th>
                            </tr>
                            <tr>
                                <th>RAM</th>
                                <th>{productDetail.ram}</th>
                            </tr>
                            <tr>
                                <th>ROM</th>
                                <th>{productDetail.rom}</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        )
    }
}
