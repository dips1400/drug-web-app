import React from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const Navigates = useNavigate();

    const buttonClick = () =>{
        Navigates('/drugs')
      }
    

  return (
    <div className='container'>
        <h2>Search here for the drugs</h2>
        <button onClick={buttonClick} className='btn'> Explore Drugs</button>
    </div>
  )
}

export default Home