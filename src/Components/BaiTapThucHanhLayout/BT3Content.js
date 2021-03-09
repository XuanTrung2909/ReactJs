import React, { Component } from 'react'
import BT3Carousel from './BT3Carousel'
import BT3ProductList from './BT3ProductList'

export default class Content extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    
                    <BT3Carousel />
                    <BT3ProductList />
                </div>
            </div>

        )
    }
}
