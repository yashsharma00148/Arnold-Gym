import React from 'react'
import Navbar from './navbar'
import Facultiesdetails from './facultiesdetails'
import facility1 from "./assets2/facility1.jpg"
import facility2 from "./assets2/facility2.jpg"
import facility3 from "./assets2/facility3.jpg"
import facility4 from "./assets2/facility4.jpg"
import facility5 from "./assets2/faculty5.jpg"
import Footer from './footer'

export default function Faculties() {
  return (

    <div>
      <Navbar/>
      <div className="section w-[100vw] pt-[60px] flex flex-col gap-[60px]  bg-black">
      <Facultiesdetails img={facility1} h1="Budget Friendly" h2="At our gym, we believe that fitness should be accessible to everyone, which is why we offer a low-budget gym that fits your lifestyle and your wallet. Our Jhajjar facility provides all the essentials you need to achieve your fitness goals without breaking the bank. With affordable membership options, quality equipment, and a supportive community, we make it easy for you to stay healthy and active. Join us today and experience fitness that’s both effective and affordable!"/>
      <Facultiesdetails img={facility2} h1="Quality Equipments" h2="we pride ourselves on providing top-quality equipment to help you get the most out of your workouts. Our gym is equipped with the latest machines and free weights, designed to meet the needs of both beginners and experienced fitness enthusiasts. Whether you're lifting, running, or stretching, our durable and well-maintained equipment ensures a safe and effective workout every time. Experience the difference that quality equipment can make in your fitness journey!"/>
      <Facultiesdetails img={facility3} h1="Qualified Trainers" h2="our team of qualified trainers is dedicated to helping you achieve your fitness goals with personalized attention and expert guidance. Each trainer brings extensive experience and professional certifications to ensure you receive the best possible support. From creating customized workout plans to offering valuable fitness advice, our trainers are here to motivate and guide you every step of the way. Trust in our expertise and let us help you reach new heights in your fitness journey!"/>
      <Facultiesdetails img={facility4} h1="Awesome Location" h2="Conveniently located in the heart of Jhajjar, Our Gym offers easy access for all residents in the area. Our central location ensures that you can fit your workouts seamlessly into your daily routine, whether you're coming from home, work, or school. With ample parking and a welcoming atmosphere, we make it simple and convenient for you to stay committed to your fitness goals. Discover the perfect blend of accessibility and quality at our gym and make fitness a part of your lifestyle!

"/>
      <Facultiesdetails img={facility5} h1="Free Coffee" h2=", we believe in making your fitness experience as enjoyable as possible. That’s why we offer complimentary coffee to all our members. Start your day with a fresh cup of coffee before hitting the gym, or relax with a warm drink after your workout. It’s our way of keeping you energized and motivated while you work towards your fitness goals. Come for the workout, stay for the coffee!"/>

      </div>
      <Footer/>
    </div>
  )
}
