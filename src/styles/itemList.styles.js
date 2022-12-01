import styled from "styled-components";

export const Welcomebanner = styled.h1`
    color: black;
    font-size: 45px
    font-family: Arial, Helvetica, sans-serif;
    text-decoration: none;
    margin: 10px;
`

export const WelcomeContainer = styled.div`
    flex: 100%;
    display: flex;
    align-items: center;
    padding-left: 35%
`

export const ListedItemsContainer = styled.div`
flex: 100%;
display: flex;
align-items: center;
margin: 10px;
margin: 0;
position: absolute;
top: 30%;
left: 50%;
margin-right: -50%;
transform: translate(-50%, -50%)
`

export const ListedItems =  styled.ul`
    list-style: circle;
    li {
  text-transform: uppercase;
  margin-bottom: 8px;
  `

  
