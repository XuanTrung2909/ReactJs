import React, { Component } from "react";

export default class BTKinhModel extends Component {



  render() {
    let {capNhatKinh} = this.props;
    return (
      <div className="row my-5">
        <div className="col-4"></div>
        <div className="card text-left col-4" style={{position: "relative"}}>
          <img src="./glassesImage/model.jpg" alt="model" className="img-fluid"/>
          <img src={capNhatKinh.url} alt={capNhatKinh.name} width="180" style={{position: "absolute", top: 100, left: 100}}/>
          
          <div className="card-body">
            <p className="card-text">{capNhatKinh.desc}</p>
          </div>
        </div>
      </div>
    );
  }
}
