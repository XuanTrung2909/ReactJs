import React, { Component } from 'react'
import DSGhe from './DSGhe'
import ThongTinDatVe from './ThongTinDatVe';

import './../../assets/BaiTapBookingTicket.css'

export default class BTDatVe extends Component {
    render() {
        return (
            <div className="bookingMovie">
                <div style={{backgroundColor: 'rgba(0,0,0,0.5)', width:'100%', height:'100%'}}>
                    <div className="row">
                        <div className="col-8">
                            <DSGhe />
                        </div>
                        <div className="col-4">
                            <ThongTinDatVe />
                        </div>
                    </div>
            </div>
            </div >
        )
    }
}
