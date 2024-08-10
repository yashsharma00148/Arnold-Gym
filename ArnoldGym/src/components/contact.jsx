import React from 'react'
import Navbar from './navbar'
import Contactdetails from './contactdetails'
import gmail from "./assets2/gmail.png"
import phone from "./assets2/phone.png"
import instagram from "./assets2/instagram.png"
import twitter from "./assets2/twitter.png"
import youtube from "./assets2/youtube.png"
import Footer from './footer'


export default function Contact() {
  return (
    <div>
      <Navbar/>
      <div className='w-[100vw] flex flex-col bg-black gap-[40px] justify-center'>
                <Contactdetails img={gmail} h1="yashsharma786a@gmail.com"/>
                <Contactdetails img={phone} h1="+91-9728747530"/>
                <Contactdetails img={instagram} h1="@yashsharma00148.instagram.com"/>
                <Contactdetails img={twitter} h1="yashsharma00148@twitter.com"/>
                <Contactdetails img={youtube} h1="yashsharmafitness.youtube.com"/>
      </div>
      <Footer/>
    </div>
  )
}
