import React, { Component } from 'react';

class ProductRow extends Component {
  render() {
    const stocked = this.props.stocked;
    return (
      <div className="tr" >
        <td style={{
          color: stocked ? '#AD0808' : '#000000'
        }}>{this.props.name}</td>
        <td style={{
          color: stocked ? '#AD0808' : '#000000'
        }}> {this.props.price}</td>
      </div>
    );
  }

};

export default ProductRow;