import React, { Component } from 'react'

export default class StateDemo extends Component {

    // state la thuoc tinh co san cua component chua cacs gia tri lam thay doi giao dien khi nguoi dung thao tac

    state ={
        isLogin: false
    }


    
    userName = 'phudeptrai';

    renderUILogin = () => {
        if(this.state.isLogin === true){
            return <span>hello {this.userName}</span>
        }else{
            return <button className="btn" onClick = {() => {
                // let newState ={
                //     isLogin : true
                // }
                // this.setState(newstate): la phuong thuc co san cua reactClass component dung de gan laij gia tri moi cho state => dong thoi goi lai ham render tao lai giao dien
                //setState la phuong thuc bat dong bo
                this.setState({
                    isLogin: true
                }, () => {
                    console.log('isLogin', this.state.isLogin);
                })

                
            }}>Dang Nhap</button>
        }
    }


    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
                    <a className="navbar-brand" href="#">Cybersoft</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">{this.isLogin === false ? 'Dang Nhap' : `hello ${this.userName}`}</a> */}
                                {this.renderUILogin()}
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>

            </div>
        )
    }
}
