import React, {useEffect, useState} from "react"
import {Welcomebanner, WelcomeContainer, ListedItems, ListedItemsContainer} from "../styles/itemList.styles"
import Item from "./Item"

function ItemList() {
    const [items, setItems] = useState([])

    useEffect(()=>{
        fetch('http://localhost:3000/items')
        .then(r=> r.json())
        .then(data => setItems(data))
    })

    return (
        <div>
        <WelcomeContainer>
        <Welcomebanner>Hello from Terraforge</Welcomebanner>
        </WelcomeContainer>
        <ListedItemsContainer>
            <ListedItems className="Items">
                <li>{items.map((item) => (
                    <Item key={item.id} item={item} />
                ))}</li>
                </ListedItems>  
        </ListedItemsContainer>
        </div>
    )
}

export default ItemList