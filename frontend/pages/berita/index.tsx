import React, { useRef, useState } from "react";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import styles from "../../styles/SemuaBerita.module.scss";
import { DetailBerita } from "../../constants/types";
import { API_URL } from "../../constants";
import Link from "next/link";
import { useDarkNavLinks } from "../../hooks/useDarkNavLinks";
import * as dateFns from "date-fns";
import { DocumentHead } from "../../components/DocumentHead";

const Berita: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> =
  (props) => {
    const { listBerita, beritaCount } = props;
    const paginationStart = useRef(listBerita.length);
    const [beritaList, setBeritaList] = useState(listBerita);
    const [isFetchingNewData, setIsFetchingNewData] = useState(false);
    useDarkNavLinks();

    return (
      <>
        <DocumentHead pageTitle="Fasilkom News" />
        <div className={styles.container}>
          {beritaList.length > 0 ? (
            <>
              <div className={styles.berita_list_container}>
                {beritaList.map((berita, idx) => {
                  return (
                    <Link key={idx} href={`/berita/${berita.id}`}>
                      <a className={styles.news_card}>
                        <div className={styles.news_thumbnail}>
                          <img src={API_URL + berita.cover.url} alt="berita" />
                        </div>
                        <h3 className={styles.news_title}>{berita.judul}</h3>
                        <p className={styles.news_date}>
                          {dateFns.format(
                            new Date(berita.created_at),
                            "d MMMM yyyy"
                          )}
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
              {beritaList.length < beritaCount ? (
                <button
                  className={styles.news_load_more}
                  disabled={isFetchingNewData}
                  onClick={() => {
                    setIsFetchingNewData(true);
                    fetch(
                      `${API_URL}/beritas?_sort=created_at:DESC&_start=${paginationStart.current}&_limit=3`
                    ).then(async (res) => {
                      res.json().then((newNews) => {
                        setBeritaList((prevState) => {
                          return [...prevState, ...newNews];
                        });
                        setIsFetchingNewData(false);
                      });
                    });
                  }}
                >
                  {isFetchingNewData ? "Mengambil data" : "Lihat lebih banyak"}
                </button>
              ) : null}
            </>
          ) : (
            <div className={styles.no_news_notice}>
              <h1>Ups, belum ada berita di sini</h1>
            </div>
          )}
        </div>
      </>
    );
  };

type ServerSideData = {
  listBerita: DetailBerita[];
  beritaCount: number;
};

export const getServerSideProps: GetServerSideProps<ServerSideData> =
  async () => {
    const [beritaList, beritaCount] = await Promise.all([
      await (
        await fetch(
          `${API_URL}/beritas?_sort=created_at:DESC&_start=0&_limit=6`
        )
      ).json(),
      await (await fetch(`${API_URL}/beritas/count`)).json(),
    ]);

    return {
      props: {
        listBerita: beritaList,
        beritaCount,
      },
    };
  };

export default Berita;
