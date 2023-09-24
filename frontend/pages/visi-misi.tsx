import React, { useContext } from "react";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import styles from "../styles/VisiMisi.module.scss";
import { LogoKabinet, Misi, Visi } from "../constants/types";
import { API_URL } from "../constants";
import { useLightNavLinks } from "../hooks/useLightNavLinks";
import { DocumentHead } from "../components/DocumentHead";

const VisiMisi: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const { visi, misiList, logoKabinetList, namaKabinet } = props;
  useLightNavLinks();

  return (
    <>
      <DocumentHead pageTitle="Visi & Misi" />
      {/* Jumbotron */}
      <div className={styles.jumbotron}>
        <img
          src="/visi-jumbotron1.svg"
          alt=""
          className={styles["jumbotron__img1"]}
        />

        <img
          src="/visi-jumbotron2.svg"
          alt=""
          className={styles["jumbotron__img2"]}
        />

        <div className={styles.jumbotron__icon}>
          <img
            src="/visi-misi/jumbotron-icon.svg"
            className={styles.icon__img}
            alt="icon"
          />
          <div className={styles["jumbotron__title-container"]}>
            <h2 className={styles.icon__title}>Visi & Misi</h2>
            <h2 className={styles.icon__title2}>{namaKabinet}</h2>
          </div>
        </div>
      </div>
      {/* End Jumbotron  */}

      {/* Visi & Misi */}
      <div className={styles.visimisi}>
        <div className={styles.visi__container}>
          <h2 className={`${styles.visi__title} ${styles["h-font-title"]}`}>
            Visi
          </h2>

          <div className={styles["section-title-underline"]}></div>
          <p className={`${styles.visi__description} ${styles["h-font-desc"]}`}>
            {visi.teks}
          </p>
        </div>

        <div className={styles.misi__container}>
          <h2 className={`${styles.misi__title} ${styles["h-font-title"]}`}>
            Misi
          </h2>
          <div className={styles["section-title-underline"]}></div>

          <div className={styles.misi__list}>
            {misiList.map((misi, idx) => {
              return (
                <div key={idx} className={styles.list__container}>
                  <img
                    src={`${API_URL}${misi.icon.url}`}
                    className={styles.list__icon}
                    alt=""
                  />
                  <p
                    className={`${styles.list__description} ${styles["h-font-desc"]}`}
                  >
                    {misi.deskripsi}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* End Visi & Misi  */}

      {/* Logo Kabinet  */}
      <div className={styles.kabinet}>
        <h2 className={`${styles.kabinet__title} ${styles["h-font-title"]}`}>
          Logo Kabinet
        </h2>
        <div className={styles["section-title-underline"]}></div>

        <div className={styles.kabinet__logo}>
          <picture>
            {logoKabinetList.map((logoKabinet, idx) => {
              if (logoKabinet.untuk_layar === "desktop") {
                return (
                  <source
                    key={idx}
                    srcSet={`${API_URL}${logoKabinet.gambar.url}`}
                    media="(min-width: 768px)"
                    className={styles.logo__image}
                  />
                );
              }

              if (logoKabinet.untuk_layar === "tablet") {
                return (
                  <source
                    key={idx}
                    srcSet={`${API_URL}${logoKabinet.gambar.url}`}
                    media="(min-width: 560px)"
                    className={styles.logo__image}
                  />
                );
              }

              return (
                <img
                  key={idx}
                  src={API_URL + logoKabinet.gambar.url}
                  alt=""
                  className={styles.logo__image}
                />
              );
            })}
          </picture>
        </div>
      </div>
      {/* End Logo Kabinet  */}
    </>
  );
};

type ServerSideData = {
  visi: Visi;
  misiList: Misi[];
  logoKabinetList: LogoKabinet[];
  namaKabinet: string;
};

export const getServerSideProps: GetServerSideProps<ServerSideData> =
  async () => {
    const [visi, misiList, logoKabinetList, kabinet] = await Promise.all([
      (await fetch(`${API_URL}/visi`)).json(),
      (await fetch(`${API_URL}/misis`)).json(),
      (await fetch(`${API_URL}/logo-kabinets`)).json(),
      (await fetch(`${API_URL}/nama-kabinet`)).json(),
    ]);

    return {
      props: {
        visi,
        misiList,
        logoKabinetList,
        namaKabinet: kabinet.nama,
      },
    };
  };

export default VisiMisi;
