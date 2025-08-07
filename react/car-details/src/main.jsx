import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Cars from './pages/cars.jsx'
import About_us from './pages/About-us.jsx'
import Carss from './pages/Carss.jsx'
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Carss/>}/>
      <Route path='/about-us' element={<About_us/>}/>
      <Route path='/cars' element={<Cars/>}/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
