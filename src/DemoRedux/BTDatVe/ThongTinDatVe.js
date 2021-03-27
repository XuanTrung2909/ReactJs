import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThongTinDatVe extends Component {

    renderGheChon = () => {
        return this.props.danhSachGheDangDat.map((ghe, index) => {
            return (
                <tr key={index}>
                    <td>{ghe.soGhe}</td>
                    <td>{ghe.gia.toLocaleString()}</td>
                    <td><button className='btn btn-danger' onClick={() => {
                        this.props.xoaGheChon(ghe.soGhe)
                    }}>X</button></td>
                </tr>
            )
        })
    }
    tongTienVe = () => {
        return this.props.danhSachGheDangDat.reduce((tongTien, ghe, index) => {
            return tongTien += ghe.gia;
        }, 0)
    }
    render() {
        return (
            <div className='text-white'>
                <h3 className='text-center mb-5'>Danh Sach Ghe Dang Chon</h3>
                <div>
                    <button className='gheDangChon m-0'></button> Ghe Dang Chon
                </div>
                <div>
                    <button className='ghe m-0'></button> Ghe Chua Chon
                </div>
                <div>
                    <button className='gheDuocChon m-0'></button>Ghe Duoc Chon
                </div>
                <table className='table mt-5'>
                    <thead>
                        <tr>
                            <th>So ghe</th>
                            <th>Gia</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderGheChon()}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>Tổng Tiền</td>
                            <td>{this.tongTienVe().toLocaleString()}</td>
                            <td><button className='btn btn-success'>Đặt Vé</button></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { danhSachGheDangDat: state.BTDatVeReducer.danhSachGheDangDat }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGheChon: (soGhe) => {
            dispatch({
                type: 'XOA_GHE_CHON',
                soGhe
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ThongTinDatVe)