import React from 'react'
import Image from 'next/image'
import Jaring from '../../Assets/Jaring'
import ButtonOutline from '../../Assets/ButtonOutline'
export default function index() {
  return (
    <section className='h-fit lg:h-screen box-border flex flex-col lg:gap-20 pl-0 lg:pl-[2.5rem] mt-[13vh]'>
        <div className='m-auto w-fit text-center'>
            <h3 className='text-2xl lg:text-3xl font-bold submenu w-fit'>Tentang Kami</h3>
            <h4 className='text-lg lg:text-2xl tracking-wide font-black text-outline'>Kabinet Aerial</h4>
        </div>
        <div className='absolute w-[8rem] h-[8rem] left-4 sm:left-14 lg:left-20 top-20 lg:top-10  animate-spin-cust '>
            <Image src='/vector/vector.svg' width={200} height={200} alt='Kabinet Aerial'/>
        </div>
        <div className='flex flex-col-reverse gap-[2rem] lg:gap-0 lg:flex-row'>
            <article className=' flex flex-col justify-center lg:justify-around pb-14 w-full lg:w-[60%] lg:pt-20 box-border'>
                <article className='flex flex-wrap'>
                    <p className='text-sm text-justify leading-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil eos amet error aspernatur, aliquam autem facere consequatur esse fugiat suscipit numquam tempora blanditiis accusantium, id sed veritatis officia iste maiores ratione voluptatem cupiditate! Temporibus odio quasi, aliquid, molestias amet et ipsam ex excepturi, ipsa architecto fuga nisi pariatur facilis quo corporis labore libero quia. Tempora quam animi dolorem natus soluta itaque, tenetur architecto expedita magnam deleniti aperiam consectetur. Adipisci iste corrupti, suscipit aperiam molestias a sit nulla, hic aut reprehenderit alias temporibus odio laudantium! Facere nobis eaque quisquam? Corrupti dolor repellat id eius iusto molestiae, ut dolores voluptatum? Ad, autem qui aliquam sequi dolore provident ullam. Cupiditate odit praesentium recusandae est pariatur dolorum repellat debitis, harum facere expedita nihil non aliquid ex quas, consequatur deserunt numquam tempora eius quibusdam quos ullam reprehenderit laudantium voluptatum. Repudiandae cum voluptas ea totam accusantium incidunt, repellat doloremque! Aut, molestias ex! Ipsum consequatur dolorum illum accusantium at a alias eligendi porro amet voluptatem quaerat quos natus tempora tenetur voluptatibus quisquam, temporibus, quasi beatae obcaecati? Ipsa reiciendis quibusdam doloribus id modi, a deserunt quod velit voluptatum beatae eum officia placeat. Aut, perspiciatis! Nobis, ullam, veniam deleniti, facilis suscipit ut sed quaerat cumque dicta quos ab quam!</p>
                </article>
            </article>
            <aside className=' relative mt-[8rem] lg:mt-0 flex flex-col gap-[3rem]  w-full h-fit lg:h- lg:w-[40%]'>
                <div className='w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] m-auto lg:w-[22rem] lg:h-[22rem] lg:relative flex justify-center'>
                    <Image src='/logo/kabinetArial.svg' width={300} height={600} alt='Kabinet Aerial' />
                </div>
                <div className='w-full flex flex-col items-center'>
                    <h3 className='text-lg font-bold submenu w-fit'>BEM FASILKOM UPNVJT</h3>
                    <h4 className='text-lg tracking-wide font-black text-outline'>Kabinet Aerial</h4>
                </div>  
            </aside>
        </div>

    </section>
  )
}
