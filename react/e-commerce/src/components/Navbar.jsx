import React from 'react'
import { useContext } from 'react'
import { data } from "../context/Name"
const Navbar = () => {
    let Name = useContext(data)
    console.log(Name)
    return (
        <div className="main">
            <div></div>
            <div>
                <ul>
                    <li>Shop</li>
                    <li>on Sale</li>
                    <li>New Arrivals</li>
                    <li>Brands</li>
                </ul>
            </div>
            <div>
                <input type="text" placeholder='Search for products' />
            </div>
            <div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Navbar