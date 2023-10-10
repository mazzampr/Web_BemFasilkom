import React,{useEffect, useRef} from 'react'
export default function Hamburger() {
    const refCheckbox = useRef(null)
    const refHamSvg = useRef(null)
    const refXmark = useRef(null)
    const refDiv = useRef(null)
    const checkHandler=()=>{
        if(refCheckbox.current.checked){
            refHamSvg.current.style.display='none'
            refXmark.current.style.display='flex'
            refDiv.current.style.backgroundColor='rgb(148 163 184)'

        }
        else{
            refHamSvg.current.style.display='flex'
            refXmark.current.style.display='none'
            refDiv.current.style.backgroundColor='transparent'

        }
    }
  return (
    <section ref={refDiv} className='relative box-border rounded-md hover:bg-slate-400 '>
        <input ref={refCheckbox} onChange={checkHandler} className='absolute  w-full h-full opacity-0 pointer-events-auto' type="checkbox"/>
        <div className='cursor-pointer flex w-fit h-full  lg:hidden rounded-md p-1'>
            <div className='w-full h-full'>
                <svg ref={refHamSvg} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" className="svg-inline--fa fa-bars h-6 w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path></svg>
                <svg ref={refXmark} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" className="svg-inline--fa fa-xmark h-6 w-6 hidden" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path></svg>
            </div>
        </div>
    </section>
  )
}
