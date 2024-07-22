import React, { useState } from 'react'
import { Navbar } from './components/Navbar'
import { FoodItem } from './components/FoodItem'


const App = () => {
  const [childData, setChildData] = useState([]);
  const handleData = (data) => {
    setChildData( data );
  }
  console.log("Child Data : ", childData);
  return (


    <>
      <div className="main">
        <Navbar parentCallBack = {handleData}/>
        <FoodItem renderData = {childData} />
      </div>
    </>
  )
}

export default App