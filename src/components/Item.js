import React from "react"
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";


function Item({item}) {
  return (
    <Card class="col-4">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
         Current Bid: {item.bid} TFG
        </Card.Text>
        <Card.Text>
            {item.description}
        </Card.Text>
        <Form>
        <Form.Label>Enter your bid:</Form.Label>
        <Form.Control type="bid" placeholder="Enter minimum bid" />
        </Form>
        <Button variant="primary" type="submit">
        Submit
      </Button>
      </Card.Body>
    </Card>
  );
}

export default Item;