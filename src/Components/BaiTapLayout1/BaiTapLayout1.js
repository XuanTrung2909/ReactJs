import React, { Component } from 'react'
import BT1Carousel from './BT1Carousel'
import BT1Content from './BT1Content'
import BT1Footer from './BT1Footer'
import BT1Header from './BT1Header'

export default class BaiTapLayout1 extends Component {
    render() {
        return (
            <div>
                <BT1Header />

                <BT1Carousel />

                <BT1Content />

                <BT1Footer />
            </div>
        )
    }
}
