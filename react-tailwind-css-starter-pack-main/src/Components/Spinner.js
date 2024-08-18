import React from 'react'
import "./spinner.css";
const Spinner = () => {
  return (
    <div>
      <div className='spinner'></div>
      <p className='font-bold text-lg'>Loading...</p>
    </div>
  )
}

export default Spinner