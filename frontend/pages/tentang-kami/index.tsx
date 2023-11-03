import React from 'react'
import VisiMisi from '../../components/visi-misi'
import FilosofiLogo from '../../components/FilosofiLogo'
import About from '../../components/About/tentang-kami'
import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { API_URL } from '../../constants';
import { Misi } from '../../constants/types';

const TentangKami: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {

  const {namaKabinet,logo,aboutContent,visi, misi, filosofiLogo}= props
  return (
    <section className='px-10 relative'>
        <About namaKabinet={namaKabinet} logo={logo} content={
          aboutContent
           } />
        <VisiMisi visi={visi} misi={misi}/>
        <FilosofiLogo  url={filosofiLogo}/>
    </section>
  )
}

interface ServerSideData{
  namaKabinet : string,
  logo: string,
  aboutContent:string,
  visi:string,
  misi:Misi[],
  filosofiLogo:string
}

export const getServerSideProps: GetServerSideProps<ServerSideData> = async (
  ) => {
    const namaKabinet = await (await fetch(`${API_URL}/nama-kabinet`)).json();
    const logo = await (await fetch(`${API_URL}/logo`)).json();
    const aboutContent = await (await fetch(`${API_URL}/about-content`)).json();
    const visi = await (await fetch(`${API_URL}/visi`)).json();
    const misi = await (await fetch(`${API_URL}/misis`)).json();
    const filosofiLogo = await (await fetch(`${API_URL}/filosofi-logo`)).json();
    return{
      props:{
        namaKabinet:namaKabinet.nama,
        logo:logo.logo.url,
        aboutContent:aboutContent.content,
        visi:visi.teks,
        misi:misi,
        filosofiLogo:filosofiLogo.url.formats.medium.url
      }
    }

  }


export default TentangKami