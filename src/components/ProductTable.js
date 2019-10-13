import React, { Component } from 'react';

class ProductTable extends Component {
  render() {
    return (
      <table className="table" >
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
          </tr>
        </thead>
        <tbody>
          {this.props.children}
        </tbody>
      </table>
    );
  };

}

export default ProductTable;