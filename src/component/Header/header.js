import "./style.css"

import React, { useState } from 'react'
import { Link } from "react-router-dom"

import {FaBars ,FaTimes} from "react-icons/fa"
export default function Navbar () {

    const [click , setClick]= useState(false);
    const handleClick =  ()=>setClick(!click);
    const [color , setColor]= useState(false);
    const ChangeColor =  ()=>
    {
        if(window.scrollY>=100)
        {
            setColor(true)
        }
        else
        {
            setColor(false)
        }
    };

    window.addEventListener("scroll",ChangeColor);

    return (
    <>
        <div className={color ? "header header-bg" : "header"}>
           <Link to="/">
               <h1>EgyBest</h1>
           </Link>
           <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li> <Link to="/">Movies</Link></li>
           </ul>
        </div>
    </>
  )
}