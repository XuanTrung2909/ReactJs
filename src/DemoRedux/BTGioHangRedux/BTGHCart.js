import React, { Component } from 'react';
import {connect} from 'react-redux';

class BTGHCart extends Component {

    renderCart = () => {
        return this.props.arrProductCart.map((productCart, index) => {
            
            return(
                <tr key={index}>
                    <td>{productCart.maSP}</td>
                    <td>{productCart.tenSP}</td>
                    <td><img src={productCart.hinhAnh} alt={productCart.tenSP} width="30"/></td>
                    <td>
                        <button className="btn" onClick={() => {
                            this.props.tangGiamSL(productCart.maSP, -1)
                        }}>-</button>
                        {productCart.soLuong}
                        <button className="btn" onClick={() => {
                            this.props.tangGiamSL(productCart.maSP, 1)
                        }}>+</button>
                    </td>
                    <td>{productCart.giaBan}</td>
                    <td>{productCart.soLuong * productCart.giaBan}</td>
                    <td><button className="btn btn-danger" onClick={() => {
                        this.props.deleteCart(productCart.maSP)
                    }}>Xóa</button></td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Hình Ảnh</th>
                            <th>
                                Số Lượng
                            </th>
                            <th>Đơn Giá</th>
                            <th>Thành Tiền</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderCart()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {arrProductCart: state.BTGHCart.giohang}
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteCart: (maSP) => {
            dispatch({
                type: "XOA_GIO_HANG",
                maSP
            })
        },
        tangGiamSL: (maSP, tangGiam) => {
            dispatch({
                type: 'TANG_GIAM_SO_LUONG',
                maSP,
                tangGiam
            })
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(BTGHCart)
