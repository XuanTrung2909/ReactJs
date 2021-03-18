import React, { Component } from "react";

export default class BTKinhKinh extends Component {
  render() {
      let {kinh, index, thayDoiKinh} = this.props;
    return (
      <div className="col-2 p-4" key={index}>
        <img src={kinh.url} alt={kinh.name} className="img-fluid" onClick={() => {
            thayDoiKinh(kinh);
        }}/>
      </div>
    );
  }
}
