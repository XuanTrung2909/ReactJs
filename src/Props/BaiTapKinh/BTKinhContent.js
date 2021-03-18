import React, { Component } from 'react'
import BTKinhDSKinh from './BTKinhDSKinh'
import BTKinhModel from './BTKinhModel'

export default class BTKinhContent extends Component {

    state = {
        capNhatKinh: {

        }
    }

    thayDoiKinh = (kinh) => {
        this.setState({
            capNhatKinh: kinh
        })
    }

    render() {
        let {arrProduct} = this.props;
        return (
            <div className="container">

                <BTKinhModel capNhatKinh = {this.state.capNhatKinh}/>
                <BTKinhDSKinh arrProduct = {arrProduct} thayDoiKinh={this.thayDoiKinh}/>
                
            </div>
        )
    }
}
