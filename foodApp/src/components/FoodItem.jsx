import React from 'react'
import { FoodCard } from './FoodCard'
import items from '../assets/data.json'

export const FoodItem = ({renderData}) => {
  return (
    <>
        <div className='foodContainer'>
            {renderData.map((item) => {
                return <FoodCard key={item.id} item = {item}/>
            })}
        </div>
    </>
  )
}
