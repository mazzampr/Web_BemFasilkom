import React,{useRef,useEffect} from 'react'
import Typed from 'typed.js'
import Image from 'next/image'
import Infinite from '../Assets/infinite'
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
    <section className='relative top-[13vh] h-[87vh] flex px-7'>
        <div className='absolute -left-10 -top-10 opacity-[.5] -rotate-9'>
            <Infinite />
        </div>
        <section className='relative  left-4 z-[4] w-[45%] h-full flex flex-col justify-center pb-2'>
            <span className='text-3xl font-bold text-typedBlue'>#Satu Fasilkom <span ref={ref} className='text-tangerine'></span></span>
            <div className='mt-10 flex flex-col gap-4'>
                <h1 className='text-6xl tracking-wide font-semibold drop-shadow-cust-1 text-white text-justify'>BEM FASILKOM</h1>
                <span className='text-4xl tracking-wide font-bold text-outline'>Kabinet Aerial</span>
            </div>
        </section>
        <section className='relative w-[55%] flex items-center justify-end'>
            <div className='absolute z-[4] left-0'>
                <CurlyArrow />
            </div>
            <Image src={'/image/jumbotron.svg'} width={600} height={600} alt='Fasilkom'/>
        </section>
    </section>
  )
}
