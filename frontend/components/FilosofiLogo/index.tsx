import React from 'react'
import Image from 'next/image'
export default function Index() {
  return (
    <section className='mt-[13vh] flex flex-col gap-10 h-fit w-full box-border '>
        <section className='w-full text-center'>
            <h3 className='m-auto font-bold text-typedBlue text-3xl submenu w-fit after:-bottom-2 after:right-[calc(100%/5)] after:w-[115px]'>Filosofi Logo</h3>
        </section>
        <section className='w-full flex justify-center items-center box-border'>
            <Image src='/logo/filosofiLogo.png' width={800} height={800} alt='Filosofi Logo' quality={100}/>
        </section>
    </section>
  )
}
