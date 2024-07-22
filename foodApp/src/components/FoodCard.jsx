import React, { useState } from 'react'

export const FoodCard = ({item}) => {

    const [counter, setCounter] = useState(0);
    const increment = () => {
        setCounter(counter + 1);
    }
    const decrement = () => {
        if(counter <= 0){
            setCounter(0);
        }
        else{
            setCounter(counter - 1);
        }
    }
  return (
    <>
        <div className='card'>
            <img src={'../../' + item.image}/>
            <div className='info'>
                <span className='name'>{item.name}</span>
                <span className='price'>{'₹ ' + item.Price}</span>
            </div>
            <p className='text'>{item.text}</p>
            <div className='card-btn'>
                <div className='item-amount'>
                    <button onClick={decrement} className='btn'>-</button>
                    <span>{counter}</span>
                    <button onClick={increment} className='btn'>+</button>
                </div>
                <button className='item-add'>Add to Cart</button>
            </div>
        </div>
    </>
  )
}
