import React, { useEffect, useState } from 'react'

const Cars = (props) => {
  let [CarPrice, setCarPrice] = useState(Math.floor(Math.random() * 100))
  let [CarName, setCarName] = useState("not found")

  useEffect(() => {
    if(props.price){
    setCarPrice(props.price)
  }
  if (props.name) {
    setCarName(props.name)
  }
}, [props.price , props.name])
  console.log(CarPrice)
return (
  <div className="main">
    <div className="car">
      <img src="https://images.unsplash.com/photo-1474511320723-9a56873867b5?q=80&w=872&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" width="200px" />
      <div>
        <h1>{CarName}</h1>
        <p>Price {CarPrice}</p>
      </div>
    </div>
  </div>

)
}

export default Cars