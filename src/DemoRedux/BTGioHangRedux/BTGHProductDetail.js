import React, { Component } from 'react'
import {connect} from 'react-redux'

class BTGHProductDetail extends Component {
    render() {
        return (
            <div className="row mt-5">
                <div className="col-4">
                    <h3 className="text-center">{this.props.productDetail.tenSP}</h3>
                    <img src={this.props.productDetail.hinhAnh} alt={this.props.productDetail.tenSP} className="img-fluid"/>
                </div>
                <div className="col-8">
                    <h3 className="text-center">Thông Số Kỹ Thuật</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Màn hình</th>
                                <th>{this.props.productDetail.manHinh}</th>
                            </tr>
                            <tr>
                                <th>Hệ Điều hành</th>
                                <th>{this.props.productDetail.heDieuHanh}</th>
                            </tr>
                            <tr>
                                <th>Camera Trước</th>
                                <th>{this.props.productDetail.cameraTruoc}</th>
                            </tr>
                            <tr>
                                <th>Camera Sau</th>
                                <th>{this.props.productDetail.cameraSau}</th>
                            </tr>
                            <tr>
                                <th>RAM</th>
                                <th>{this.props.productDetail.ram}</th>
                            </tr>
                            <tr>
                                <th>ROM</th>
                                <th>{this.props.productDetail.rom}</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {productDetail: state.BTGHProductDetailReducer.productDetail};
}

export default connect(mapStateToProps, null)(BTGHProductDetail)
