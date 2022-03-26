import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Contenedor from '../components/Contenedor';


const AppRouter = () => {
  return (
    <Router>
        <Routes>
        
            <Route path="/" element={<Contenedor />} />
        </Routes>
  </Router>
  )
}

export default AppRouter