import React, { Component } from 'react'

export default class Databinding extends Component {

    SinhVien = {
        ma: 1,
        ten: 'Nguyen Van Teo'
    }

    renderSinhVien = () => {
        let sinhVien = {
            ma: 1,
            ten: 'Nguyen Van A',
            hinhAnh: 'https://picsum.photos/100/100'
        }
        return <div className="card text-left w-25">
            <img className="card-img-top" src={sinhVien.hinhAnh} alt={sinhVien.hinhAnh} />
            <div className="card-body">
                <h4 className="card-title">{sinhVien.ten}</h4>
                <p className="card-text">Body</p>
            </div>
        </div>
    }


    render() {

        let name = "Cybersoft";

        let product = {
            id: 1,
            name: "IphoneX",
            Price: 1000,
            img: 'https://picsum.photos/100/100'
        };

        let renderProduct = () => {
            return <div>
                <p>{product.name}</p>
            </div>
        }

        return (
            <div>
                {this.renderSinhVien()}

                <ul>
                    <li>Ma so sinh vien: {this.SinhVien.ma}</li>
                    <li>Ho ten sinh vien: {this.SinhVien.ten}</li>
                </ul>
                <p id="title">{name}</p>
                <br />
                <div className="card text-left w-25">
                    <img className="card-img-top" src={product.img} alt={product.img} />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.Price}</p>
                    </div>
                </div>

                {renderProduct()}

            </div>
        )
    }
}
