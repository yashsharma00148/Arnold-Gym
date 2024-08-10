import React from 'react'
import logo from "./logo.jpg"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import { Link } from 'react-router-dom';



export default function Footer() {
  return (
    <div className='grid footer esm:grid-cols-1 esm:gap-[30px] text-[#fff] bg-black md:grid-col-4 sm:grid-cols-2 sm:px-[10px] sm:gap-[40px] md:px-[50px] py-[50px] '>
      <div className='flex esm:px-[20px] flex-col justify-center gap-[20px] links' >
        <img src={logo} className='w-[170px]' alt="" />
        <h1>Largest Gym In Dwarka With Premium Graded Equipments With Steam, Cafe, Zumba, Dance, Yoga, Strength, Cardio And Many More</h1>
         <div className='flex'>
         <FaLocationDot />
          <h2>Dwarka Sector-12a, Plot No. 5, Opposite CNG Pump.</h2>
         </div>
         <div className='flex' >
         <FaPhone />
         <h1>+91-9728747530</h1>
         </div>
         <div>

         </div>
      </div>
      <div className='flex esm:px-[20px] links flex-col gap-[20px]'>
        <h1 className='esm:text-[20px] esm:text-[red] '>QUICK LINKS</h1>
        <div className='flex'>
        <FaArrowRight />
          <Link  to="/about">About us</Link>
        </div>
        <div className='flex'>
        <FaArrowRight />
        <Link to="/contact">Contact us</Link>
        </div>
      </div>
      <div className='flex links esm:px-[20px] flex-col gap-[20px]'>
        <h1 className='esm:text-[20px] esm:text-[red] esm:px-[20px]'>USEFUL LINKS</h1>
        <div className='flex'>
        <FaArrowRight />
          <Link to="/about">Location Main Branch</Link>
        </div>
        <div className='flex'>
        <FaArrowRight />
        <Link to="/contact">Location Jhajjar Branch</Link>
        </div>
        <div className='flex'>
        <FaArrowRight />
        <Link to="/contact">Yash Sharma</Link>
        </div>
        <div className='flex'>
        <FaArrowRight />
        <Link to="/contact">Rohit Khatri</Link>
        </div>
      </div>
      <div className='flex flex-col gap-[20px] esm:px-[20px]'>
        <h1 className='esm:text-[20px] esm:text-[red]'>Rohit Khatri</h1>
        <h2>Owner of one of India’s largest fitness channels on YouTube, Rohit Khatri is a sports science nutritionist and content creator. He is also a fitness instructor and is famous for workout routines on the video-blogging platform. He also conducts online fitness coaching classes and is counted among the top fitness influencers in the country</h2>
      </div>
    </div>
  )
}
