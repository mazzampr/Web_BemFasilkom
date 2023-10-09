import React from 'react'
import Image from 'next/image'
import Calendar from '../Assets/Calendar'
import Avatar from '../Assets/Avatar'
export default function CardNews() {
  return (
    <a href={'#'} className='group cursor-pointer bg-gradient-cust-orange2 hover:bg-none rounded-[10px] p-[.1rem] w-fit m-auto'>
      <article className='w-[20rem] rounded-[8px] p-3 pb-8 bg-white hover:bg-pastel '>
        <Image className='rounded-xl' src='/cover.png' width={300} height={180} alt='News'/>
        <section className='px-2'>
          <section className='flex justify-between items-center'>
            <div className='flex items-center gap-2'>
              <Calendar />
              <p className='text-xs'>May 3, 2023</p>
            </div>
            <div className='flex items-center gap-2'>
              <Avatar />
              <p className='text-xs'>Admin</p>
            </div>
          </section>
          <section className='mt-4'>
            <h4 className='text-typedBlue text-lg font-bold'>Judul Berita</h4>
            <p className='text-md  text-justify mt-3'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, non dignissimos tempore veniam quisquam iste.</p>
          </section>
        </section>
      </article>
    </a>
  )
}
