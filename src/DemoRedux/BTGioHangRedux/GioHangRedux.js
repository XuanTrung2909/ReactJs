import React, { Component } from 'react'
//ket noi component voi store tu redux

import { connect } from 'react-redux';

class GioHangRedux extends Component {


    renderGioHang = () => {
        return this.props.gioHangProps.map((spGH, index)=> {
            return(
                <tr key={index}>
                    <td>{spGH.maSP}</td>
                    <td>{spGH.tenSP}</td>
                    <td><img src={spGH.hinhAnh} alt={spGH.tenSP} width="30"/></td>
                    <td>{spGH.gia}</td>
                    <td>
                        <button className="btn" onClick={() =>{
                            this.props.tangGiamSL(spGH.maSP, -1)
                        }}>-</button>
                            {spGH.soLuong}
                        <button className="btn" onClick={() => {
                            this.props.tangGiamSL(spGH.maSP, 1)
                        }}>+</button>
                    </td>
                    <td>{spGH.gia * spGH.soLuong}</td>
                    <td><button className="btn btn-danger" onClick = {() => {
                        this.props.xoaGioHang(spGH.maSP)
                    }}>Xoa</button></td>
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
                            <th>maSP</th>
                            <th>TenSP</th>
                            <th>Hinh Anh</th>
                            <th>Don Gia</th>
                            <th>So Luong</th>
                            <th>Thanh Tien</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGioHang()}
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // ghi chu state chinh la routReducer (state tong cua ung dung)

    //ham nay tao ra props tu state cua redux

    return {
        gioHangProps: state.gioHangReducer.gioHang
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang : (maSPGHClick) => {

            // console.log(maSPGHClick);
            const action = {
                type: 'XOA_GIO_HANG',
                maSPGHClick
            }

            dispatch(action);
        },
        tangGiamSL : (maSPGHClick, tangGiam) => {
            dispatch({
                type: 'TANG_GIAM_SL',
                maSPGHClick,
                tangGiam
            })
        }
    }
}




//Bien doi BTGioHangRedux thanh BaiTapGioHang co ket noi voi redux 


export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux)