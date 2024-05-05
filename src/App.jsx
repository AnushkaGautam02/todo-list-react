import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import { Route, Routes } from 'react-router-dom'
import Ragister from './Ragister'
import Login from './Login'
import Todo from './Todo'

function App() {
  

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Ragister/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/todo' element={<Todo/>}></Route>
      </Routes>
    </>
  )
}

export default App
