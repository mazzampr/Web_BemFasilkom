import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import styles from "../styles/StatusAduan.module.scss";
import Board from "react-trello";
import { API_URL } from "../constants";
import { AspirasiDanAduan, StatusAduan } from "../constants/types";
import { useReducer, useRef } from "react";
import * as dateFns from "date-fns";
import { DocumentHead } from "../components/DocumentHead";

const StatusAduanPage: NextPage<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  const { columns } = props;
  console.log("columns: ", columns);

  const initialLanesOffset: Record<number, number> = {};

  columns.lanes.forEach((lane) => {
    initialLanesOffset[lane.id] = lane.cards.length;
  });

  const offsets = useRef(initialLanesOffset);
  const shouldFetchNewData = useRef(true);
  const [listAduan, updateListAduan] = useReducer(listAduanReducer, columns);

  function listAduanReducer(
    prevState: typeof columns,
    payload: {
      newAduans: { id: number; title: string; description: string }[];
      laneId: number;
    }
  ): typeof columns {
    if (payload.newAduans.length === 0) {
      shouldFetchNewData.current = false;
      return prevState;
    }

    const prevStateClone: typeof prevState = JSON.parse(
      JSON.stringify(prevState)
    );

    const currentLaneIdx = prevStateClone.lanes.findIndex((lane) => {
      return lane.id === payload.laneId;
    });

    if (currentLaneIdx === -1) return prevState;

    payload.newAduans.forEach((newAduan) => {
      prevStateClone.lanes[currentLaneIdx].cards.push(newAduan);
    });

    const currentOffsets = offsets.current;
    currentOffsets[payload.laneId] = currentOffsets[payload.laneId] + 5;
    offsets.current = currentOffsets;

    return prevStateClone;
  }

  return (
    <>
      <DocumentHead pageTitle="Status Aduan" />
      <div className={styles.container}>
        <header className={styles.title}>
          <h1 className={styles.title_main}>Status Aduan</h1>
          <p className={styles.title_sub}>
            Lihat status aduan dan aspirasi <br className={styles.enter} />
            KM FASILKOM di bawah ini
          </p>
        </header>
        <div className={styles.kanban_wrapper}>
          <Board
            style={{ backgroundColor: "#ddd", padding: 40 }}
            data={listAduan}
            draggable={false}
            editable={false}
            cardDraggable={false}
            hideCardDeleteIcon
            onLaneScroll={async (_requestedPage, laneId) => {
              if (!shouldFetchNewData.current) return [];

              fetch(
                `${API_URL}/aspirasi-dan-aduans?_sort=created_at:DESC&_start=${offsets.current[laneId]}&_limit=5&status_aduan_eq=${laneId}`
              ).then((res) => {
                res.json().then((newAduans: AspirasiDanAduan[]) => {
                  const newAduanArray = newAduans.map((aduan) => {
                    return {
                      id: aduan.id,
                      title: `${aduan.tipe} dari ${aduan.nama}`,
                      description: dateFns.format(
                        new Date(aduan.created_at),
                        "d MMMM yyyy - HH:mm"
                      ),
                    };
                  });

                  updateListAduan({ laneId, newAduans: newAduanArray });
                });
              });

              return [];
            }}
          />
        </div>
      </div>
    </>
  );
};

type ServerSideData = {
  listAduan?: AspirasiDanAduan[];
  listStatusAduan?: StatusAduan[];
  columns: {
    lanes: {
      id: number;
      title: string;
      cards: {
        id: number;
        title: string;
        description: string;
      }[];
    }[];
  };
};

export const getServerSideProps: GetServerSideProps<ServerSideData> =
  async () => {
    let listStatusAduan = (await (
      await fetch(`${API_URL}/status-aduans`)
    ).json()) as StatusAduan[];

    listStatusAduan.sort(
      (statusAduan1, statusAduan2) => statusAduan1.urutan - statusAduan2.urutan
    );

    const columns = {
      lanes: await Promise.all(
        listStatusAduan.map(async (statusAduan) => {
          const cards = (await (
            await fetch(
              `${API_URL}/aspirasi-dan-aduans?_sort=created_at:DESC&_start=0&_limit=7&status_aduan_eq=${statusAduan.id}`
            )
          ).json()) as AspirasiDanAduan[];

          return {
            id: statusAduan.id,
            title: statusAduan.status,
            cards: cards.map((aduan) => {
              return {
                id: aduan.id,
                title: `${aduan.tipe} dari ${aduan.nama}`,
                description: dateFns.format(
                  new Date(aduan.created_at),
                  "d MMMM yyyy - HH:mm"
                ),
              };
            }),
          };
        })
      ),
    };

    return { props: { columns } };
  };

export default StatusAduanPage;
