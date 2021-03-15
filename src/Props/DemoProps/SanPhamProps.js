import React, { Component } from 'react'

export default class SanPhamProps extends Component {
    render() {


        let {sanPham} = this.props;

        //props dung de nhan gia tri tu component cha truyen vao
        return (
            <div>
                <div className="card text-left">
                    <img className="card-img-top" src={sanPham.img} alt={sanPham.name} />
                    <div className="card-body">
                        <h4 className="card-title">{sanPham.name}</h4>
                        <p className="card-text">{sanPham.price}</p>
                    </div>
                </div>
            </div>

        )
    }
}
