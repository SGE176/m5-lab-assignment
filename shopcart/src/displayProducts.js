import React from "react";
import { useState } from "react";
import { Button, ListGroup, ListGroupItem } from "reactstrap";
import { Modal } from "react-bootstrap";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "bootstrap/dist/css/bootstrap.min.css";
import "./displayProducts.css";

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
      {props.products.map((product) => {
        return (
          <ListGroup className="products">
            <ListGroupItem key={product.id} className="product">
              <div className="displayP">
                <h3>{product.desc}</h3>
                <img
                  onClick={() => handleShow(product)}
                  src={product.image}
                  width="150"
                  alt={product.desc}
                />
              </div>
              <div className="displayBtn">
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
              </div>
              <div className="displayQty">
                <p>Quantity</p>
                <span type="number" name="number" placeholder="0">
                  {" "}
                  {product.qty}{" "}
                </span>
              </div>
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