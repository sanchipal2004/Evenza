import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './assets/pages/Login' 
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './assets/pages/Home'
import Signup from './assets/pages/Signup'
import OrganizationDashboard from './assets/pages/OrganizationDashboard';
import CreateEvent from './assets/pages/CreateEvent'
import Events from './assets/pages/Eventlist'




function App() {
  

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/OrganizationDashboard" element={<OrganizationDashboard/>}/>
        <Route path="/createEvent" element={<CreateEvent/>}/>
        <Route path="/Events" element={<Events/>}/>

        
      </Routes>
    </BrowserRouter>
     
    </>
  )
}

export default App
