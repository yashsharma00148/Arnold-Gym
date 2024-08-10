import React from 'react'
export default function Facultiesdetails({img,h1,h2,}) {
  return (
    <div className='w-50% sm:w-[80%] esm:w-[80%] mx-auto flex flex-col  ' >
      <div className='flex flex-col text-center border-4 border-black  w-[50vw] py-[60px] esm:w-[100%] gap-[50px] mx-auto justify-center' >
        <h1 className='text-rose-700 text-[40px] font-[800]'>{h1}</h1>
        <div className='flex justify-center'>
            <img src={img} className='max-w-[800px] max-h-[300px]' alt="trainer2" />
            
            </div>
        <h2 className={`text-center text-[20px] text-[#fff]  `}>{h2}</h2>
      </div>
    </div>
  )
}
