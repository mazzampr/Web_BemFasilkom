import React from 'react'
import Image from 'next/image'
import type {
    GetServerSideProps,
    InferGetServerSidePropsType,
    NextPage,
  } from "next";
import {  HomepageContent } from "../../../constants/types";

import { API_URL } from "../../../constants";
import ButtonOutline from '../../Assets/ButtonOutline'
export default function Index({HomepageContent}: {HomepageContent: HomepageContent}) {
    const {subtitle_utama , tentang_bem_fasilkom}= HomepageContent

  return (
    <section className='h-fit lg:h-screen box-border justify-between pl-0 lg:pl-20 mt-[13vh] '>
        <div>
            <h3 className='text-3xl font-bold submenu pr-[10rem] w-fit after:top-[50%] after:right-20 after:w-[56px]'>Kenalan Yuk! </h3>
                <div className="text-3xl relative z-6 tracking-wide font-black text-outline w-[15rem]">
                    Kabinet Aerial
                </div>
        </div>
        <div className='flex flex-col-reverse gap-[10rem] lg:gap-0 lg:flex-row'>
            <article className=' flex flex-col justify-center lg:justify-around pb-14 w-full lg:w-[60%] box-border'>
                <article className='flex flex-wrap'>
                    <p className='text-sm text-justify leading-5'>{tentang_bem_fasilkom}</p>
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


