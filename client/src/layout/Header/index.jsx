import React from 'react'
import { IoMdPerson } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { NavLink } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import Input from '@mui/material/Input';
import "@fontsource/mukta"
import './style.css'


const Header = () => {
    const ariaLabel = { 'aria-label': 'description' };
  return (
    <div className='header'>
      <div className='headerBottom'>
      <Input placeholder="Searching" inputProps={ariaLabel} />
      <div className='shoppersDiv'>SHOPPERS</div>
      <div className="icons">
      <IoMdPerson />
      <FaRegHeart />
      <SlBasket />
      </div>
      </div>
      <br />
      <div className='grayBorder'></div>
      <br />
      <ul style={{color:'black'}}>
        <li><NavLink  to={"/"} className={(nav)=> nav.isActive ? "active" : "" }>HOME <IoIosArrowDown /></NavLink></li>
        <li><NavLink  to={"/form"} className={(nav)=> nav.isActive ? "active" : "" }>FORM</NavLink></li>
        <li>ABOUT</li>
        <li>SHOP</li>
        <li>CATALOG</li>
        <li>NEW ARRIVALS</li>
      </ul>
    </div>
  )
}

export default Header
