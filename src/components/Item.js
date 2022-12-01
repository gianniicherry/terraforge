import React from "react"
import ItemStyle from "../styles/item.styles"

function Item({item}) {

    return (
        <ItemStyle>
      <span>{item.name}</span>
      </ItemStyle>
        
    )
}

export default Item