import React, { Component } from 'react'

export default class Carts extends Component {


    renderGioHang = () => {
        let { gioHang } = this.props;
        return gioHang.map((product, index) => {
            return (
                <tr key={index}>
                    <td>{product.maSP}</td>
                    <td>{product.tenSP}</td>
                    <td><img src={product.hinhAnh} width="50" alt={product.tenSP} /></td>
                    <td>{product.gia}</td>
                    <td>{product.soLuong}</td>
                    <td>{product.gia * product.soLuong}</td>

                    <td><button className="btn btn-danger">Xoa</button></td>
                </tr>
            )
        })
    }


    render() {

        return (
            <div className="container">
                <h3>Gio hang</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ma SP</th>
                            <th>Ten SP</th>
                            <th>Hinh Anh</th>
                            <th>don gia</th>
                            <th>So Luong</th>
                            <th>Thanh Tien</th>
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
