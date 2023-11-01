import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { DetailBerita } from "../../constants/types";
import styles from "../../styles/NewsDetail.module.scss";
import Error from "next/error";
import ReactMarkdown from "react-markdown";
import { API_URL } from "../../constants";
import { useDarkNavLinks } from "../../hooks/useDarkNavLinks";
import { DocumentHead } from "../../components/DocumentHead";
import * as dateFns from "date-fns";
import { useSelector, useDispatch } from 'react-redux'
import { setStatePageVisit } from '../../store/pageVisitSlices'


const NewsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const dispatch = useDispatch()
  dispatch(setStatePageVisit({page:'Berita'}))
  
  const { errorCode, detailBerita } = props;
  useDarkNavLinks();
  if (errorCode || !detailBerita) {
    return (
      <Error
        statusCode={errorCode as number}
        title="Tidak dapat menemukan berita"
      />
    );
  }

  return (
    <>
      <DocumentHead pageTitle="Berita" />
      <main className={styles.main}>
        <section className={styles["head-news"]}>
          <div className={styles["border-shape"]}>
            <div className={styles["border-shape-inside"]}></div>
          </div>

          <h1 className={styles["news-title"]}>{detailBerita.judul}</h1>

          <p className={styles["news-info-date"]}>
            ~ {dateFns.format(new Date(detailBerita.created_at), "d MMMM yyyy")}{" "}
            ~
          </p>
          <p className={styles["news-info-author"]}>
            Oleh: {detailBerita.author.firstname}
          </p>
        </section>

        <div className={styles["img-container"]}>
          <img src={`${API_URL}${detailBerita.cover.url}`} alt="" />
        </div>

        <article className={styles["news-content"]}>
          <ReactMarkdown transformImageUri={(src, alt, title) => API_URL + src}>
            {detailBerita.konten}
          </ReactMarkdown>
        </article>
      </main>
    </>
  );
};

type ServerSideData = {
  errorCode: boolean | number;
  detailBerita: DetailBerita;
};

type URLParams = { id: string };

export const getServerSideProps: GetServerSideProps<ServerSideData, URLParams> =
  async (context) => {
    const res = await fetch(`${API_URL}/beritas/${context.params?.id}`);
    const errorCode = res.ok ? false : res.status;
    const detailBerita = res.status === 404 ? null : await res.json();

    return {
      props: {
        errorCode,
        detailBerita,
      },
    };
  };

export default NewsPage;
