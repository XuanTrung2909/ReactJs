import React, { Component } from "react";
import BTKinhKinh from "./BTKinhKinh";

export default class BTKinhDSKinh extends Component {
  renderDSKinh = () => {
    let { arrProduct, thayDoiKinh } = this.props;
    return arrProduct.map((kinh, index) => {
      return (
        <BTKinhKinh kinh={kinh} index={index} thayDoiKinh = {thayDoiKinh}/>
      );
    });
  };
  render() {
    return <div className="row">
      
        {this.renderDSKinh()}
      
      </div>;
  }
}
