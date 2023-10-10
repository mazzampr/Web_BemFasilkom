import React from 'react'
import CardNews from './CardNews'
import ButtonOutline from '../Assets/ButtonOutline'
export default function index() {
  return (
    <section className='mt-[13vh] w-full h-fit lg:h-screen box-border'>
        <h3 className="text-center m-auto font-bold text-typedBlue text-3xl submenu w-fit after:-bottom-2 after:right-[calc(100%/4)] after:w-[115px]">Fasilkom News</h3>
        <article className='flex flex-row flex-wrap gap-2 justify-around lg:flex-row lg:ml-0 lg:items-center w-full h-fit mt-[2rem] mb-5 lg:h-[80%] lg:mb-0'>
          <CardNews />
          <CardNews />
          <CardNews />
        </article>
        <div className='w-fit m-auto'>
          <ButtonOutline content='Lihat Selengkapnya' />
        </div>
        {/* <div className="group bg-gradient-cust-orange2 rounded-[10px] p-[.1rem] w-fit m-auto ">
            <a className="group group-hover:bg-gradient-to-r from-[#FA6D01] to-[#FA870199] via-yellow-500 relative overflow-hidden md:w-full lg:w-[13rem] flex justify-center py-[.35rem] font-medium 
                        text-sm rounded-[9px] bg-white cursor-pointer">
                <p className="pr-4 pl-3">Lihat Selengkapnya</p>
                <div>
                    <svg viewBox="0 0 46 16" height="7" width="25" xmlns="http://www.w3.org/2000/svg" id="arrow-horizontal" className="-translate-x-1 fill-slate-700 mt-2 transition-all duration-300 group-hover:translate-x-[.2rem] group-hover:scale-x-95"><path transform="translate(30)" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" data-name="Path 10" id="Path_10"></path></svg>
                </div>
            </a>
        </div> */}
    </section>
  )
}
