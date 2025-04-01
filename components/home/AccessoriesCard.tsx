import React from 'react'
import Image from 'next/image'
import CardImage from "../../public/1740980989367_15.webp"
const AccessoriesCard = ({data}) => {
  return (
    <div className='w-full bg-gray-100  h-[150px] flex'>
        <div className='w-1/3 flex justify-center items-center'>
        <Image
        className='w-[100px] border'
        src={CardImage} alt='this is card image' height={200} width={200}/>
        </div>
        <div className='text-xl w-[49%] pt-6'>
           <h2 className='text-2xl font-semibold'> {data}</h2>
           <h4>(2) items Available</h4>
        </div>
    </div>
  )
}

export default AccessoriesCard