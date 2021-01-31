import React from "react"
import { Link } from 'react-router-dom';
import Home from "./Home"

import  "./css/styles.css"
function Button(){

    return(
        <div class="Button">
        <Home />
        <Link to="/forms" target="_blank"><button class="btn btn-primary">Insert</button></Link>
        <Link to="/View" target="_blank"><button class="btn btn-primary">View</button></Link>
        <Link to="/Search" target="_blank"><button class="btn btn-primary">Search</button></Link>
        </div>
    )
}
export default Button