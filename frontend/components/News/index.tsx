import React from 'react'
import CardNews from './CardNews'
import ButtonOutline from '../Assets/ButtonOutline'
import { DocumentHead } from '../DocumentHead'
import { DetailBerita } from "../../constants/types";

export default function Index({listBerita}: {listBerita: DetailBerita[]}) {
  return (
    <section className='mt-[13vh] w-full h-fit lg:h-screen box-border'>
        <h3 className="text-center m-auto font-bold text-typedBlue text-3xl submenu w-fit after:-bottom-2 after:right-[calc(100%/4)] after:w-[115px]">Fasilkom News</h3>
        <article className='flex flex-row flex-wrap gap-2 justify-around lg:flex-row lg:ml-0 lg:items-center w-full h-fit mt-[2rem] mb-5 lg:h-[80%] lg:mb-0'>
          {listBerita.length > 0? 
            listBerita.map((berita, index) => (
              <CardNews key={index} berita={berita}/>
            ))
          : null}
        </article>
        <div className='w-fit m-auto'>
          <ButtonOutline content='Lihat Selengkapnya' />
        </div>
    </section>
  )
}
