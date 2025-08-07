import './App.css'
import Nav from './components/Nav'
import Carss from './pages/Carss'
import Footer from './components/Foother'
import Cars from './pages/cars'
import About_us from './pages/About-us'
import { Outlet} from "react-router-dom"
function App() {
  
  return (
    <>
      <Nav/>
      <div className="main">
        <Outlet/>
      </div>
      <Footer/>
    </>
  )
}

export default App
