// import React from 'react'

// export default function Trainerdetail({img,trainername,trainerdetails}) {
//   return (
//     <div className='mt-[50px]sm:w-[80vw] sm:mx-auto  sm:border-4  '>
//         <div className='grid md:grid-cols-2 sm:grid-cols-1   sm:gap-[30px]  px-[200px]  py-[60px]'>

//       <div className="sm:flex justify-center" >
//         <img className='ms:w-[400px] md:h-[300px] sm:max-h-[400px] sm:w-[] ' src={img} alt="" />
//       </div>
//       <div className="content sm:w-full sm:flex sm:flex-col sm:gap-[30px] ">
//         <h1 className='text-[35px] text-rose-700 font-[700] uppercase '>{trainername}</h1>
//         <h2 className='text-[19px] sm:w-full'>{trainerdetails}</h2>
//       </div>
//     </div>
//         </div>
//   )
// }


import React from 'react';

export default function Trainerdetail({ img, trainername, trainerdetails }) {
  return (
    <div className='mt-[50px] sm:w-[80vw] sm:mx-auto sm:border-4'>
      <div className='grid md:grid-cols-2 sm:grid-cols-1 sm:gap-[30px] px-[50px] py-[60px]'>
        <div className="flex justify-center">
          <img className='md:w-[400px] md:h-[300px] sm:max-h-[400px] w-full object-cover' src={img} alt="" />
        </div>
        <div className="content sm:w-full flex flex-col gap-[30px]  p-4">
          <h1 className='text-[35px] text-rose-700 font-[700] uppercase'>{trainername}</h1>
          <h2 className='text-[19px]'>{trainerdetails}</h2>
        </div>
      </div>
    </div>
  );
}
