import React from 'react'
import FeaturedProducts from '../components/FeaturedProducts'
import YourPerfectShoes from '../components/YourPerfectShoes'
import Shipping from '../components/Shipping'
import Collections from '../components/Collections'
import BigSale from '../components/BigSale'

const Home = () => {
  return (
    <div>
      <YourPerfectShoes/>
      <Shipping/>
      <Collections/>
      <FeaturedProducts/>
      <BigSale/>
    </div>
  )
}

export default Home
