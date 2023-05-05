import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import MainPage from './components/MainPage'
import HomeScreen from './components/HomeScreen'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<MainPage/>}/>
    <Route path="/home" element={<HomeScreen/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App