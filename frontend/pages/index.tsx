import React from 'react'
import { Navbar } from '../components/Navbar'
import About from '../components/About/home'
import type {
    GetServerSideProps,
    InferGetServerSidePropsType,
    NextPage,
  } from "next";
import { DetailBerita } from "../constants/types";
import {  HomepageContent } from "../constants/types";
import { API_URL } from "../constants";
import News from '../components/News'
import Jumbotron from '../components/Jumbotron'
import Sambutan from '../components/Sambutan'
import { DocumentHead } from '../components/DocumentHead'
import { useSelector, useDispatch } from 'react-redux'
import { setStatePageVisit } from '../store/pageVisitSlices'

const Index : NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (props) => {
  const { HomepageContent, listBerita, namaKabinet} = props
  const dispatch = useDispatch()
  dispatch(setStatePageVisit({page:'Homepage'}))

  return (
      <section className='w-screen box-border min-w-[360px]'>
          <section className='px-10'> 
              <Jumbotron namaKabinet={namaKabinet} />
              <Sambutan />
              <About HomepageContent={HomepageContent} />
              <News listBerita={listBerita}/>
          </section>
      </section>
  )
}
type ServerSideData = {
    HomepageContent:  HomepageContent,
    listBerita: DetailBerita[],
    namaKabinet:string
  };

export const getServerSideProps: GetServerSideProps<ServerSideData> =
  async () => {
    // const [beritaList, beritaCount] = await Promise.all([
    //   await (
    //     await fetch(
    //       `${API_URL}/beritas?_sort=created_at:DESC&_start=0&_limit=6`
    //     )
    //   ).json(),
    //   await (await fetch(`${API_URL}/beritas/count`)).json(),
    // ]);
    const homepageContent = await (await fetch(`${API_URL}/homepage`)).json()
    const kabinet = await (await fetch(`${API_URL}/nama-kabinet`)).json()
    const beritaList = await (await fetch(`${API_URL}/beritas?_sort=created_at:DESC&_start=0&_limit=3`)).json()

    const {nama:namaKabinet} = kabinet

    return {
      props: {
        HomepageContent:homepageContent,
        listBerita: beritaList,
        namaKabinet
      },
    };
  };

export default Index