import React,{ Component } from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { ListGroup, ListGroupItem } from "reactstrap";
import './App.css';
import Navbar from "./navbar";
import DisplayProducts from "./displayProducts";

class App extends React.Component {

  constructor(props) {
    super(props);
    
    this.state = {
      products: [
        {
          id:0,
          image: './products/cologne.jpg',
          desc: 'Unisex Cologne',
          qty: 0,
          ratings: 3.4,
        },
        {
          id: 1,
          image: './products/iwatch.jpg',
          desc: 'Apple iWatch',
          qty: 0,
          ratings: 4.5,
        },
        {
          id: 2,
          image: './products/mug.jpg',
          desc: 'Unique Mug',
          qty: 0,
          ratings: 3.3
        },
        {
          id:3,
          image: './products/wallet.jpg',
          desc: 'Mens Wallet',
          qty: 0,
          ratings: 3.8
        }
      ]
    };
  }

  // renderProducts(products) { 
  //   return (
  //     <div>
  //       {products.map(product => 
  //            <ListGroup className="product-list">
  //              <ListGroupItem key={product.id} className="product px-5">
  //                <div className="product-info py-3">
  //                 <p className="product-desc">{product.desc} </p>
  //                 <img className="product-img" src={product.image} alt={product.desc} width="150px"></img>
  //                </div>
                  
  //                 <input 
  //                 type="number" 
  //                 name="number" 
  //                 className="product-qty mx-3"  
  //                 onChange={this.handleChange} 
  //                 placeholder="0"
  //                 />
  //                   <span className="bg-white border-0">
  //                      quantity
  //                   </span>
  //                </ListGroupItem> 
  //            </ListGroup>)
  //       }
  //     </div>
  //   );
  // }
  // renderCart() {
  //   let totalAmount = 0;
  //   this.state.value.forEach(item=> {
  //     totalAmount += item;
  //   });
  //   return (
  //       <div className="shopcart">
  //           <FontAwesomeIcon icon={faShoppingCart} size="sm" />
  //           <span>  {totalAmount} items</span>
  //       </div>
  //   )
  // }
  handleIncrement = (addValue) => {
    if(addValue.qty<10) {
      const updatedValue = addValue.qty++;
      this.setState({updatedValue});
    }
  }
  handleDecrement = (subValue) => {
    if(subValue.qty<10) {
      const updatedValue = subValue.qty--;
      this.setState({updatedValue});
    }
  }
  
  render() {
    return (
      <div className="App">
        <Navbar 
          totalValue={this.state.products.map(
          (p) => p.qty).reduce(
            (acc,cur,index) =>
          acc+cur, 0 ) }
          prods={this.state.products}
          handleIncrement = {this.handleIncrement}
          handleDecrement = {this.handleDecrement}
        />
        <DisplayProducts
          products={this.state.products}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        />
      </div>
    );
  }
}

export default App;