import React, {useState} from "react"
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import Button from "react-bootstrap/Button";


function Item({item, onItemUpdate}) {

    const [newBid, setNewBid] = useState("")
    

    function handleItemBid(e){
      e.preventDefault()
      if(newBid >= item.bid) {
        e.preventDefault()
        fetch(`http://localhost:3004/items/${item.id}`, {
          method: "PATCH",
          headers: {"Content-Type" : "application/json", 
          },
          body: JSON.stringify({
            bid: newBid,
          }),
        })
        .then(r => r.json())
        .then((updatedItem) => onItemUpdate(updatedItem))
        
      } else {
        return null
      }
      e.target.reset()
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
        <Form onSubmit={handleItemBid}>
            <Form.Label>Enter your bid:</Form.Label>
            <Form.Control type="bid" placeholder="Enter minimum bid" onChange={(e)=> setNewBid(e.target.value)}/>
        
            <Button variant="primary" type="submit" >
              Submit
            </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default Item;