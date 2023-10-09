import React from 'react'
import Image from 'next/image'
import Jaring from '../Assets/Jaring'
import ButtonOutline from '../Assets/ButtonOutline'
export default function index() {
  return (
    <section className='h-screen box-border flex justify-between pl-12 mt-[13vh] '>
        <article className='flex flex-col justify-around pb-14 w-[60%] box-border'>
            <div>
                <h3 className='text-3xl font-bold submenu pr-[10rem] w-fit after:top-[50%] after:right-20 after:w-[56px]'>Kenalan Yuk! </h3>
                    <div className="text-3xl relative z-6 tracking-wide font-bold text-outline w-[15rem]">
                        Kabinet Aerial
                        <span className='text-3xl tracking-wide font-bold text-white drop-shadow-cust-1 absolute left-1 top-[.2rem] mix-blend-multiply'>Kabinet Aerial</span>
                    </div>
            </div>
            <article className=''>
                <p className='text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, veritatis. Cum iusto consectetur sequi saepe id ut laborum molestias temporibus?</p>
                <br />
                <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil odio nostrum nam dignissimos similique nesciunt eaque vitae incidunt praesentium. Ab voluptatum possimus dolore repellat officia iure eaque dolorum, autem, doloremque ipsa veniam unde quo maxime id soluta, voluptas nam a.</p>
                <br />
                <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda sint nostrum ut placeat illum quisquam omnis facere at cum error minima eaque porro officiis, ex molestias vero id. Corrupti maxime ut tenetur facilis repellendus! Corrupti quo eligendi dignissimos aperiam. Rerum perspiciatis libero necessitatibus suscipit ipsam placeat inventore! Magnam, aliquam voluptates?</p>
            </article>
            <section className='w-fit '>
                <ButtonOutline content={'Lihat Selengkapnya'}/>
            </section>
        </article>
        <aside className='relative w-[40%] flex justify-center'>
            <div className='absolute top-0 left-0'>
                <Jaring/>
            </div>
            <Image src='/logo/kabinetArial.svg' width={300} height={600} alt='Kabinet Aerial' />
        </aside>

    </section>
  )
}
