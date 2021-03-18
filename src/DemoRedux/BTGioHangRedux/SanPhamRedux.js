import React, { Component } from 'react'

export default class SanPhamRedux extends Component {

    render() {

        let {product} = this.props;
        return (
            <div className="card text-left">
                <img className="card-img-top img-fluid" src={product.hinhAnh} alt={product.tenSP} />
                <div className="card-body">
                    <h4 className="card-title">{product.tenSP}</h4>
                    <button className="btn btn-success">Xem Chi tiet</button>
                    <button className="btn btn-success">Them vao Gio Hang</button>
                </div>
            </div>

        )
    }
}
