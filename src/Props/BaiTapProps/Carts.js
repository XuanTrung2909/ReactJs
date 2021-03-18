import React, { Component } from 'react'

export default class Carts extends Component {

    renderGioHang = () => {
        let {gioHang, xoaGioHang, tangGiamSL} = this.props;
        return gioHang.map((sp, index) => {
            return (
                <tr key={index}>
                    <td>{sp.maSP}</td>
                    <td>{sp.tenSP}</td>
                    <td><img src={sp.hinhAnh} alt={sp.tenSP} width="30"/></td>
                    <td>
                        <button className="btn btn-primary" onClick={()=>{
                            tangGiamSL(sp.maSP, false);
                        }}>-</button>
                        {sp.soLuong}
                        <button className="btn btn-primary" onClick={()=>{
                            tangGiamSL(sp.maSP, true);
                        }}>+</button></td>
                    <td>{sp.giaBan.toLocaleString()}</td>
                    <td>{(sp.giaBan * sp.soLuong).toLocaleString()}</td>
                    <td><button className="btn btn-danger" onClick={()=>{
                        xoaGioHang(sp.maSP);
                    }} >Xóa</button></td>
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
                    <tfoot>
                        <tr></tr>
                    </tfoot>
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
