import React, {useEffect, useState} from "react"
import { Welcomebanner, WelcomeContainer} from "../styles/itemList.styles"
import Item from "./Item"
import ItemForm from "./ItemForm"

function ItemList() {
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3004/items')
        .then(r=> r.json())
        .then(data => setItems(data))
    })

    function handleAddItem(newItem){
        setItems([...items, newItem ])
    }

    function handleUpdateItem(updatedItem) {
        const updatedItems = items.map((item) => {
          if (item.id === updatedItem.id && item.bid <= updatedItem.bid) {
            return updatedItem;
          } else {
            return item;
          }
        });
        setItems(updatedItems);
      }


    return (
        <div>
        <WelcomeContainer>
        <Welcomebanner>Hello from Terraforge</Welcomebanner>
        </WelcomeContainer>
        <div className="container">
            <div className="row g-3">
                {items.map((item) => (
                    <div className="col-12 col-md-6 col-lg-4">
                    <Item key={item.id} item={item} onItemUpdate={handleUpdateItem}/>
                    </div>
                ))}
                </div>
            </div>
            <div className="container g-3">
        <ItemForm onAddItem={handleAddItem}/>
        </div>
        </div>
    )
}

export default ItemList