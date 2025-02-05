import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router-dom";
import { useFirebase } from "../context/Firebase";
import Form from "react-bootstrap/Form";

function BookDetailPage() {
  const parmas = useParams();
  const firebase = useFirebase();

  const [data, setData] = useState(null);
  const [url, setURL] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    firebase.getBookById(parmas.bookId).then((value) => setData(value.data()));
  }, []);

  useEffect(() => {
    if (data) {
      const imageURL = data.imageURL;
      firebase.getImageURL(imageURL).then((url) => setURL(url));
    }
  }, [data]);

  const placeOrder = async() => {
    const result = await firebase.placeOrder(parmas.bookId, qty);
    console.log("ordder placed" , result)
  }


  if (data === null) return <h1>Loading...</h1>;

  return (
    <div className="container mt-5">
      <h1>{data.name}</h1>
      <img src={url} width="50%" style={{ borderRadius: "10px" }} alt="" />
      <h1>Details</h1>
      <h4>Price: Tk. {data.price}</h4>
      <p>ISBN Number: {data.isbn}</p>
      <h1>Owner Details</h1>
      <p>Name: {data.displayName}</p>
      <p>Email: {data.userEmail}</p>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Qty</Form.Label>
        <Form.Control
          onChange={(e) => setQty(e.target.value)}
          value={qty}
          type="Number"
          placeholder="Enter Qty"
        />
      </Form.Group>
      <Button onClick={placeOrder} variant="success">Buy Now</Button>
    </div>
  );
}

export default BookDetailPage;
