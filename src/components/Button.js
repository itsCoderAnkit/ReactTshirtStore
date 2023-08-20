import React from 'react'

const Button = (props) =>{
    const clicked= () =>{
        console.log("clicked button", props)
    }
    return (
        <button type="submit" onClick={clicked}>{props.children}</button>
    )
}

export default Button