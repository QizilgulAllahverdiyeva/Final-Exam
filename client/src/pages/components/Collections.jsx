import React from 'react'
import first from '../../assets/women.jpg'
import second from '../../assets/men.jpg'
import third from '../../assets/children.jpg'
import './style.css'

const Collections = () => {
  return (
    <section className='collections'>
        <div style={{margin:"70px"}} className='grayBorder'></div>
      <img src={first} alt="" />
      <img src={second} alt="" />
      <img src={third} alt="" />

    </section>
  )
}

export default Collections
