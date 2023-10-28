import React from 'react'
import Image from 'next/image'
export default function cardAnggota() {
  return (
    <article className='flex flex-col gap-7 rounded-md w-[80%] min-[730px]:w-[40%]  lg:w-[30%]  h-fit border-2 bg-pastel pb-4'>
        <div className='w-full h-[40%] flex flex-col gap-2 items-center'>
            <figure className='w-full h-full'>
                <Image src='/image/cardImage.png' width={500} height={500} alt='Card Image'/>
            </figure>
            <figcaption className='text-typedBlue text-center'>Kepala Departemen</figcaption>
        </div>
        <div className='flex flex-wrap w-full justify-center'>
            <h4 className='text-lg font-bold text-typedBlue text-center lg:font-extrabold'>Muhammad Fauzan Novriandy</h4>
        </div>
        <div className='flex flex-col flex-wrap w-full items-center gap-2'>
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
