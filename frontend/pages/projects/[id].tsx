import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import { DetailProjects } from "../../constants/types";
import styles from "../../styles/NewsDetail.module.scss";
import Error from "next/error";
import ReactMarkdown from "react-markdown";
import { API_URL } from "../../constants";
import { useDarkNavLinks } from "../../hooks/useDarkNavLinks";
import { DocumentHead } from "../../components/DocumentHead";
import * as dateFns from "date-fns";
import { useSelector, useDispatch } from 'react-redux'
import { setStatePageVisit } from '../../store/pageVisitSlices'


const ProjectsPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const dispatch = useDispatch()
  dispatch(setStatePageVisit({page:'Projects'}))
  const { errorCode, detailProjects } = props;
  useDarkNavLinks();
  if (errorCode || !detailProjects) {
    return (
      <Error
        statusCode={errorCode as number}
        title="Tidak dapat menemukan Projects"
      />
    );
  }

  return (
    <>
      <DocumentHead pageTitle="projects" />
      <main className={styles.main}>
        <section className={styles["head-news"]}>
          <div className={styles["border-shape"]}>
            <div className={styles["border-shape-inside"]}></div>
          </div>

          <h1 className={styles["news-title"]}>{detailProjects.judul}</h1>

          <p className={styles["news-info-date"]}>
            ~ {dateFns.format(new Date(detailProjects.created_at), "d MMMM yyyy")}{" "}
            ~
          </p>
          <p className={styles["news-info-author"]}>
            Oleh: {detailProjects.user}
          </p>
        </section>

        <div className={styles["img-container"]}>
          <img src={`${API_URL}${detailProjects.project_image.formats.medium.url}`} alt="" />
        </div>
       
        <article className={styles["news-content"]}>
        <p>Registration Deadline : {dateFns.format(new Date(detailProjects.registration_deadline), "d MMMM yyyy")}{" "}</p>
        <p>Project Deadline :{dateFns.format(new Date(detailProjects.project_deadline), "d MMMM yyyy")}{" "}</p>
          <ReactMarkdown transformImageUri={(src, alt, title) => API_URL + src}>
            {detailProjects.deskripsi}
          </ReactMarkdown>
          <p>{detailProjects.registration_link}</p>
        </article>
        
      </main>
    </>
  );
};

type ServerSideData = {
  errorCode: boolean | number;
  detailProjects: DetailProjects;
};

type URLParams = { id: string };

export const getServerSideProps: GetServerSideProps<ServerSideData, URLParams> =
  async (context) => {
    const res = await fetch(`${API_URL}/projects/${context.params?.id}`);
    const errorCode = res.ok ? false : res.status;
    const detailProjects = res.status === 404 ? null : await res.json()
    console.log(detailProjects)
    
    return {
      props: {
        errorCode,
        detailProjects,
      },
    };
  };

export default ProjectsPage;
