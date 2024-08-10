import React from 'react'
import { Link } from 'react-router-dom'
export default function Contactdetails({img,h1}) {
  return (
    <div className='flex flex-col justify-center text-center '>
      <div className='w-[100%] flex justify-center'>
        <img src={img} className='max-w-[200px] esm:w-[110px] esm:mb-[20px] '  alt="Gmail" />
      </div>
      <div>
        <Link className='text-center sm:text-[30px]  esm:text-[20px] text-blue-600 text-[40px]'>{h1}</Link>
      </div>
    </div>
  )
}
