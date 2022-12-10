import React from "react"
import {DescriptionContainer, Welcomebanner, WelcomeContainer, ButtonContainer, Button} from "../styles/home.styles"


function Home() {

   
    return (
    <div>
        <WelcomeContainer>
            <Welcomebanner>Welcome to Terraforge</Welcomebanner>
            </WelcomeContainer>
            <DescriptionContainer>
                Terraforge was founded as an easier way to recycle electronic waste. 
                Our mission is to ensure E-waste is handled sustainably in an effort to reduce harmful materials polluting our environment. 
            </DescriptionContainer>
    </div>
    )
}

export default Home