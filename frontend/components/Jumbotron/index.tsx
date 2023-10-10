import React,{useRef,useEffect} from 'react'
import Typed from 'typed.js'
import Image from 'next/image'
import Infinite from '../Assets/Infinite'
import CurlyArrow from '../Assets/CurlyArrow'
export default function Index() {
    const ref = useRef(null)
    useEffect(() => {
        const typed = new Typed(ref.current, {
          strings: ['Kita Kuat &#128170;'], // Strings to display
          // Speed settings, try diffrent values untill you get good results
          startDelay: 300,
          typeSpeed: 100,
          backSpeed: 100,
          backDelay: 100,
          smartBackspace: true,
          loop: true,
          showCursor: true,
          cursorChar: "|"
        });
    
        // Destropying
        return () => {
          typed.destroy();
        };
      }, []);
  return (
    <section className='relative top-[13vh] h-[87vh] box-border flex flex-col-reverse lg:flex-row lg:px-7 pb-10 lg:pb-4'>
        <section className='relative lg:left-4 z-[4] w-full h-fit lg:w-[45%] lg:h-full flex flex-col justify-center items-center lg:items-start lg:pb-2'>
          <div className='absolute -left-24 -top-[13rem] lg:-top-10 opacity-[.5] -rotate-9'>
              <Infinite />
          </div>
            <span className='text-base mt-2 sm:text-3xl sm:mt-0 font-bold text-typedBlue'>#Satu Fasilkom <span ref={ref} className='text-tangerine'></span></span>
            <div className='mt-5 max-[370px]:mt-5 lg:mt-10 flex flex-col gap-4'>
                <h1 className='text-5xl text-center sm:text-justify sm:text-6xl tracking-wide font-semibold drop-shadow-cust-1 text-white '>BEM FASILKOM</h1>
                <span className='text-center text-2xl sm:text-3xl lg:text-start tracking-wide font-bold text-outline'>Kabinet Aerial</span>
            </div>
        </section>
        <section className='relative w-full h-fit top-[12vh] lg:top-0 lg:w-[55%] lg:h-full flex items-center justify-center lg:justify-end'>
            <div className='absolute z-[4] left-0'>
                <CurlyArrow />
            </div>
            <div className='relative z-[10] w-[20rem] lg:w-[35rem]'>
              <Image  src={'/image/jumbotron.svg'} width={600} height={600} alt='Fasilkom'/>
            </div>
        </section>
    </section>
  )
}
