import React from 'react'
import Navbar from './navbar'
import trainer from "./assets2/trainer.jpg"
import Hero from './hero'
import Trainerdetail from './trainerdetail'
import trainer1 from "./assets2/trainer1.jpg"
import trainer2 from "./assets2/trainer2.jpg"
import trainer3 from "./assets2/trainer3.jpg"
import Footer from './footer'

export default function Trainers() {
  const classname="text-rose-800"
  return (
    <div>
      <Navbar/>
      <Hero h1="GET QUALITY TRAINING" h2="From Qualified Trainers" h3="Get Personal Trainer" classname={classname} img={trainer}/>
      <Trainerdetail img={trainer1} trainername="Carloss Breathwaite" trainerdetails="With years of experience in the fitness industry, Carlos Breathwaite is a dedicated and passionate gym trainer committed to helping you achieve your fitness goals. Whether you're looking to build muscle, lose weight, or simply lead a healthier lifestyle, Carlos brings personalized training programs and expert guidance tailored to your unique needs. His motivational approach and deep knowledge of exercise science make every workout effective and enjoyable. Start your fitness journey with Carlos and transform your body today!"/>
      <Trainerdetail img={trainer2} trainername="Jordan Steele" trainerdetails="Jordan Steele is a passionate and experienced gym trainer who believes in pushing boundaries and achieving greatness. With a background in sports science and a love for fitness, Jordan combines cutting-edge techniques with personalized workout plans to help you reach your full potential. Whether you're a beginner or an athlete, Jordan's no-nonsense approach and motivational coaching style will empower you to smash your fitness goals. Join Jordan Steele and take the first step toward a stronger, healthier you!"/>
      <Trainerdetail img={trainer3} trainername="Sierra Brooks" trainerdetails="Sierra Brooks is a dedicated and inspiring gym trainer who brings energy, passion, and expertise to every workout. With a focus on holistic fitness, Sierra designs personalized training programs that not only transform your body but also elevate your mind and spirit. Whether you're new to fitness or a seasoned athlete, Sierra’s supportive and motivating approach will help you unlock your true potential. Join Sierra Brooks on your fitness journey and experience the power of strength and confidence!"/>
      <Footer/>
      </div>
    
  )
}
