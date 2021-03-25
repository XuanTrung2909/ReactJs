import React, { Component } from 'react';

import {connect} from 'react-redux';

class BTGHProductItem extends Component {
    render() {

        let { productItem } = this.props;
        return (
            <div className="card text-left">
                <img className="card-img-top" src={productItem.hinhAnh} alt={productItem.tenSP} width="50" height="300" />
                <div className="card-body">
                    <h4 className="card-title">{productItem.tenSP}</h4>
                    <button className="btn btn-success" onClick={()=> {
                        this.props.viewProductDetail(productItem)
                    }}>Xem Chi Tiết</button>
                    <button className="btn btn-success ml-3" onClick={()=> {
                        this.props.addProductToCart(productItem)
                    }}>Thêm Vào Giỏ Hàng </button>
                </div>
            </div>

        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        viewProductDetail: (product) => {

            // console.log(product);

            dispatch({
                type: 'VIEW_PRODUCT_DETAIL',
                product
            })
            
        },
        addProductToCart: (product) => {
            // console.log(product);
            dispatch({
                type: 'THEM_GIO_HANG',
                product
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(BTGHProductItem)
