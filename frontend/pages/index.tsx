import React from 'react'
import { Navbar } from '../components/Navbar'
import About from '../components/About/home'
import News from '../components/News'
import Jumbotron from '../components/Jumbotron'
import Sambutan from '../components/Sambutan'
import { Footer } from '../components/Footer'
import { DocumentHead } from '../components/DocumentHead'
export default function index() {
  return (
<<<<<<< HEAD
    <section className='w-screen box-border'>
        <section className='px-10 min-w-[360px]'> 
            <Jumbotron />
            <Sambutan />
            <About />
            <News/>
        </section>
    </section>
=======
      <section className='w-screen box-border'>
          <section className='px-10'> 
              <Jumbotron />
              <Sambutan />
              <About />
              <News/>
          </section>
      </section>
>>>>>>> 1db215ca06f3ecc3b3751dd677c45346eac6a31f
  )
}
