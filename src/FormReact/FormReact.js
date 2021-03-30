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
        let { name, value } = event.target; //event.target la tag input dang xay ra onchange

        let typeProps = event.target.getAttribute('typeProps');
        //tao value moi moi lan nhap lieu
        let newValue = {...this.state.value};
        newValue[name] = value;
        //tao errors moi moi lan nhap lieu
        let newErrors = {...this.state.error};
        let errorMess = '';
        if(newValue[name] === ''){
            errorMess = 'khong duoc bor trong';
        }

        if(typeProps === 'email'){
            let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i;
            if(!regexEmail.test(value)){
                newErrors[name] = 'Email khong hop le';
            }
        }
        

        newErrors[name] = errorMess;

        //xu ly setState

        this.setState({
            value:newValue,
            error: newErrors
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
                                    <input typeProps='email' className='form-control' name='email' onChange={this.handleChangInput} />
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
