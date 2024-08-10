import React,{useState} from 'react'
// import "./responsive.css"
import { Link,NavLink } from 'react-router-dom'
import logo from "./logo.jpg"
import { CiMenuBurger } from "react-icons/ci";
import "./responsive.css"



export default function Navbar() {
  const[isopen,setisopen]=useState(true)
  const changemenu=()=>{
    setisopen(!isopen)
  }
  return (
    <div className='navbar flex  w-[100vw] 2xl:gap-[20vw] lg:gap-[30px] esm:gap-[30px]  md:gap-[30px] xl:gap-[30vw]  esm:bg-white  px-[50px] esm:justify-around   '>
      <div className="logo">
       <img className='w-[180px]  h-[80px]' src={logo} alt="logo" />
      </div>
      <ul className="nav-list text-[#111] esm:hidden md:flex flex gap-[45px] text-[18px] font  font-serif tracking-wide  ">
        <li><NavLink activeClassName="text-red-900" className="focus:text-red-900" to="/">Home</NavLink></li>
        <li><NavLink  className="focus:text-red-900" to="/trainers">Trainers</NavLink></li>
        <li><NavLink  className="focus:text-red-900" to="/faculties">Facilities</NavLink></li>
        <li><NavLink  className="focus:text-red-900" to="/about"> About us</NavLink></li>
        <li><NavLink  className="focus:text-red-900" to="/contact">Contact us</NavLink></li>
        
      </ul>

      <ul className={`responsive-nav-list esm:flex esm:flex-col esm:absolute esm:w-[100vw] esm:justify-center esm:z-[1111] esm:${isopen?"block":"hidden"}  esm:bg-white top-[80px] md:hidden  `}>
      <li><NavLink activeClassName="text-red-900" className="focus:text-red-900 " to="/">Home</NavLink></li>
        <li><NavLink  className="focus:text-red-900" to="/trainers">Trainers</NavLink></li>
        <li><NavLink  className="focus:text-red-900" to="/faculties">Facilities</NavLink></li>
        <li><NavLink  className="focus:text-red-900" to="/about"> About</NavLink></li>
        <li><NavLink  className="focus:text-red-900" to="/contact">Contact us</NavLink></li>
        

      </ul>
      <div className="hamburger">
      <CiMenuBurger onClick={()=>{changemenu()}} className='text-[30px] esm:flex md:hidden ' />
      </div>
    </div>
  )
}
