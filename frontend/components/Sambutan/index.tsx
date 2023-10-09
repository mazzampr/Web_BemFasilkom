import React from 'react'
import Image from 'next/image'
export default function index() {
  return (
    <section className='mt-[13vh] h-screen flex py-4 justify-between box-border px-10'>
        <section className='flex justify-center h-full w-[30%] '>
            <section className='w-fit h-full flex flex-col items-center justify-between '>
                <figure className='w-fit h-fit flex flex-col items-center'>
                    <Image className='rounded-full overflow-hidden' src={'/cover.png'} width={200} height={200} alt='avatar'/>
                    <figcaption className='text-center mt-2'>
                        <p className='text-xl'>Daud Arya Putra</p>
                        <p className='text-xl font-bold text-typedBlue'>Ketua Bem</p>
                    </figcaption>
                </figure>
                <figure className='w-fit h-fit flex flex-col items-center'>
                    <Image className='rounded-full overflow-hidden mb-1' src={'/cover.png'} width={200} height={200} alt='avatar'/>
                    <figcaption className='text-center mt-2'>
                        <p className='text-xl'>Fatma Ratnaja</p>
                        <p className='text-xl font-bold text-typedBlue'>Wakil Ketua Bem</p>
                    </figcaption>
                </figure>
            </section>
        </section>

        <section className='h-full w-[60%] box-border flex '>
            <section className='h-full w-fit flex flex-col flex-wrap gap-12 box-border text-justify px-6 '>
                <div>
                    <h2 className=' text-9xl tracking-[.9rem] font-semibold drop-shadow-cust-1 text-white  '>PERSEPSI</h2>
                    <span className='text-2xl tracking-[.23rem] font-semibold text-typedBlue'>Ketua & Wakil Badan Eksekutif Mahasiswa</span>
                </div>
                <div className='flex flex-col flex-wrap'>
                    <p className='text-sm'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam laudantium fuga aliquam officia quia dolorum.</p>
                    <p className='text-sm '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit minus inventore rerum explicabo at nulla, eos enim, veritatis rem, ipsum sequi illo incidunt laudantium placeat et doloribus ipsam eligendi! Et.</p>
                    <br />
                    <p className='text-sm '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt repellendus reiciendis aut, unde itaque numquam ad. Saepe, soluta quae corrupti repellat quos illum harum eius voluptatibus cupiditate. Minus, provident excepturi.</p>
                    <br />
                    <p className='text-sm '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt repellendus reiciendis aut, unde itaque numquam ad. Saepe, soluta quae corrupti repellat quos illum harum eius voluptatibus cupiditate. Minus, provident excepturi.</p>
                    <p className='text-sm '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt repellendus reiciendis aut, unde itaque numquam ad. Saepe, soluta quae corrupti repellat quos illum harum eius voluptatibus cupiditate. Minus, provident excepturi.</p>
                </div>
            </section>
        </section>
    </section>
  )
}
