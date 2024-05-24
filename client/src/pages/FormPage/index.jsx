import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../context/ProductsContext'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import './style.css'
import { TextField } from '@mui/material';


const  Form = () => {
 const {data,setData, sort , setSort } = useContext(ProductsContext)

 const [title , setTitle]= useState("")
 const [category , setCategory]= useState("")
 const [price , setPrice]= useState("")


 const getAllData = async()=>{
    const res = await axios("http://localhost:5000/shoes")
    setData(res?.data)
    setSort(res?.data)
}



useEffect (() => {
  getAllData();
  }, []);

  return (
    <div>
     <form action="">
     <TextField id="outlined-basic" label="title"  onChange={(e)=> setTitle(e.target.value)}/>
     <TextField id="outlined-basic" label="price"  onChange={(e)=> setPrice(e.target.value)} />
     <TextField id="outlined-basic" label="category"  onChange={(e)=> setCategory(e.target.value)} />
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
              <TableCell align="center"><button>Delete</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default  Form
