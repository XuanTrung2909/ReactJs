import React, { Component } from 'react';
import dataGhe from './../../assets/danhSachGhe.json';
import {connect} from 'react-redux';

class DSGhe extends Component {


    renderHangGhe = () => {
        return dataGhe.map((hangGhe, index)=>{
            return <div key={index}>
                <span className='rowNumber'>{hangGhe.hang}</span>
                {this.renderDSGhe(hangGhe.danhSachGhe,hangGhe.hang)}
            </div>
        })
    }
    renderDSGhe = (danhSachghe, hangGhe) => {
        return danhSachghe.map((ghe, index)=>{

            //kiem tra ghe dang render co trong mang thong tin dat khong

            let classGheDangDat = '';

            let indexGhe = this.props.danhSachGheDangDat.findIndex((gheDD => gheDD.soGhe === ghe.soGhe));

            if (indexGhe !== -1){
                classGheDangDat = 'gheDangChon';
            }



            let classGheDuocChon = ghe.daDat ? 'gheDuocChon' : '';

            if(hangGhe!==''){
                return <button className={`ghe ${classGheDuocChon} ${classGheDangDat}`} key={index}>{ghe.soGhe}</button>
            }
            return <button className={`rowNumber ${classGheDuocChon}`} key={index}>{ghe.soGhe}</button>
            
        })
    }

    render() {
        return (
            <div className='container mt-5 text-white'>
                <h3 className='text-center text-white'>DAT VE XEM PHIM CYBERLEARN.VN</h3>
                <div className='text-center text-white'>Man Hinh</div>

                <div className="screen"></div>

                {this.renderHangGhe()}


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        danhSachGheDangDat: state.BTDatVeReducer.danhSachGheDangDat
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        chonGhe: (ghe) => {
            console.log(ghe);
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DSGhe)