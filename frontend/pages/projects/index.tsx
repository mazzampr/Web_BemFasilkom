import React, { useRef, useState } from "react";
import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import styles from "../../styles/SemuaBerita.module.scss";
import { DetailProjects } from "../../constants/types";
import { API_URL } from "../../constants";
import Link from "next/link";
import { useDarkNavLinks } from "../../hooks/useDarkNavLinks";
import * as dateFns from "date-fns";
import { DocumentHead } from "../../components/DocumentHead";
import { useDispatch } from 'react-redux'
import { setStatePageVisit } from '../../store/pageVisitSlices'



const Projects: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> =
  (props) => {
    const dispatch = useDispatch()
    dispatch(setStatePageVisit({page:'Projects'}))
    const { listProjects, ProjectsCount } = props;
    const paginationStart = useRef(listProjects.length);
    const [ProjectsList, setProjectsList] = useState(listProjects);
    const [isFetchingNewData, setIsFetchingNewData] = useState(false);
    useDarkNavLinks();

    return (
      <>
        <DocumentHead pageTitle="projects" />
        <div className={styles.container}>
          {ProjectsList.length > 0 ? (
            <>
              <div className={styles.Projects_list_container}>
                {ProjectsList.map((Projects, idx) => {
                  return (
                    <Link key={idx} href={`/projects/${Projects.id}`}>
                      <a className={styles.news_card}>
                        <div className={styles.news_thumbnail}>
                          <img src={API_URL + Projects.project_image.formats.thumbnail.url} alt="Projects" />
                        </div>
                        <h3 className={styles.news_title}>{Projects.name}</h3>
                        <p className={styles.news_date}>
                          Dibuat : {dateFns.format(
                            new Date(Projects.created_at),
                            "d MMMM yyyy"
                          )}
                        </p>
                        <p className={styles.news_desc}>
                          {Projects.deskripsi.length > 200
                            ? Projects.deskripsi.slice(0, 200) + "..."
                            : Projects.deskripsi}
                        </p>
                      </a>
                    </Link>
                  );
                })}
              </div>
              {ProjectsList.length < ProjectsCount ? (
                <button
                  className={styles.news_load_more}
                  disabled={isFetchingNewData}
                  onClick={() => {
                    setIsFetchingNewData(true);
                    fetch(
                      `${API_URL}/Projectss?_sort=created_at:DESC&_start=${paginationStart.current}&_limit=3`
                    ).then(async (res) => {
                      res.json().then((newNews) => {
                        setProjectsList((prevState) => {
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
              <h1>Ups, belum ada Projects di sini</h1>
            </div>
          )}
        </div>
      </>
    );
  };

type ServerSideData = {
  listProjects: DetailProjects[];
  ProjectsCount: number;
};

export const getServerSideProps: GetServerSideProps<ServerSideData> =
  async () => {
    const [ProjectsList, ProjectsCount] = await Promise.all([
      await (
        await fetch(
          `${API_URL}/projects?_sort=created_at:DESC&_start=0&_limit=6`
        )
      ).json(),
      await (await fetch(`${API_URL}/projects/count`)).json(),
    ]);

    return {
      props: {
        listProjects: ProjectsList,
        ProjectsCount,
      },
    };
  };

export default Projects;
