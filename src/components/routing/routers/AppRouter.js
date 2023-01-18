import React from 'react'
import { Routes,Route } from 'react-router-dom'

//components
import LandingPage from '../../screens/LandingPage'
import ListPage from '../../screens/ListPage'
import SinglePage from '../../screens/SinglePage'
import Login from '../../screens/authentication/Login'

function AppRouter() {
  return (
    <Routes>
        <Route path="/home" element={<LandingPage/>} />
        <Route path="/events" element={<ListPage />} />
        <Route path="/single-events" element={<SinglePage/>} />
        <Route path="/" element={<Login />} />
    </Routes>
  )
}

export default AppRouter