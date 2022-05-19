import React from 'react';
import {Link,BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShoppingCart,
  faRegistered,
} from "@fortawesome/free-solid-svg-icons";

import DisplayProducts from "./displayProducts";
import './navbar.css'

export default function Navbar(props) {
  return (
    <Router>
      <nav>
        <Link className="logo" to="/">
          <h1>
            Shop 2
            <span>
              <FontAwesomeIcon icon={faRegistered} />
            </span>
            eact
          </h1>
        </Link>
        <Link to="/showCart" className="cart">
          <FontAwesomeIcon icon={faShoppingCart} size="sm" />
          <span> {props.totalQuantity} </span>
        </Link>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <DisplayProducts
              products={props.prods}
              onIncrement={props.handleIncrement}
              onDecrement={props.handleDecrement}
            />
          }
        />
      </Routes>
    </Router>
  );
}


// var Navbar = React.createClass({
//   render: function() {
//     return (
//     <div>
//       <div className="title bg-info px-5 py-5">
//           <h1>Shop to React</h1>
//           {this.renderCart(this.state)}
//       </div>
//       <div className="shopcart">
//             <FontAwesomeIcon icon={faShoppingCart} size="sm" />
//             <span>  {totalAmount} items</span>
//       </div>
//     </div>
//     );
//   }
// });