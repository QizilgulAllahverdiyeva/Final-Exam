import React, { useContext } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { MdDelete } from "react-icons/md";
import axios from 'axios'

const Wish = () => {
    const {wish, setWish}= useContext(ProductsContext)
console.log(wish);
const deleteData = async(elem)=>{
   let filterData =  wish.filter((e)=> e._id == elem._id)
   setWish(filterData)
  }

  return (
    <div>
      {
        wish.map((elem)=>{
            return <div className='data' key={elem._id}>
               <img src={elem.img} alt="" />
                <h3>{elem.title}</h3>
                <p>{elem.category}</p>
                <h5>${elem.price}</h5>
                <div style={{display:'flex', justifyContent:"space-between"}}>
                <button  className='deleteBTN' onClick={()=> deleteData(elem._id)}><MdDelete /></button>
                </div>
            </div>
        })
      }
    </div>
  )
}

export default Wish
