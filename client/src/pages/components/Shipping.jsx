import React from 'react'
import { MdLocalShipping } from "react-icons/md";
import { GiReturnArrow } from "react-icons/gi";
import { FaQuestionCircle } from "react-icons/fa";
import './style.css'
const Shipping = () => {
  return (
    <section className='shipping'>
      <div style={{display:'flex'}}>
      <MdLocalShipping  className='icon' />
       <div>
       <h1>FREE SHIPPING</h1>
        <p>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
       </div>
      </div>
      <div style={{display:'flex'}}>
      <GiReturnArrow  className='icon'/>
       <div>
       <h1>FREE RETURNS</h1>
        <p>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
       </div>
      </div>
      <div style={{display:'flex'}}>
      <FaQuestionCircle  className='icon'/>
        <div>
        <h1>CUSTOMER SUPPORT</h1>
        <p>Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit. 
            Phasellus at iaculis quam. Integer accumsan tincidunt fringilla.</p>
        </div>
      </div>
    </section>
  )
}

export default Shipping
