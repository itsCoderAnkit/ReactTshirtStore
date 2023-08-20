import React, { useState } from 'react'

const AddProductForm = (props) =>{

    const [enteredName, setEnteredName] = useState('')
    const [enteredDescription , setEnteredDescription] = useState('')
    const [enteredPrice, setEnteredPrice] = useState('')
    const [ enteredLarge , setEnteredLarge] = useState('')
    const [enteredMedium,setEnteredMedium] = useState('')
    const[enteredSmall,setEnteredSmall] = useState('')


    const nameChangeHandler = (event)=>{
        setEnteredName(event.target.value)
    }
    const descriptionChangeHandler = (event) =>{
        setEnteredDescription(event.target.value)
    }
    const priceChangeHandler =(event) =>{
        setEnteredPrice(event.target.value)
    }
    const largeChangeHandler = (event) =>{
        setEnteredLarge(event.target.value)
    }
    const mediumChangeHandler = (event) =>{
        setEnteredMedium(event.target.value)
    }
    const smallChangeHandler = (event) =>{
        setEnteredSmall(event.target.value)
    }


    const saveProductDetails = (event) =>{
        event.preventDefault()
        const productDetails = {
            name:enteredName,
            description:enteredDescription,
            price:enteredPrice,
            large:enteredLarge,
            medium:enteredMedium,
            small:enteredSmall
        }
        props.onSaveNewProduct(productDetails)
    }

    return (
        <div>
            <form onSubmit={saveProductDetails}>
                <label htmlFor='name'>Tshirt Name</label>
                <input type="text" id="name" onChange={nameChangeHandler} value={enteredName}></input>
                <label htmlFor='description'>description</label>
                <input type="text" id="description" onChange={descriptionChangeHandler} value={enteredDescription}></input>
                <label htmlFor='price'>Price</label>
                <input type="number" id="price" onChange={priceChangeHandler} value={enteredPrice}></input>
                <h3>Quantity Available</h3>
                <label htmlFor='large'>Large</label>
                <input type="number" id="large" onChange={largeChangeHandler} value={enteredLarge}></input>
                <label htmlFor='medium'>Medium</label>
                <input type="number" id="medium" onChange={mediumChangeHandler} value={enteredMedium}></input>
                <label htmlFor='small'>Small</label>
                <input type="number" id="small" onChange={smallChangeHandler} value={enteredSmall}></input>
                <button type="submit">Add Product</button>
                
            </form>
        </div>
    )
}

export default AddProductForm