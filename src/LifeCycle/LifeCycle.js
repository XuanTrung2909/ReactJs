import React, { Component } from 'react'

export default class LifeCycle extends Component {

    constructor(props){
        super(props);
        this.state = {
            
        }
        console.log('contructor');
    }
    static getDerivedStateFromProps(newProps, currentState){
        console.log('getDerivedStateFromProps');

        return currentState;
    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}
