import React,{ useEffect } from 'react'
import Image from 'next/image'
export default function cardAnggota({nama}:{nama:string}) {
  return (
    <article className='card flex flex-col gap-7 lg:gap-6 rounded-md w-[80%] min-[550px]:w-[40%] min-[730px]:w-[40%] lg:h-[30%] lg:w-[250px] border-2 bg-pastel pb-4 box-border drop-shadow'>
        <div className='w-full h-[40%] flex flex-col flex-wrap gap-0 items-center'>
            <figure className='w-full h-full'>
                <Image className='object-cover rounded-t-xl' src='/image/foto.png' width={400} height={400} alt='Card Image'/>
            </figure>
            <figcaption className='text-typedBlue text-center lg:text-sm'>Kepala Departemen</figcaption>
        </div>
        <div className='flex flex-col flex-wrap w-full items-center gap-2'>
            <h4 className='nama flex items-center leading-6 text-base font-bold text-typedBlue text-center mb-4 h-[1rem] px-2'>{nama}</h4>
            <p className='text-[#6C6C6C]'>Informatika-2021</p>
            <figure>
                <a href="#">
                    <Image src={'/icons/vectorLinkedin.svg'} width={20} height={20} alt='Linkedin'/>
                </a>
            </figure>
        </div>
    </article>
  )
}
