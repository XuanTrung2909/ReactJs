import React, { Component } from 'react'

export default class Carts extends Component {

    renderGioHang = () => {
        let {gioHang} = this.props;
        return gioHang.map((sp, index) => {
            return (
                <tr key={index}>
                    <td>{sp.maSP}</td>
                    <td>{sp.tenSP}</td>
                    <td><img src={sp.hinhAnh} alt={sp.tenSP} width="30"/></td>
                    <td>{sp.soLuong}</td>
                    <td>{sp.giaBan}</td>
                    <td>{sp.giaBan * sp.soLuong}</td>
                    <td><button className="btn btn-danger">Xóa</button></td>
                </tr>
            )
        })
    }


    render() {
        
        return (
            <div>
                <h3 className="text-center">GIỎ HÀNG</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Mã SP</th>
                            <th>Tên SP</th>
                            <th>Hình Ảnh</th>
                            <th>Số Lượng</th>
                            <th>Đơn Giá</th>
                            <th>Thành Tiền</th>
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


/**
 *
 * Xac dinh state dat o noi nao
 *
 *  + dat o noi thay doi giao dien
 *
 *  + dat o noi chua nut xu ly
 * 
 * 
 * xu ly thoi doi state
 * 
 *  + xay dung phuong thuc setstate tai component chua state
 */
