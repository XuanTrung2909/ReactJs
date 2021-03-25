import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThongTinDatVe extends Component {

    renderGheChon = () => {
        return this.props.danhSachGheDangDat.map((ghe, index) => {
            return (
                <tr key={index}>
                    <td>{ghe.soGhe}</td>
                    <td>{ghe.gia}</td>
                    <td><button className='btn btn-danger'>X</button></td>
                </tr>
            )
        })
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
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return { danhSachGheDangDat: state.BTDatVeReducer.danhSachGheDangDat }
}

export default connect(mapStateToProps, null)(ThongTinDatVe)