import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import axios from 'axios'
import { useParams } from 'react-router-dom'
const Detail = () => {
  const {detail , setDetail} = useContext(ProductsContext)
  const {clothID} = useParams()
  const getData = async()=>{
    const res = await axios("http://localhost:5000/shoes/"+ clothID)
    setDetail(res?.data)
  }

  useEffect (() => {
    getData();
    }, []);

  return (
    <div>
<div key={detail._id} style={{display:'flex', alignItems:'center', gap:'20px'}}>
                   <img style={{width:'400px' , borderRadius: '8px'}} src={detail.img} alt="" />
                    <div>
                    <h3>{detail.title}</h3>
                    <p>{detail.category}</p>
                    <p>Description: Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint delectus soluta molestiae ea 
                      aliquid labore in praesentium voluptatum non animi, 
                      eum quas ab facere libero minus vitae voluptate minima deserunt.</p>
                    <h5>${detail.price}</h5>
                    </div>
                </div>

    </div>
  )
}

export default Detail
