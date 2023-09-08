import React from 'react'
import "../css/Page.css"

function Card(props){


    
    return(
       
        <div className="Card">
            <h1>brand:{props.brand}</h1>
            <img src={props.thumbnail} />
            <h1>category:{props.category}</h1>
            <h1>description:{props.description}</h1>
            <h1>discountPercentage:{props.discountPercentage}</h1>
        </div>
        
    )
}
export default Card