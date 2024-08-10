import React from 'react'
import Navbar from './navbar'
import Hero from './hero'
import about1 from "./assets2/about1.jpg"
import Footer from './footer'
import Facultiesdetails from './facultiesdetails'
import about2 from "./assets2/about2.jpg"
import about3 from "./assets2/about3.jpg"

export default function About() {
  const className="text-[32px] font-[800]  px-[50px] text-center text-rose-500"
  const classname2="top-[4vh] px-[50px]"
  return (
    <div>
      <Navbar/>
      <Hero h1="#OUR MISSION" h3="Our mission is to empower individuals to achieve their fitness goals through personalized training, state-of-the-art facilities, and a supportive community." img={about1} classname1={className} classname2={classname2}/>
      <div className='w-[100vw] bg-black'>
      <Facultiesdetails  img={about2} h1="Aarav Singh" h2="Aarav Singh, a passionate fitness enthusiast, is the driving force behind our gym. With over a decade of experience in the fitness industry, Aarav is committed to helping others lead healthier, more active lives. His vision is to create a community where everyone feels motivated and supported in their fitness journey. Aarav’s dedication to providing top-notch facilities and personalized training has made our gym a haven for both beginners and seasoned athletes. He believes in the power of consistency, discipline, and a positive mindset to transform lives."/>
      <Facultiesdetails img={about3} h1="Maya Kapoor" h2="Maya Kapoor, co-owner of our gym, is a dynamic force in the world of fitness. With a background in sports science and a passion for empowering others, Maya brings a wealth of knowledge and energy to our community. Her commitment to creating an inclusive and welcoming environment for everyone, regardless of their fitness level, has been instrumental in shaping the gym's culture. Maya believes in holistic wellness, combining physical fitness with mental well-being, and is dedicated to helping members achieve their full potential through personalized training and unwavering support.
      "/>
      <Footer/>
      </div>
    </div>
  )
}
