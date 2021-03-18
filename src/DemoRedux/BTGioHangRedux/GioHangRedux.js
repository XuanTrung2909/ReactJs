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
                    <td><img src={spGH.hinhAnh} alt={spGH.tenSP}/></td>
                    <td>{spGH.gia}</td>
                    <td>{spGH.soLuong}</td>
                    <td>{spGH.maSP}</td>
                    <td>{spGH.maSP}</td>
                    <td>{spGH.maSP}</td>
                    <td>{spGH.maSP}</td>
                </tr>
            )
        })
    }
    render() {
        console.log(this.props);
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


//Bien doi BTGioHangRedux thanh BaiTapGioHang co ket noi voi redux 


export default connect(mapStateToProps)(GioHangRedux)