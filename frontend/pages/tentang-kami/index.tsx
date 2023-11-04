import React,{useEffect} from 'react'
import VisiMisi from '../../components/visi-misi'
import FilosofiLogo from '../../components/FilosofiLogo'
import About from '../../components/About/tentang-kami'
import { useDispatch } from 'react-redux'
import { setStatePageVisit } from '../../store/pageVisitSlices'
export default function Index() {
  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(setStatePageVisit({page:'tentang-kami'}))
  },[dispatch])
  return (
    <section className='px-10 relative'>
        <About />
        <VisiMisi />
        <FilosofiLogo />
    </section>
  )
}
