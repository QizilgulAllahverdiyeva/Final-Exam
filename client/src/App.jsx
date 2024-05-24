import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Form from './pages/FormPage'
import Detail from './pages/Detail'
import Header from './layout/Header'
import Footer from './layout/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
      <Routes>
        <Route  path='/'  element={<Home/>}/>
        <Route  path='/form'  element={<Form/>}/>
        <Route  path='/:clothID'  element={<Detail/>}/>
      </Routes>
      <Footer/>
    </>
  )
}

export default App
