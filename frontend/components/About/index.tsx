import React from 'react'
import Image from 'next/image'
import Jaring from '../Assets/Jaring'
import ButtonOutline from '../Assets/ButtonOutline'
export default function index() {
  return (
    <section className='h-fit lg:h-screen box-border justify-between pl-0 lg:pl-20 mt-[13vh] '>
        <div>
            <h3 className='text-3xl font-bold submenu pr-[10rem] w-fit after:top-[50%] after:right-20 after:w-[56px]'>Kenalan Yuk! </h3>
                <div className="text-3xl relative z-6 tracking-wide font-black text-outline w-[15rem]">
                    Kabinet Aerial
                    <span className='text-3xl tracking-wide font-semibold text-white drop-shadow-cust-1 absolute left-1 top-[.2rem] mix-blend-multiply'>Kabinet Aerial</span>
                </div>
        </div>
        <div className='flex flex-col-reverse gap-[10rem] lg:gap-0 lg:flex-row'>
            <article className=' flex flex-col justify-center lg:justify-around pb-14 w-full lg:w-[60%] box-border'>
                <article className='flex flex-wrap'>
                    <p className='text-sm text-justify leading-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil eos amet error aspernatur, aliquam autem facere consequatur esse fugiat suscipit numquam tempora blanditiis accusantium, id sed veritatis officia iste maiores ratione voluptatem cupiditate! Temporibus odio quasi, aliquid, molestias amet et ipsam ex excepturi, ipsa architecto fuga nisi pariatur facilis quo corporis labore libero quia. Tempora quam animi dolorem natus soluta itaque, tenetur architecto expedita magnam deleniti aperiam consectetur. Adipisci iste corrupti, suscipit aperiam molestias a sit nulla, hic aut reprehenderit alias temporibus odio laudantium! Facere nobis eaque quisquam? Corrupti dolor repellat id eius iusto molestiae, ut dolores voluptatum? Ad, autem qui aliquam sequi dolore provident ullam. Cupiditate odit praesentium recusandae est pariatur dolorum repellat debitis, harum facere expedita nihil non aliquid ex quas, consequatur deserunt numquam tempora eius quibusdam quos ullam reprehenderit laudantium voluptatum. Repudiandae cum voluptas ea totam accusantium incidunt, repellat doloremque! Aut, molestias ex! Ipsum consequatur dolorum illum accusantium at a alias eligendi porro amet voluptatem quaerat quos natus tempora tenetur voluptatibus quisquam, temporibus, quasi beatae obcaecati? Ipsa reiciendis quibusdam doloribus id modi, a deserunt quod velit voluptatum beatae eum officia placeat. Aut, perspiciatis! Nobis, ullam, veniam deleniti, facilis suscipit ut sed quaerat cumque dicta quos ab quam!</p>
                </article>
                <section className='w-fit mt-10 lg:mt-0 m-auto lg:m-0'>
                    <ButtonOutline content={'Lihat Selengkapnya'}/>
                </section>
            </article>
            <aside className=' relative mt-[8rem] lg:mt-0 lg:-top-[4rem] w-full h-fit lg:h-fit lg:w-[40%] flex justify-center lg:justify-end'>
                <div className='absolute w-[8rem] h-[8rem] -top-[7rem]  lg:-top-5 lg:left-[1.5rem] lg:w-fit lg:h-fit animate-spin-cust'>
                    <Image src='/vector/vector.svg' width={200} height={200} alt='Kabinet Aerial'/>
                </div>
                <div className='w-[8rem] h-[8rem] -mt-10 ml-3 lg:ml-0 lg:mt-0 lg:w-fit lg:h-fit'>
                    <Image src='/logo/kabinetArial.svg' width={300} height={600} alt='Kabinet Aerial' />
                </div>
            </aside>
        </div>

    </section>
  )
}
