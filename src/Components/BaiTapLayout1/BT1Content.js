import React, { Component } from 'react'
import BT1Product from './BT1Product'

export default class BT1Content extends Component {
    render() {
        return (
            <div>
                <section id="smartphone" className="container-fluid pt-5 pb-5">
                    <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                    <div className="row">
                        
                        <div className="col-3">
                            <BT1Product />
                        </div>
                        <div className="col-3">
                            <BT1Product />
                        </div>
                        <div className="col-3">
                            <BT1Product />
                        </div>
                        <div className="col-3">
                            <BT1Product />
                        </div>

                    </div>
                </section>

            </div>
        )
    }
}
