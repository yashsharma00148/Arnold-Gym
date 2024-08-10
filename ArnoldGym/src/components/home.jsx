import React from 'react'
import Navbar from './navbar'
import img1 from "./assets2/img1.jpg"
import img2 from "./assets2/img2.jpg"
import img3 from "./assets2/img3.avif"
import img4 from "./assets2/img4.jpg"
import img5 from "./assets2/img5.jpg"



import Box from './box'
import Footer from './footer'
import Hero from './hero'
import hero1 from "./assets2/hero1.jpg"

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero h1="LOOKING FOR A GYM??" h2="Then You Are At A Right Place" h3="Best Gym of Haryana" h4="#ARNOLD GYM" img={hero1}/>
      <div className="section2  w-[100vw]  ">
       <Box h1="QUALITY EQUIPMENT" h2="International Graded Equipments For Your Professional Fitness Journey" img2={img2}/>
       <Box h1="Best Training" h2="Get Train With The Best Mentors In The Fitness Industry" img2={img3}/>
       <Box h1="YOGA, ZUMBA And Many More" h2="Every Body Is Different That Why Everyone Custome Diet & Workout Plans" img2={img4}/>
            
      </div>
        
       <div className="section3 relative w[100%] h-[80vh]">
        <div>
          <img src={img5} className='absolute h-[100%]  w-[100%] top-0'  alt="img5" />
        <div className="cover w-[100%] h-[100%] absolute top-0 opacity-[0.7] z-[11]  bg-black"></div>
        <div className='absolute px-[40px] gap-[20px] w-[100%] h-[100%] content  flex-col justify-center text-[40px] z-[111]  flex   '>
          <h1 className='uppercase font-[600] text-rose-600'>Call us Today</h1>
          <h2 className='text-[#fff] esm:text-[30px] text-[50px]'>+91-9728747530</h2>
          <h3 className='text-[26px] text-center font-[400] text-[#fff]'>Join The Best Experience In Your Fitness Journey At Rk Fitness</h3>
        </div>


        </div>
        
        </div> 
      <Footer/>
  </div>
    
  
  )
  {/* <img className='w-[40%] ml-[10%]  h-[400px]'src={img2} alt="" /> */}
}
