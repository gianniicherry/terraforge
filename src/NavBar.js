import Reaact from "react"
import {NavLink} from "react-router-dom"

function NavBar(){
    return(
        <div>
        <NavLink to ="/Home" >
            <Home/>
        </NavLink>
        <NavLink to ="/ItemList" >
            <ItemList/>
        </NavLink>
        <NavLink to="/ItemForm" >
            <ItemForm/>
        </NavLink>
        </div>
    )
}

export default NavBar