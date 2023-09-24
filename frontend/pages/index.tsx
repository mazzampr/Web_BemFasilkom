import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Image from "next/image";
import { API_URL } from "../constants";
import {
  Berita,
  DetailBerita,
  HomepageContent,
  LayananKami,
  Proker,
  SocialMedia,
} from "../constants/types";
import styles from "../styles/Home.module.scss";
import Link from "next/link";
import { useDarkNavLinks } from "../hooks/useDarkNavLinks";
import * as dateFns from "date-fns";
import { DocumentHead } from "../components/DocumentHead";

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props
) => {
  const {
    prokerList,
    beritaList,
    socialMediaList,
    homepageContents,
    layananKamiList,
  } = props;
  useDarkNavLinks();

  return (
    <>
      <DocumentHead />
      <div>
        <header className={styles.jumbotron}>
          <div>
            <h1 className={styles.jumbotron_title}>
              <span className={styles.bem_title_text}>BEM</span>{" "}
              <span className={styles.color_main}>Fakultas Ilmu Komputer</span>.
            </h1>
            <p className={styles.jumbotron_desc}>UPN Veteran Jawa Timur</p>

            <p className={styles.jumbotron_content}>
              {homepageContents.subtitle_utama}
            </p>
          </div>
          <div className={styles.hero_container}>
            <div className={styles.hero_1}></div>
          </div>
        </header>

        <section className={styles.services_section}>
          <img
            src="/rounded-decorator.svg"
            alt=""
            className={styles.services_section_top_decorator}
          />
          <img
            src="/dots-decorator.svg"
            alt=""
            className={styles.services_section_bottom_decorator}
          />
          <h2 className={styles.services_section_title}>
            <span>Layanan</span> Kami
          </h2>

          <div className={styles.services_icons}>
            {layananKamiList?.map((layanan, idx) => {
              return (
                <Link key={idx} href={layanan.link}>
                  <a className={styles.service_item_container}>
                    <div className={styles.service_icon_container}>
                      <Image
                        alt=""
                        src={`${API_URL}${layanan.icon.url}`}
                        className={styles.service_icon}
                        width="40"
                        height="40"
                      />
                    </div>
                    <p className={styles.service_icon_text}>{layanan.nama}</p>
                  </a>
                </Link>
              );
            })}
          </div>
        </section>

        <section className={styles.news_section}>
          <h2 className={styles.news_section_title}>Fasilkom News</h2>
          <div className={styles["section-title-underline"]}></div>

          <div className={styles.latest_news_container}>
            {beritaList.slice(0, 3).map((berita, idx) => {
              return (
                <Link key={idx} href={`/berita/${berita.id}`}>
                  <a className={styles.news_card}>
                    <div className={styles.news_thumbnail}>
                      <img src={`${API_URL}${berita.cover.url}`} alt="berita" />
                    </div>
                    <h3 className={styles.news_title}>{berita.judul}</h3>
                    <p className={styles.news_date}>
                      {`${berita.author.firstname} | ${dateFns.format(
                        new Date(berita.created_at),
                        "d MMMM yyyy"
                      )}`}
                    </p>
                    <p className={styles.news_desc}>
                      {berita.pratinjau.length > 200
                        ? berita.pratinjau.slice(0, 200) + "..."
                        : berita.pratinjau}
                    </p>
                  </a>
                </Link>
              );
            })}
          </div>

          {beritaList.length > 3 ? (
            <Link href="/berita">
              <a className={styles.news_load_more}>Lihat lebih banyak</a>
            </Link>
          ) : null}
        </section>

        <section className={styles.profile_section}>
          <h2 className={styles.profile_section_title}>
            <span>Tentang</span>
            <span>BEM Fasilkom</span>
            <span>.</span>
          </h2>
          <div className={styles.profile_desc_container}>
            <div className={styles.profile_desc}>
              <p>{homepageContents.tentang_bem_fasilkom}</p>
            </div>

            <img
              src="bem-fasilkom-logo.png"
              alt="Logo BEM Fasilkom UPN 'Veteran' Jawa Timur"
              className={styles.profile_image}
            />
          </div>
        </section>

        <img
          src="/top-wave.svg"
          alt=""
          style={{ transform: "translateY(10px)" }}
        />
        <section className={styles.programs_section}>
          <h2 className={styles.programs_section_title}>
            Program Kerja Kabinet
          </h2>
          <div className={styles.programs_list_container}>
            {prokerList.map((proker, idx) => {
              return (
                <a
                  key={proker.nama + idx}
                  href={proker.tautan}
                  className={styles.program_item}
                >
                  {proker.nama}
                </a>
              );
            })}
          </div>
        </section>
        <img
          src="/bottom-wave.svg"
          alt=""
          style={{ transform: "translateY(-2px)" }}
        />

        <section className={styles.contacts_section}>
          <h2 className={styles.contacts_section_title}>Kontak</h2>
          <div className={styles["section-title-underline"]}></div>
          <div className={styles.contacts_container}>
            {socialMediaList.map((socialMedia, idx) => {
              return (
                <div
                  key={socialMedia.nama + idx}
                  className={styles.contacts_item}
                >
                  <div className={styles.contact_icon}>
                    <img src={`${API_URL}${socialMedia.icon.url}`} alt="" />
                  </div>
                  <a href={socialMedia.link} className={styles.contact_text}>
                    {socialMedia.username}
                  </a>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

type ServerSideData = {
  prokerList: Proker[];
  beritaList: DetailBerita[];
  socialMediaList: SocialMedia[];
  homepageContents: HomepageContent;
  layananKamiList: LayananKami[];
};

export const getServerSideProps: GetServerSideProps<ServerSideData> =
  async () => {
    const [
      prokerList,
      beritaList,
      socialMediaList,
      homepageContents,
      layananKamiList,
    ] = await Promise.all([
      (await fetch(`${API_URL}/prokers`)).json(),
      (await fetch(`${API_URL}/beritas?_sort=created_at:DESC`)).json(),
      (await fetch(`${API_URL}/sosial-medias`)).json(),
      (await fetch(`${API_URL}/homepage`)).json(),
      (await fetch(`${API_URL}/layanan-kamis`)).json(),
    ]);

    return {
      props: {
        prokerList,
        beritaList,
        socialMediaList,
        homepageContents,
        layananKamiList,
      },
    };
  };

export default Home;
