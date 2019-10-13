import React, { Component } from 'react';
import data from './data/data.json';
import ProductTable from './components/ProductTable';
import ProductRow from './components/ProductRow';
import './App.css';

class App extends Component {
  state = {
    searchValue: "",
    onlyStock: true,
  }

  handleSearch = (e) => {
    e.preventDefault();
    this.setState({
      searchValue: e.target.value,
    });
  }

  handleCheck = (e) => {
    console.log(this.state.onlyStock);
    this.setState({
      onlyStock: !this.state.onlyStock,
    });
  }

  render() {
    const { searchValue } = this.state;

    const filteredProducts = data.filter(searchedProduct => {
      const { name } = searchedProduct
      return name.toLowerCase().search(
        searchValue.toLowerCase()) !== -1;
    });

    return (
      <div className="App">
        <div className="center">
          <h1>IronStore</h1>
          <h5>Search</h5>
          <input className="search-bar" type="text" name="searchBar" value={this.state.searchValue} placeholder="Search for a product..." onChange={this.handleSearch} />
          <input type="checkbox" onChange={this.handleCheck} />
          <label>Only show products on stock</label>
        </div>
        <ProductTable>
          {filteredProducts.map((product, index) => {
            return <ProductRow name={product.name} price={product.price} stocked={product.stocked} key={index} />
          })}
        </ProductTable>
      </div>
    );
  }
}

export default App;
