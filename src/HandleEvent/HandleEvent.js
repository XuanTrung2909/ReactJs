import React, { Component } from 'react'

export default class HandleEvent extends Component {

    handleClick = (name) => {
        alert(`${this.showMess(name)}`);
    }


    showMess = (name) => {
        return `hello ${name}`;
    }

    render() {
        return (
            <div>
                <button id="btnClick" onClick={() => {
                    this.handleClick("123")
                }}>Click me</button>
                <button onClick={() => {
                    this.handleClick('Trung');
                }}>Click me</button>
            </div>
        )
    }
}
