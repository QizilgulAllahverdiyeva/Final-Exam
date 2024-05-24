import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import axios from 'axios'
import "@fontsource/mukta"
import './style.css'
const FeaturedProducts = () => {
    const { data, setData} = useContext(ProductsContext)
    
    const getAllData = async()=>{
        const res = await axios("http://localhost:5000/shoes")
        setData(res?.data)
    }

    useEffect (() => {
      getAllData();
      }, []);

  return (
    <section>
        <div  className='border'></div>
    <h1 className='Products'>Featured Products</h1>
      <div className='datas'>
        {
            data.map((elem)=>{
                return <div key={elem._id}>
                   <img src={elem.img} alt="" />
                    <h3>{elem.title}</h3>
                    <p>{elem.category}</p>
                    <h5>${elem.price}</h5>
                </div>
            })
        }
      </div>
    </section>
  )
}

export default FeaturedProducts
