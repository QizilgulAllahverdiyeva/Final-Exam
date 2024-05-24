import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, TextField } from '@mui/material';
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup'; 
import { MdDelete } from "react-icons/md";
import axios from 'axios'
import './style.css'
import { ProductsSchema } from '../../schema/ProductsSchema';


const  Form = () => {
 const {data,setData, sort , setSort } = useContext(ProductsContext)



 const getAllData = async()=>{
    const res = await axios("http://localhost:5000/shoes")
    setData(res?.data)
    setSort(res?.data)
}

const { register, 
    handleSubmit,
    formState: { errors } } = useForm({
    resolver: yupResolver(ProductsSchema),
  });


useEffect (() => {
  getAllData();
  }, []);



  const createProduct = async(values)=>{
    axios.post("http://localhost:5000/shoes", values)
    getAllData()
  }

  const deleteData = async(id)=>{
    axios.delete(`http://localhost:5000/shoes/${id}`)
    getAllData();
  }

  return (
    <div className='centerForm'>
        <h1>Sort Section</h1>
      <Button  onClick={()=>{
        let newArr = [...data].sort((a, b)=> a.title[0].localeCompare(b.title[0]))
        setSort(newArr)
      }}>A-Z</Button>
      <Button onClick={()=>{
        let newArr = [...data].sort((a, b)=> b.title[0].localeCompare(a.title[0]))
        setSort(newArr)
      }}>Z-A</Button>
      <Button onClick={()=>{
        let newArr = [...data].sort((a, b)=> a.price -b.price)
        setSort(newArr)
      }}>Price(min-max)</Button>
     <Button onClick={()=>{
        let newArr = [...data].sort((a, b)=> b.price -a.price)
        setSort(newArr)
      }}>Price(max-min)</Button>

<h1>Searching</h1>

<TextField id="outlined-basic" label="searching" onChange={(e)=>{
  let searching = data.filter((elem)=> elem.title.toLowerCase().includes(e.target.value.toLowerCase()))
  setSort(searching)
}}/>
      <h1>Post Section</h1>

     <form action=""  onSubmit={handleSubmit(createProduct)}>
     <TextField id="outlined-basic" label="img"  {...register("img")}/>
     <br />
     <TextField id="outlined-basic" label="title"  {...register("title")}/>
     {errors.title && <p>{errors.title.message}</p>}
     <br />
     <TextField id="outlined-basic" label="price" {...register("price")} />
     {errors.price && <p>{errors.price.message}</p>}
     <br />
     <TextField id="outlined-basic" label="category"  {...register("category")} />
     {errors.category && <p>{errors.category.message}</p>}
     <br />
     <button className='submitBtn' type='submit '>Submit</button>
     </form>

      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center">ID</TableCell>
            <TableCell align="center">Image</TableCell>
            <TableCell align="center">Title</TableCell>
            <TableCell align="center">Category</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sort.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row._id}
              </TableCell>
              <TableCell align="center"><img className='productImg' src={row.img} alt="" /></TableCell>
              <TableCell align="center">{row.title}</TableCell>
              <TableCell align="center">{row.category}</TableCell>
              <TableCell align="center">{row.price}</TableCell>
              <TableCell align="center"><button className='deleteBTN' onClick={()=> deleteData(row._id)}><MdDelete /></button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default  Form
