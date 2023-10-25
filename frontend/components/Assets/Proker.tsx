import React from 'react'

export default function Proker({prokerName}: {prokerName:string}) {
  return (
    <div className='w-[40%] h-fit px-4 py-2 bg-pastel rounded-md text-center'>
        <p className=''>{prokerName}</p>
    </div>
  )
}
