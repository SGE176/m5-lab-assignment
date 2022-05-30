import React from "react";
import { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { Modal } from "react-bootstrap";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import products from "./productdata";
import "bootstrap/dist/css/bootstrap.min.css";
import "./displayProducts.css";
import "./index.css";

export default function DisplayProducts(props) {
  const [show, setShow] = useState(false);
  const [showImg, setShowImg] = useState({});
  const handleShow = (product) => {
    setShow(true);
    setShowImg(product);
  };
  const handleClose = () => {
    setShow(false);
  };

  return (
    <div>
      <div className="container col-lg-10 my-5 mx-auto">
        <label>
          Sort Price By:
          <select
            onChange={(e) => props.OnSort(props.products, e.target.value)}
          >
            <option value="norm">Normal</option>
            <option value="asc">Lowest</option>
            <option value="desc">Highest</option>
          </select>
        </label>
      </div>
      {props.products.map((product) => {
        return (
          <ListGroup key={product.id} className="products">
            <ListGroupItem className="border border-1 p-3">
              <div>
              <h4 className="d-inline mx-5">{product.desc}</h4>
              <h4 className="d-inline col-lg-3 text-danger">
                ${product.price}
              </h4></div>
              <img
                onClick={() => handleShow(product)}
                src={product.image}
                width="150"
                alt={product.desc}
              />
              <Button
                className="btn btn-secondary mx-2"
                onClick={() => props.onIncrement(product)}
              >
                <FontAwesomeIcon icon={faPlusCircle} className="fas fa-lg" />
              </Button>
              <Button
                className="btn btn-secondary mx-2"
                onClick={() => props.onDecrement(product)}
              >
                <FontAwesomeIcon icon={faMinusCircle} className="fas fa-lg" />
              </Button>
              <p>Quantity</p>
              <span type="number" name="number" placeholder="0">
                {" "}
                {product.value}{" "}
              </span>
            </ListGroupItem>
          </ListGroup>
        );
      })}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{showImg.desc}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img
            src={showImg.image}
            width="350"
            alt={showImg.desc}
            className="mx-5"
          />
          <p>
            <span className="text-dark">Ratings: </span>
            {showImg.ratings}/5
          </p>
        </Modal.Body>
      </Modal>
    </div>
  );
}