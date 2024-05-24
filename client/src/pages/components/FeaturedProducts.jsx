import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import { MdDelete } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import "@fontsource/mukta"
import './style.css'
const FeaturedProducts = () => {
    const { data, setData , wish, setWish} = useContext(ProductsContext)
    const navigate = useNavigate()
    
    const getAllData = async()=>{
        const res = await axios("http://localhost:5000/shoes")
        setData(res?.data)
    }

    useEffect (() => {
      getAllData();
      }, []);

      const deleteData = async(id)=>{
        axios.delete(`http://localhost:5000/shoes/${id}`)
        getAllData();
      }



      const addWish =(elem)=>{
        data.find((e)=> {
          if(e._id==elem._id){
            alert("Bu kart movcuddur!")
          }
          else{
            setWish([...wish, elem])
          }
        } )
      }
  return (
    <section className='dataSection'>
        <div  className='border'></div>
    <h1 className='Products'>Featured Products</h1>
      <div className='datas'>
        {
            data.map((elem)=>{
                return <div className='data' key={elem._id}>
                   <img src={elem.img} alt="" />
                    <h3>{elem.title}</h3>
                    <p>{elem.category}</p>
                    <h5>${elem.price}</h5>
                    <div style={{display:'flex', justifyContent:"space-between"}}>
                    <button className='detailBtn'  onClick={()=> navigate(`${elem._id}`)}> DETAIL </button>
                    <button  className='deleteBTN' onClick={()=> deleteData(elem._id)}><MdDelete /></button>
                    <button  className='wishListBtn' onClick={()=> addWish(elem)} ><FaHeart /></button>
                    </div>
                </div>
            })
        }
      </div>
    </section>
  )
}

export default FeaturedProducts
