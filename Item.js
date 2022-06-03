import React, { useState } from "react";


export default function Item(props) {
  const [quantity, setQuantity] = useState(0)
  function Plus(){
    setQuantity(quantity + 1)
  }
  function Minus(){
    if(quantity > 0){
      setQuantity(quantity - 1)
    }
  }
  const isPositive = <div className="item">
    <img src={props.items.image} alt = {props.items.name} />
    <div className="item-info">
      <h2>{props.items.name}</h2>
      <p>{props.items.desc}</p>
    </div>
    <div className="item-quantity">
      <button className="item-button" onClick = {Minus}>-</button>
      <h3 className="item-total">{quantity}</h3>
      <button className="item-button" onClick = {Plus}>+</button>
    </div>
  </div>
  
  const isNegative = <div className="item">
    <img src={props.items.image} alt = {props.items.name} />
    <div className="item-info">
      <h2>{props.items.name}</h2>
      <p>{props.items.desc}</p>
    </div>
    <div className="item-quantity">
      <button className="item-button">-</button>
      <button className="item-button" onClick = {Plus}>+</button>
    </div>
  </div>

  if(quantity > 0){
    return isPositive
  }
  else{
    return isNegative
  }
}
