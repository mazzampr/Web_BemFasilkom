import React, {useEffect} from 'react'
import Image from 'next/image'
import Carousel from 'react-multi-carousel'
import Struktur from '../../components/Assets/StrukturOrganisasi'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styles from '../../styles/Home.module.css'
import Card from '../../components/strukturOrganisasi/cardAnggota'
import Proker from '../../components/Assets/Proker'
export default function Index() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
    useEffect(() => {
        // You can access the window object inside the useEffect hook
        let width = window.innerWidth;
        console.log(width);
      }, []);
  return (
    <section className='mt-[13vh] py-3'>
        <section className='w-full h-fit'>
            <section className='px-10 flex flex-col items-center justify-center md:flex-row md:justify-between w-full h-fit gap-5'>
                <div className='hidden md:block md:relative w-[8rem] h-[8rem] md:top-10  animate-spin-cust '>
                    <Image src='/vector/vector.svg' width={200} height={200} alt='Kabinet Aerial'/>
                </div>
                <div className='text-center'>
                    <h3 className='text-2xl lg:text-3xl font-bold submenu w-fit'>Struktur Organisasi</h3>
                    <h4 className='text-lg lg:text-2xl tracking-wide font-black text-outline'>Kabinet Aerial</h4>
                </div>
                <div className='flex justify-center h-[20vh] w- sm:h-[30vh] md:h-[7rem] md:relative md:top-10 lg:right-10'>
                    <Image src='/logo/kabinetArial.svg' width={150} height={150} alt='Kabinet Aerial' />
                </div>
            </section>
            <section className='relative flex justify-start lg:justify-center items-start flex-wrap px-3 md:px-7 w-full h-fit border-box '>
                <Image src='/structure/strukturOrganisasi.svg' width={1000} height={500} alt='Struktur Organisasi' />
                <div className='absolute z-100 -bottom-20 lg:left-3'>
                    <Image src={'/vector/infinity.png'} width={150} height={150} alt='infinity'></Image>
                </div>
            </section>
        </section>
        <section className=' flex flex-col gap-5 px-3 sm:px-10'>
            <div className='flex flex-col gap-1'>
                <h5 className='text-lg leading-none sm:text-xl md:text-2xl lg:text-3xl font-bold submenu w-fit pr-2 border-r-2 border-tangerine h-fit'>Fungsionaris</h5>
                <h6 className='text-xs sm:text-sm md:text-base md:leading-3 lg:text-2xl font-black text-outline'>BEM FASILKOM 2023</h6>
            </div>
            <div className='w-full h-fit overflow-hidden'>
                <Tabs>
                    <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                        <Tab>Title 3</Tab>
                        <Tab>Title 4</Tab>
                        <Tab>Title 4</Tab>
                        <Tab>Title 4</Tab>
                        {/* <Carousel responsive={responsive}>
                        </Carousel> */}
                    </TabList>
                    <div className='flex flex-col items-center bg-[#EFEFEF] w-full h-fit px-3 py-10 pb-[7rem]'>
                        <TabPanel>
                            <h4 className='text-2xl text-center font-bold text-typedBlue mb-10'>Departemen Pengembangan Sumber Daya Mahasiswa</h4>
                            <div className='flex flex-col min-[730px]:flex-row lg:flex-row gap-4 w-full justify-center items-center'>
                                <Card />
                                <Card />
                            </div>
                            <div className='w-full h-fit flex flex-col lg:mt-10 lg:flex-row'>
                                <div className='flex flex-col w-full h-fit items-center justify-center mt-10'>
                                    <div className='w-full h-fit flex flex-col items-center gap-7'>
                                        <h6 className='text-2xl text-typedBlue font-bold'>Tupoksi</h6>
                                        <div className='px-5'>
                                            <ul className='list-disc'>
                                                <li className='lg:text-sm'>Menjadi wadah bagi KM Fasilkom dalam mengembangkan Keterampilan dan pengetahuan dalam bidang penelitian dan pengembangan</li>
                                                <li className='lg:text-sm'>Menjadi wadah bagi KM Fasilkom dalam mengembangkan Keterampilan dan pengetahuan dalam bidang penelitian dan pengembangan</li>
                                                <li className='lg:text-sm'>Menjadi wadah bagi KM Fasilkom dalam mengembangkan Keterampilan dan pengetahuan dalam bidang penelitian dan pengembangan</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col w-full h-fit items-center justify-center mt-10'>
                                    <div className='w-full h-fit flex flex-col items-center gap-7'>
                                        <h6 className='text-2xl text-typedBlue font-bold'>Proker</h6>
                                        <div className='h-fit w-full flex justify-around gap-3 flex-wrap box-border'>
                                            <Proker prokerName='Abdi Desa'/>
                                            <Proker prokerName='Abdi Desa'/>
                                            <Proker prokerName='Abdi Desa'/>
                                            <Proker prokerName='Abdi Desa'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h4 className='text-2xl text-center font-bold text-typedBlue mb-10'>Departemen Pengembangan Sumber Daya Mahasiswa</h4>
                            <div className='flex flex-col min-[730px]:flex-row lg:flex-row gap-4 w-full justify-center items-center'>
                                <Card />
                                <Card />
                            </div>
                            <div className='w-full h-fit flex flex-col lg:mt-10 lg:flex-row'>
                                <div className='flex flex-col w-full h-fit items-center justify-center mt-10'>
                                    <div className='w-full h-fit flex flex-col items-center gap-7'>
                                        <h6 className='text-2xl text-typedBlue font-bold'>Tupoksi</h6>
                                        <div className='px-5'>
                                            <ul className='list-disc'>
                                                <li className='lg:text-sm'>Menjadi wadah bagi KM Fasilkom dalam mengembangkan Keterampilan dan pengetahuan dalam bidang penelitian dan pengembangan</li>
                                                <li className='lg:text-sm'>Menjadi wadah bagi KM Fasilkom dalam mengembangkan Keterampilan dan pengetahuan dalam bidang penelitian dan pengembangan</li>
                                                <li className='lg:text-sm'>Menjadi wadah bagi KM Fasilkom dalam mengembangkan Keterampilan dan pengetahuan dalam bidang penelitian dan pengembangan</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col w-full h-fit items-center justify-center mt-10'>
                                    <div className='w-full h-fit flex flex-col items-center gap-7'>
                                        <h6 className='text-2xl text-typedBlue font-bold'>Proker</h6>
                                        <div className='h-fit w-full flex justify-around gap-3 flex-wrap box-border'>
                                            <Proker prokerName='Abdi Desa'/>
                                            <Proker prokerName='Abdi Desa'/>
                                            <Proker prokerName='Abdi Desa'/>
                                            <Proker prokerName='Abdi Desa'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h4 className='text-2xl text-center font-bold text-typedBlue mb-10'>Departemen Pengembangan Sumber Daya Mahasiswa</h4>
                            <div className='flex flex-col min-[730px]:flex-row lg:flex-row gap-4 w-full justify-center items-center'>
                                <Card />
                                <Card />
                            </div>
                            <div className='w-full h-fit flex flex-col lg:mt-10 lg:flex-row'>
                                <div className='flex flex-col w-full h-fit items-center justify-center mt-10'>
                                    <div className='w-full h-fit flex flex-col items-center gap-7'>
                                        <h6 className='text-2xl text-typedBlue font-bold'>Tupoksi</h6>
                                        <div className='px-5'>
                                            <ul className='list-disc'>
                                                <li className='lg:text-sm'>Menjadi wadah bagi KM Fasilkom dalam mengembangkan Keterampilan dan pengetahuan dalam bidang penelitian dan pengembangan</li>
                                                <li className='lg:text-sm'>Menjadi wadah bagi KM Fasilkom dalam mengembangkan Keterampilan dan pengetahuan dalam bidang penelitian dan pengembangan</li>
                                                <li className='lg:text-sm'>Menjadi wadah bagi KM Fasilkom dalam mengembangkan Keterampilan dan pengetahuan dalam bidang penelitian dan pengembangan</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col w-full h-fit items-center justify-center mt-10'>
                                    <div className='w-full h-fit flex flex-col items-center gap-7'>
                                        <h6 className='text-2xl text-typedBlue font-bold'>Proker</h6>
                                        <div className='h-fit w-full flex justify-around gap-3 flex-wrap box-border'>
                                            <Proker prokerName='Abdi Desa'/>
                                            <Proker prokerName='Abdi Desa'/>
                                            <Proker prokerName='Abdi Desa'/>
                                            <Proker prokerName='Abdi Desa'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <h4 className='text-2xl text-center font-bold text-typedBlue mb-10'>Departemen Pengembangan Sumber Daya Mahasiswa</h4>
                            <div className='flex flex-col min-[730px]:flex-row lg:flex-row gap-4 w-full justify-center items-center'>
                                <Card />
                                <Card />
                            </div>
                            <div className='w-full h-fit flex flex-col lg:mt-10 lg:flex-row'>
                                <div className='flex flex-col w-full h-fit items-center justify-center mt-10'>
                                    <div className='w-full h-fit flex flex-col items-center gap-7'>
                                        <h6 className='text-2xl text-typedBlue font-bold'>Tupoksi</h6>
                                        <div className='px-5'>
                                            <ul className='list-disc'>
                                                <li className='lg:text-sm'>Menjadi wadah bagi KM Fasilkom dalam mengembangkan Keterampilan dan pengetahuan dalam bidang penelitian dan pengembangan</li>
                                                <li className='lg:text-sm'>Menjadi wadah bagi KM Fasilkom dalam mengembangkan Keterampilan dan pengetahuan dalam bidang penelitian dan pengembangan</li>
                                                <li className='lg:text-sm'>Menjadi wadah bagi KM Fasilkom dalam mengembangkan Keterampilan dan pengetahuan dalam bidang penelitian dan pengembangan</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col w-full h-fit items-center justify-center mt-10'>
                                    <div className='w-full h-fit flex flex-col items-center gap-7'>
                                        <h6 className='text-2xl text-typedBlue font-bold'>Proker</h6>
                                        <div className='h-fit w-full flex justify-around gap-3 flex-wrap box-border'>
                                            <Proker prokerName='Abdi Desa'/>
                                            <Proker prokerName='Abdi Desa'/>
                                            <Proker prokerName='Abdi Desa'/>
                                            <Proker prokerName='Abdi Desa'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                    </div>
                </Tabs>
            </div>
        </section>
    </section>
  )
}
