import React from 'react'
import Image from 'next/image'
export default function Index() {
  return (
    <section className='flex flex-col justify-center gap-10 lg:gap-16 h-fit md:px-8 lg:h-[100vh] lg:w-full box-border'>
        <article className='flex flex-col md:flex-row items-center gap-10'>
            <figure className='sm:flex sm:justify-center md:w-[25%] md:h-fit '>
                <Image src='/icons/visi.png' width={150} height={150} alt='Visi'/>
            </figure>
            <section className='flex flex-col flex-wrap gap-5 md:w-[75%]'>
                <h3 className='font-bold text-2xl text-center md:text-start text-typedBlue tracking-wider'>Visi</h3>
                <p className='text-justify lg:tracking-wide lg:leading-7'>{'Mewujudkan BEM Fakultas Ilmu Komputer yang Inovatif dan kolaboratif dengan civitas akademika dan organisasi mahasiswa di UPN "Veteran" Jawa Timur terutama di lingkungan Fakultas Ilmu Komputer yang berlandaskan Tri Dharm Perguruan Tinggi'}</p>
            </section>
        </article>
        <article className='flex flex-col md:flex-row-reverse  items-center gap-10'>
            <figure className='sm:flex sm:justify-center md:w-[25%] md:h-fit'>
                <Image src='/icons/misi.png' width={150} height={150} alt='Visi'/>
            </figure>
            <section className='flex flex-col flex-wrap gap-5 md:w-[75%]'>
                <h3 className='font-bold text-2xl text-center md:text-end text-typedBlue tracking-wider'>Misi</h3>
                <p className='text-justify lg:tracking-wide lg:leading-7'>{'Mewujudkan BEM Fakultas Ilmu Komputer yang Inovatif dan kolaboratif dengan civitas akademika dan organisasi mahasiswa di UPN "Veteran" Jawa Timur terutama di lingkungan Fakultas Ilmu Komputer yang berlandaskan Tri Dharm Perguruan Tinggi'}</p>
            </section>
        </article>
    </section>
  )
}
