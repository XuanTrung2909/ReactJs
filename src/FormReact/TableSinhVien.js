import React, { Component } from 'react';
import {connect} from 'react-redux';

class TableSinhVien extends Component {

    renderSinhVien = ()=> {
        return this.props.mangSinhVien.map((sv, index) => {
            return (
                <tr key={index}>
                    <td>{sv.maSinhVien}</td>
                    <td>{sv.tenSinhVien}</td>
                    <td>{sv.email}</td>
                    <td>{sv.soDienThoai}</td>
                    <td>
                        <button className='btn btn-danger mr-2' onClick={() => {
                            this.props.dispatch({
                                type: 'XOA_SINH_VIEN',
                                maSinhVien: sv.maSinhVien
                            })
                        }}>Xoa</button>
                        <button className='btn btn-primary' onClick={() => {
                            this.props.dispatch({
                                type: 'SUA_SINH_VIEN',
                                sv: sv
                            })
                        }}>sua</button>
                    </td>
                </tr>
            )
        })
    }
    render() {
        return (
            <div className='container'>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>Mã Sinh Viên</td>
                            <td>Tên Sinh Viên</td>
                            <td>Email</td>
                            <td>Số Điện Thoại</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderSinhVien()}
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        mangSinhVien : state.QuanLySinhVienReducer.mangSinhVien
    }
}



export default connect(mapStateToProps, null)(TableSinhVien)
