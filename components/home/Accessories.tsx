import React from "react";
import Image from "next/image";
import CardImage from "@/public/abc.png"
const Accessories = () => {
  const data = ["Speaker","Camra ","wiring ","headrest dvd","hello","audio "]
  return (
    <div className="my-8 w-11/12 mx-auto  border rounded-lg border-gray-300 p-8">
      {/* Section Title */}
      <h1 className="text-4xl p-2 font-semibold border-b border-gray-300  text-gray-800 mb-6">
        Accessories
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4">
        {data.map((name, index) => (
         <div key={index} className='w-full bg-gray-100  h-[150px] flex'>
         <div className='w-1/3 flex justify-center items-center'>
         <Image
         className='w-[100px] border mix-blend-darken '
         src={CardImage} alt='this is card image' height={200} width={200}/>
         </div>
         <div className='text-xl w-[49%] pt-6'>
            <h2 className='text-2xl font-semibold'> {name}</h2>
            <h4>(2) items Available</h4>
         </div>
     </div>
        ))}
      </div>
    </div>
  );
};

export default Accessories;