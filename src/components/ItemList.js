import React, {useEffect, useState} from "react"
import {ListedItemsContainer, Welcomebanner, WelcomeContainer} from "../styles/itemList.styles"
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
        <div class="container">
            <div class="row g-3">
                {items.map((item) => (
                    <div class="col-12 col-md-6 col-lg-4">
                    <Item key={item.id} item={item} />
                    </div>
                ))}
                </div>
            </div>
        </div>
    )
}

export default ItemList