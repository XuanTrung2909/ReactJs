import React, { Component } from 'react'

export default class BaiTapChonXe extends Component {

    state = {
        srcImg: "./img-20210304/img/car/products/black-car.jpg"
    }

    changeColor = (newColor) => {
        this.setState({
            srcImg: `./img-20210304/img/car/products/${newColor}-car.jpg`
        })
    }
    render() {
        return (
            <div className="container">
                <h1 className="display-4">Bai Tap Chon Xe</h1>
                <div className="row">
                    <div className="col-6">
                        <img src={this.state.srcImg} className="w-100" alt="alt"/>
                    </div>
                    <div className="col-6">

                        <button className="btn mr-4" onClick = {() => {
                            this.changeColor('black');
                        }}>black</button>
                        <button className="btn mr-4" onClick = {() => {
                            this.changeColor('red');
                        }}>red</button>
                        <button className="btn mr-4" onClick = {() => {
                            this.changeColor('silver');
                        }}>silver</button>
                        <button className="btn" onClick = {() => {
                            this.changeColor('steel');
                        }}>steel</button>

                    </div>
                </div>
            </div>
        )
    }
}
