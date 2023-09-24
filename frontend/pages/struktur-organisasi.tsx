import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import capitalize from "capitalize";
import styles from "../styles/StrukturOrganisasi.module.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { API_URL } from "../constants";
import {
  DivisiPengurus,
  JabatanPengurus,
  Pengurus,
  StrapiImage,
} from "../constants/types";
import { useLightNavLinks } from "../hooks/useLightNavLinks";
import { DocumentHead } from "../components/DocumentHead";
import Link from "next/link";

type StructuralDummyDataType = {
  name: string;
  photoUrl: string;
  instagramUsername: string;
  major: string;
  generation: number;
};

type JumbotronProps = {
  structuralDiagramUrl: string;
};

const Struktur: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const {
    listDivisi,
    listPengurus,
    namaKabinet,
    strukturPengurus,
    listJabatan,
  } = props;
  useLightNavLinks();
  console.log("list divisi: ", listDivisi);
  console.log("list jabatan: ", listJabatan);
  console.log("list pengurus: ", listPengurus);

  const Jumbotron = ({ structuralDiagramUrl }: JumbotronProps) => (
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

      <div className={styles["jumbotron-content"]}>
        {/* <div className={styles["structural-diagram"]}> */}
        <img
          className={styles["structural-diagram"]}
          src={structuralDiagramUrl}
          alt="Struktur Organisasi"
        />
        {/* </div> */}
      </div>
    </div>
  );

  return (
    <div className={styles["main"]}>
      <DocumentHead pageTitle="Struktur Organisasi" />

      {/* Main Page */}
      <main>
        <Jumbotron structuralDiagramUrl={API_URL + strukturPengurus.url} />

        <div className={styles["content-container"]}>
          <div className={styles["cabinate-container"]}>
            <h2 className={styles["cabinate-name"]}>{namaKabinet}</h2>
            <div className={styles["cabinate-underline"]}></div>
          </div>

          <Tabs>
            <TabList>
              {listDivisi.map((divisi, idx) => {
                const pengurusFound = listPengurus.filter(
                  (pengurus) => pengurus.divisi.nama === divisi.nama
                );
                if (pengurusFound.length === 0) return;

                return <Tab key={idx}>{divisi.nama}</Tab>;
              })}
            </TabList>

            <div className={styles["member-list-container"]}>
              {listDivisi.map((divisi, idx) => {
                const pengurusFound = listPengurus.filter(
                  (pengurus) => pengurus.divisi.nama === divisi.nama
                );

                if (pengurusFound.length === 0) return;

                return (
                  <TabPanel key={divisi.nama + idx}>
                    <div key={idx} className={styles["member-cards"]}>
                      {listPengurus
                        .filter(
                          (pengurus) => pengurus.divisi.nama === divisi.nama
                        )
                        .map((pengurus) => {
                          // console.log(divisi, pengurus);
                          return (
                            <div key={pengurus.id} className={styles["card"]}>
                              <img
                                src={API_URL + pengurus.foto.url}
                                className={styles["card-image"]}
                              />

                              <div className={styles["card-content"]}>
                                <span
                                  className={`${styles["member-position"]} ${styles["member-card-info"]}`}
                                >
                                  {pengurus.jabatan.nama}
                                </span>
                                <div
                                  className={`${styles["center-text"]} ${styles["member-card-info"]} ${styles["member-name"]}`}
                                >
                                  {pengurus.nama}
                                </div>

                                <div
                                  className={`${styles["center-text"]} ${styles["member-card-info"]}`}
                                >
                                  {pengurus.jurusan.nama} - {pengurus.angkatan}
                                </div>

                                <div
                                  className={`${styles["center-text"]} ${styles["member-card-info"]}`}
                                >
                                  <Link
                                    href={`https://instagram.com/${pengurus.instagram}`}
                                  >
                                    <a className={styles["member-instagram"]}>
                                      IG: {pengurus.instagram}
                                    </a>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                    </div>
                  </TabPanel>
                );
              })}
            </div>
          </Tabs>
        </div>
      </main>
    </div>
  );
};

type ServerSideData = {
  listDivisi: DivisiPengurus[];
  listPengurus: Pengurus[];
  namaKabinet: string;
  strukturPengurus: StrapiImage;
  listJabatan: JabatanPengurus[];
};

export const getServerSideProps: GetServerSideProps<ServerSideData> =
  async () => {
    const [listDivisi, listPengurus, kabinet, strukturPengurus, listJabatan] =
      await Promise.all([
        await (await fetch(`${API_URL}/kategori-penguruses`)).json(),
        await (await fetch(`${API_URL}/penguruses`)).json(),
        await (await fetch(`${API_URL}/nama-kabinet`)).json(),
        await (await fetch(`${API_URL}/struktur-pengurus`)).json(),
        await (await fetch(`${API_URL}/jabatans`)).json(),
      ]);

    return {
      props: {
        listDivisi,
        listPengurus,
        namaKabinet: kabinet.nama,
        strukturPengurus: strukturPengurus.bagan,
        listJabatan,
      },
    };
  };

export default Struktur;
