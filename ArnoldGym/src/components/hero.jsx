import React from 'react'

export default function Hero({h1,h2,h3,h4,img,classname,classname1,classname2}) {
  return (
    <div>
      <div className="section1 relative">
        <img className='w-[100vw] top-0 class  h-[89vh] object-cover z-[1]'   src={img} alt="hero1" />
        <div className="cover w-[100vw] h-[89vh] absolute top-0 opacity-[0.5] z-[11]  bg-black"></div>
        <div className={`content ${classname2} esm:top-[30vh] esm:gap-[30px] w-[100vw] absolute top-[20vh] flex flex-col justify-center text-center text-white z-[111]`}>
          <h1 className={`  sm:text-[55px] esm:text-[35px]  font-[600] ${classname}`}>{h1}</h1>
          <h1 className={`    sm:text-[50px]  esm:text-[30px] font-[500] `}>{h2}</h1>
          <h1 className={` ${classname}  sm:text-[45px] esm:text-[30px] font-[500]  `}>{h3}</h1>
          <h1 className='text-[55px] esm:text-[40px] text-rose-700 mt-[20px] font-[600] '>{h4}</h1>
        </div>
      </div>
    </div>
  )
}
// text-[50px] sm:text-[60px] lg:text-[75px] font-[700]