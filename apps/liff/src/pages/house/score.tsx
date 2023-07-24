import axios from '@/utils/fetcher';
import { useHouse } from '@/contexts/HouseContext';
import Main from '@/layouts/Main';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { IScore } from 'types';

const Score: NextPage = () => {
    const { houseData } = useHouse();

    const [scores, setScores] = useState<IScore[]>([]);

    useEffect(() => {
        const fetchScore = async () => {
            await axios
                .get(`/scores/house/${houseData.groupId}`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'token'
                        )}`,
                    },
                })
                .then((res) => {
                    setScores(res.data.details);
                })
                .catch((err) => {
                    console.error(err);
                });
        };

        fetchScore();
    }, []);

    return (
        <>
            <Head>
                <title>คะแนนบ้าน{houseData.shortName}</title>
            </Head>
            <Main foregroundImage="top3">
                <div className="z-20 flex flex-col h-full mt-28 w-full px-10 space-y-4">
                    <div className="flex justify-center">
                        <div className="h-60 w-60 bg-neutral-50 shadow-faq rounded-full flex flex-col justify-center items-center">
                            <h2 className="text-primary-500 text-7xl font-bold">
                                {houseData.score ? houseData.score : 0}
                            </h2>
                            <p className="text-neutral-500 font-semibold">
                                คะแนน
                            </p>
                            <p className="text-neutral-400 font-bold text-xs">
                                บ้าน{houseData.shortName}
                            </p>
                        </div>
                    </div>
                    <h3 className="font-semibold text-neutral-50">
                        ประวัติคะแนน
                    </h3>
                    <div className="w-full overflow-y-auto flex flex-col space-y-4">
                        {scores.length === 0 ? (
                            <div className="text-center pt-20 opacity-25">
                                ไม่มีประวัติคะแนน
                            </div>
                        ) : (
                            scores.map((score) => (
                                <div
                                    key={score.id}
                                    className="flex items-center p-4 bg-neutral-50 w-full rounded-2xl shadow-faq space-x-4"
                                >
                                    <h3 className="font-bold text-primary-500 text-4xl">
                                        +{score.score}
                                    </h3>
                                    <p className="text-neutral-600 font-semibold">
                                        {score.info}
                                    </p>
                                </div>
                            ))
                        )}
                    </div>
                </div>
                <div className="z-10 fixed top-[10%] left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-primary-900/70" />
            </Main>
        </>
    );
};

export default Score;
