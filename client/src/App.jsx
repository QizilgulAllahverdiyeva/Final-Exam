import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/FormPage'
import Detail from './pages/Detail'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Wish from './pages/Wish'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Routes>
        <Route  path='/'  element={<Home/>}/>
        <Route  path='/form'  element={<Form/>}/>
        <Route  path='/wish'  element={<Wish/>}/>
        <Route  path='/:clothID'  element={<Detail/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
