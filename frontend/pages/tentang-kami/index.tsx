import React from 'react'
import VisiMisi from '../../components/visi-misi'
import FilosofiLogo from '../../components/FilosofiLogo'
import About from '../../components/About/tentang-kami'
export default function Index() {
  return (
    <section className='px-10 relative'>
        <About />
        <VisiMisi />
        <FilosofiLogo />
    </section>
  )
}
