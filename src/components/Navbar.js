import React , {useState} from "react";
import { 
    NavbarContainer,
    LeftContainer,
    RightContainer,
    NavbarInnerContainer,
    NavbarExtendedContainer,
    NavbarLinkContainer,
    NavbarLink,
    LogoImg,
    OpenLinksButton,
    NavbarLinkExtended,
 } from "../styles/navbar.styles.js"
 import logo from "../assets/logo.png"

function Navbar(){
    const [extendNavbar, setExtendNavbar] = useState(false)

    function handleExtendNavBar(){
        setExtendNavbar((extendNavbar)=> !extendNavbar)
    }


    return (
    <NavbarContainer extendNavbar={extendNavbar}>
        <NavbarInnerContainer>
        <LeftContainer>
            <NavbarLinkContainer>
                <NavbarLink to="/">Home</NavbarLink>
                <NavbarLink to="/ItemForm">Sell</NavbarLink>
                <NavbarLink to="/Bids">Bid</NavbarLink>
                <OpenLinksButton 
                onClick={handleExtendNavBar}>{extendNavbar ? <> &#10005;</> : <>&#8801;</>}
                </OpenLinksButton>
            </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer>
            <LogoImg src={logo}></LogoImg>
        </RightContainer>
        </NavbarInnerContainer>
       {extendNavbar && (
           <NavbarExtendedContainer>
                <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
                <NavbarLinkExtended to="/ItemForm">Sell</NavbarLinkExtended>
                <NavbarLinkExtended to="/ItemList">Bid</NavbarLinkExtended>
        </NavbarExtendedContainer>
       )}       
    </NavbarContainer>
)}

export default Navbar