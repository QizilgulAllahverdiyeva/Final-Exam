import React from 'react'
import image from '../../assets/clothes.jpg'
import './style.css'
const BigSale = () => {
  return (
    <section className='bigsaleSection'>
    <div  className='border'></div>
    <h1 className='Products'>Big Sale!</h1>
    <div className='saleDiv'>
        <img src={image} alt="" />
        <div>
            <h1 className='less'>50% less in all items</h1>
            <p> September 3, 2018</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Quisquam iste dolor accusantium facere corporis ipsum animi deleniti fugiat. Ex, veniam?</p>
                <button>Shop Now</button>
        </div>
    </div>

    </section >
  )
}

export default BigSale
