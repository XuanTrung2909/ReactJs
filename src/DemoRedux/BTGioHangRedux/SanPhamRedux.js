import React, { Component } from 'react';
import {connect} from 'react-redux';

class SanPhamRedux extends Component {

    render() {

        let {product} = this.props;
        return (
            <div className="card text-left">
                <img className="card-img-top img-fluid" src={product.hinhAnh} alt={product.tenSP} />
                <div className="card-body">
                    <h4 className="card-title">{product.tenSP}</h4>
                    <button className="btn btn-success" onClick={() => {
                        this.props.themGioHang(product)
                    }}>Them gio hang</button>
                    {/* <button className="btn btn-success ml-3">Them vao Gio Hang</button> */}
                </div>
            </div>

        )
    }
}


const mapDispatchToProps = (dispatch) => {// dispatch giong nhu phuong thuc setstate trong reactclass component
    return {
        themGioHang: (spClick) => {
            let spGioHang = {
                maSP: spClick.maSP, 
                tenSP: spClick.tenSP, 
                gia: spClick.giaBan,
                soLuong: 1,
                hinhAnh: spClick.hinhAnh
            }
            const action = {
                type: 'THEM_GIO_HANG', //day la thuoc tinh bat buoc de reducer nhan bien gia tri
                spGioHang: spGioHang
            }

            //gui action len reducer

            dispatch(action);
        }
    }
}

//ket noi component voi store

export default connect(null, mapDispatchToProps)(SanPhamRedux)