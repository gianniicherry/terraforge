import React, {useState} from "react"
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";


function Item({item, onItemUpdate}) {

    const [bid, setItemBid] = useState(item.bid)

    function handleItemBid(event){
        setItemBid(event.target.value)
        console.log('new bid')
        event.preventDefault()
        fetch(`http://localhost:3000/items/${item.id}`, {
          method: "PATCH",
          headers: {"Content-Type" : "application/json", 
          },
          body: JSON.stringify({
              bid: bid}),
        })
        .then(r => r.json())
        .then((updatedItem) => setItemBid(updatedItem))
      }


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
        <Form onSubmit={handleItemBid} value={bid}>
            <Form.Label>Enter your bid:</Form.Label>
            <Form.Control type="bid" placeholder="Enter minimum bid" />
        
            <Button variant="primary" type="submit">
            Submit
            </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Item;