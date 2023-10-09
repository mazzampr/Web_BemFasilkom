import { useRouter } from "next/router";
import Image from 'next/image'
import styles from "./Footer.module.scss";
import LogoKuda from "../Assets/LogoKuda";
export const Footer = () => {
  const router = useRouter();

  return (
    <footer className='w-full px-10 pt-16 flex flex-col justify-center  bg-peach'>
      <section className="w-full h-full pb-4 flex justify-between border-b-2 border-black">
        <article className='w-[26%] flex flex-col items-center justify-center gap-8 mb-8 '>
          <div className="flex justify-between">
            <Image src={'/logo/kabinetArial.svg'} width={100} height={100} alt='KabinetAerial'/>
            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <Image src={'/logo/UPN.svg'} width={40} height={40} alt={'UPN "Veteran" Jawa Timur '}/>
                <Image src={'/logo/BEM_FASILKOM.svg'} width={40} height={40} alt={'UPN "Veteran" Jawa Timur '}/>
                <Image src={'/logo/KM.svg'} width={40} height={40} alt={'UPN "Veteran" Jawa Timur '}/>
              </div>
              <div>
                <p className="font-semibold">BEM FASILKOM 2023</p>
                <span>{'UPN "VETERAN" Jawa Timur'}</span>
              </div>
            </div>
          </div>
          <p className="mr-14 font-bold tracking-wide">{'"Satu Fasilkom, Kita Kuat!"'}</p>
        </article>
        <article className="flex w-[45%] flex-col items-center gap-4">
          <h5 className="text-2xl font-black">Sekretariat</h5>
          <p className="flex flex-wrap text-center w-[90%]">{'Gedung Giri Santika UPN "Veteran" Jawa Timur.Gn. Anyar, Kec. Gn. Anyar, Surabaya, Jawa Timur 60294'}</p>
          <iframe className=' border-2 border-black' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1978.5859369772957!2d112.7869155383215!3d-7.334585998168465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fab8189e09c1%3A0xe23a95446109db9!2sGedung%20Giri%20Santika%20UPN%20Veteran%20Jawa%20Timur!5e0!3m2!1sid!2sid!4v1696789341476!5m2!1sid!2sid" 
          width="450" height="300" allowFullScreen={true} loading="lazy" 
          referrerpolicy="no-referrer-when-downgrade"></iframe>        
        </article>
        <article className="w-[25%]">
          <h5 className="text-2xl font-black">Follow Us!</h5>
          <div className="mt-5 flex flex-col gap-3">
            <a className="group flex items-center gap-4" href="#">
              <Image className='group-hover:animate-bounce' src={'/icons/VectorInstagram.svg'} width={20} height={40} alt={'UPN "Veteran" Jawa Timur '}/>
              <p className="group-hover:text-typedBlue">@bemfasilkom.upnjatim</p>
            </a>
            <a className="group flex items-center gap-4" href="#">
              <Image className='group-hover:animate-bounce' src={'/icons/vectorLinkedin.svg'} width={20} height={40} alt={'UPN "Veteran" Jawa Timur '}/>
              <p className="group-hover:text-typedBlue">@bemfasilkom.upnjatim</p>
            </a>
            <a className="group flex items-center gap-4" href="#">
              <Image className='group-hover:animate-bounce' src={'/icons/VectorTiktok.svg'} width={20} height={40} alt={'UPN "Veteran" Jawa Timur '}/>
              <p className="group-hover:text-typedBlue">@bemfasilkom_upnvjt</p>
            </a>
            <a className="group flex items-center gap-4" href="#">
              <Image className='group-hover:animate-bounce' src={'/icons/vectorEmail.svg'} width={20} height={40} alt={'UPN "Veteran" Jawa Timur '}/>
              <p className="group-hover:text-typedBlue">bemfasilkomupnvjt@gmail.com</p>
            </a>
          </div>

        </article>
      </section>
      <div className="flex items-center justify-center p-2">
        <p>© 2023 All rights reserved, Bidang Penelitian dan Pengembangan BEM FASILKOM UPN “Veteran” Jawa Timur</p>
      </div>
    </footer>
  );
};
