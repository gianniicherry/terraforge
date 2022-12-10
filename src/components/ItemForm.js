import {useState} from "react"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { Welcomebanner, WelcomeContainer} from "../styles/itemList.styles"

function ItemForm({onAddItem}) {
    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [description, setDescription] = useState("")
    const [bid, setBid] = useState("")

    function handleSubmit(e){
        e.preventDefault()
        const itemData = {
            name: name,
            category: category,
            bid: bid,
            description: description
        }
        fetch("http://localhost:3000/items",{
            method: "POST",
            headers: {"Content-Type" : "application/json",
        },
            body: JSON.stringify(itemData),
        })
        .then(r => r.json())
        .then((newItem)=> onAddItem(newItem))
        e.target.reset() 
    }


  return (
    <div className="container">
        <WelcomeContainer>
        <Welcomebanner>Let's get Started</Welcomebanner>
        </WelcomeContainer>

        <div className="container g-7">
            <Card body>Recycling your products with Terraforge is Easy. First, please tell us a little bit more about what you would like to recycle. From there, we'll hold your item in escrow for 7 days, where other users can actively bid on your item. If a bid is accepted, you'll receive your payout. If not, your item will be sent to the forge where it's recycled, and your paid out in the TFG value.</Card>
        </div>
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>What would you like to list to recycle?</Form.Label>
        <Form.Control type="text" placeholder="Enter Item name" onChange={(e)=> setName(e.target.value)} value={name} />
        <Form.Text className="text-muted">
          Please let us know in a few words your item
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Item Category</Form.Label>
        <Form.Select onChange={(e)=> setCategory(e.target.value)} value={category}>
          <option>Cellphone</option>
          <option>Laptop</option>
          <option>Tablet</option>
          <option>Other</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Please write a description for your Item</Form.Label>
        <Form.Control type="text" placeholder="Enter Item description" onChange={(e)=> setDescription(e.target.value)} value={description}/>
        <Form.Text className="text-muted">
          Please be detailed to attract more bids!
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicBid">
        <Form.Label>Please enter your minimum starting bid for your Item</Form.Label>
        <Form.Control type="text" placeholder="Enter starting bid" onChange={(e)=> setBid(e.target.value)} value={bid}/>
        <Form.Text className="text-muted">
          Current TFG Value per lbs = 0.06 TFG
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default ItemForm;