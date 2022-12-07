import React, {useEffect, useState} from "react"
import { Welcomebanner, WelcomeContainer} from "../styles/itemList.styles"
import Item from "./Item"
import ItemForm from "./ItemForm"

function ItemList() {
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/items')
        .then(r=> r.json())
        .then(data => setItems(data))
    })

    function handleAddItem(newItem){
        setItems([...items, newItem ])
    }

    function handleItemUpdate(updatedItem){
        const updatedItems = items.map((item) => {
            if (item.bid < updatedItem.bid) {
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
        <div class="container">
            <div class="row g-3">
                {items.map((item) => (
                    <div class="col-12 col-md-6 col-lg-4">
                    <Item key={item.id} item={item} onItemUpdate={handleItemUpdate}/>
                    </div>
                ))}
                </div>
            </div>
            <div class="container g-3">
        <ItemForm onAddItem={handleAddItem}/>
        </div>
        </div>
    )
}

export default ItemList