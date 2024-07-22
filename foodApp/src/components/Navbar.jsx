import React, { useState, useEffect } from 'react'
import items from '../assets/data.json';




export const Navbar = ({parentCallBack}) => {
    const [datum, setDatum] = useState([]);
    const [filter, setFilter] = useState('All');
    const search = (e) => {
        let value = e.target.value;
        console.log(value); 
        if(value === null){
            setDatum(items);
        }
        setDatum(items.filter(item => item.type.includes(value)));
    }
    
    useEffect(() => {
        if (filter === 'All') {
            setDatum(items);
        } else {
            const filteredItems = items.filter(item => item.type.includes(filter));
            // console.log("Filtered Items : " , filteredItems);
            setDatum(filteredItems);
        }
    }, [filter]);

    const handleFilter = (e) => {
        setFilter(e.target.innerHTML);
    }

    parentCallBack (datum);

  return (
    <div className='navbar'>
        <div className='logo'>
            <h1>Foody Dhaba</h1>
        </div>
        <div className='filters'>
            <button onClick={handleFilter} className='filter-btn'>All</button>
            <button onClick={handleFilter} className='filter-btn'>Breakfast</button>
            <button onClick={handleFilter} className='filter-btn'>Lunch</button>
            <button onClick={handleFilter} className='filter-btn'>Dinner</button>
            <button onClick={handleFilter} className='filter-btn'>Special</button>
            <div className='search-bar'>
                <input onChange={search} type='text' placeholder='Search Food ... '/>
            </div> 
        </div>
        <div className='login'>
            <button className='login-btn'>Login</button>
        </div>
    </div>
  )
}