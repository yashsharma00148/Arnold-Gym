import React from 'react'


export default function Box({h1,h2,img2}) {
  return (
    <>
               <div className='relative w-[60%] sm:w-[80%] esm:w-[100%]  mx-auto my-[100px] min-h-[500px]'>
          <img className='w-[100%] h-[100%] absolute top-0 ' src={img2} alt="img2" />
        <div className="cover w-[100%] h-[100%] absolute top-0 opacity-[0.8] z-[11]  bg-black"></div>
        <div className='contentesm:px-[20px] w-[100%] h-[100%] absolute z-[111] text-[#fff] flex flex-col justify-center align-middle'>
          <h1 className='esm:text-[35px] text-center sm:text-[50px] font-[600] text-rose-700'>{h1}</h1>
          <h2 className='esm:text-[30px] mt-[30px] sm:text-[34px] text-center font-[500]'>{h2}</h2>
        </div>


        </div>
    </>
  )
}
