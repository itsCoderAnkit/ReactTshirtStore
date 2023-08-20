import React from 'react'
import Button from './Button'

const ShowAddedProducts = (props) =>{
    console.log("showAddedProducts",props.products)

    // let productList = props.products.map((prod) =>
    //     (<li>prod.name</li>)
    // )
    
    let productList =  props.products.map(prod=><li>{prod.name} {prod.description} {prod.price} {<Button> BUY LARGE {prod.large} </Button> } {<Button>BUY MEDIUM {prod.medium}</Button> } {<Button>BUY SMALL {prod.small}</Button> }</li>)
    

    return (
        <div>
            <ul>
                {productList}
            </ul>
        </div>
    )
}

export default ShowAddedProducts