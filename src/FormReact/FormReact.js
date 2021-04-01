import React, { Component } from 'react';



export default class FormReact extends Component {


    state = {
        value: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        },
        error: {
            maSinhVien: '',
            tenSinhVien: '',
            soDienThoai: '',
            email: ''
        },
    }

    handleChangInput = (event) => {
        
        let {name, value} = event.target;
        let type = event.target.getAttribute('type');

        let newValue = {...this.state.value};
        newValue[name] = value;

        let newError = {...this.state.value};
        let errMess = '';

        if(newValue[name] === ''){
            errMess = 'Vui lòng nhập giá trị';

        }
        if (type === 'email'){
            let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(!regexEmail.test(value)){
                errMess = 'Vui lòng nhập đúng giá trị Email';
            }
        }

        newError[name] = errMess;

        this.setState({
            value: newValue,
            error: newError
        })

    }
    render() {
        return (
            <form className='container'>
                <div className="card text-white bg-dark">
                    <div classname="card-header">THÔNG TIN SINH VIÊN</div>
                    <div className="card-body">
                        <div className='row'>
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Mã Sinh Viên</p>
                                    <input className='form-control' name='maSinhVien' onChange={this.handleChangInput} />
                                    <p className='text text-danger'>{this.state.error.maSinhVien}</p>
                                </div>
                                <div className="form-group">
                                    <p>Số Điện Thoại</p>
                                    <input className='form-control' name='soDienThoai' onChange={this.handleChangInput} />
                                    <p className='text text-danger'>{this.state.error.soDienThoai}</p>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="form-group">
                                    <p>Tên Sinh Viên</p>
                                    <input className='form-control' name='tenSinhVien' onChange={this.handleChangInput} />
                                    <p className='text text-danger'>{this.state.error.tenSinhVien}</p>
                                </div>
                                <div className="form-group">
                                    <p>Email</p>
                                    <input type='email' className='form-control' name='email' onChange={this.handleChangInput} />
                                    <p className='text text-danger'>{this.state.error.email}</p>
                                </div>
                            </div>

                            <div>
                                <button className='btn btn-success'>Thêm Sinh Viên</button>
                            </div>
                        </div>

                    </div>
                </div>

            </form>
        )
    }
}
