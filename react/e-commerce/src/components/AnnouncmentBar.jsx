import React from 'react'
import "./AnnouncmentBar.css"
const AnnouncmentBar = () => {
    function closeBar(){
        const main = document.getElementById("main")
        main.style.display="none"
    }
  return (
    <div className='main'>
        <div><p>Singup and get 20% off to your first order</p>
        <Link to="/singup"><p>Sing UP </p></Link></div>
        <div><p id="closeBar" onClick={closeBar}>x</p></div>
    </div>
  )
}

export default AnnouncmentBar