import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './Home.jsx'
import { BrowserRouter, Route, Routes } from 'react-router'
import RouteLayout from './routeLayout/RouteLayout.jsx'
import Login from './pages/login.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RouteLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='login' element={<Login />} />
          </Route>
         
      </Routes>
     </BrowserRouter>
  </StrictMode>,
)
