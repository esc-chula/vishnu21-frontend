import { useHouse } from '@/contexts/HouseContext';
import Sponsor1 from '@/public/images/sponsors/gcme_logo.png';
import Sponsor2 from '@/public/images/sponsors/fujifilm_logo.png';
import Sponsor3 from '@/public/images/sponsors/instax_logo.png';
import Sponsor4 from '@/public/images/sponsors/major_logo.png';
import Sponsor5 from '@/public/images/sponsors/bright_hair_logo.png';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FiChevronLeft, FiInstagram } from 'react-icons/fi';
import Image from 'next/image';
import { IGame } from '@/data/games.dto';
import { useEffect, useState } from 'react';
import { fetcher } from '@/utils/fetcher';
import { useRouter } from 'next/router';
import axios from 'axios';

const GamePlayPage: NextPage = () => {
    const { houseData } = useHouse();
    const router = useRouter();
    const [gameData, setGameData] = useState<IGame>({
        title: 'Loading...',
        choices: [],
        expiresAt: new Date(),
        startedAt: new Date(),
    });
    const [selected, setSelected] = useState<string | null>(null);

    const submit = () => {
        axios
            .post(
                `${process.env.NEXT_PUBLIC_API_BASE_URL}/games/submit`,
                { gameId: router.query.id, choiceId: selected },
                {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem(
                            'token'
                        )}`,
                    },
                }
            )
            .then(() => {
                alert('ส่งแล้ว ไม่รู้ถูกมั้ย แต่เก่งมากหนุ่ม');
                router.replace('/house/game');
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        if (router.query.id)
            fetcher(
                `/games/play/${router.query.id}`,
                localStorage.getItem('token')
            ).then((res) => {
                if (res.title === 'Crossword Game') {
                    localStorage.setItem(
                        'VISHNU21ST::CROSSWORD_ID',
                        router.query.id as string
                    );
                    localStorage.setItem(
                        'VISHNU21ST::CROSSWORD_HASH',
                        res.choices[0].choiceId as string
                    );
                    router.replace('/house/game/crossword');
                } else setGameData(res);
            });
    }, [router.query]);

    return (
        <>
            <Head>
                <title>Pop Event</title>
            </Head>

            <div className="z-20 absolute h-screen top-0 left-0 right-0 bottom-0 flex flex-col space-y-3 px-4">
                <div
                    className="relative flex justify-center items-center pt-6 pb-2"
                    style={{
                        color:
                            houseData.theme === 'dark'
                                ? houseData.color
                                : houseData.altColor,
                    }}
                >
                    <Link
                        href="/house/game"
                        className="absolute left-0 text-3xl"
                    >
                        <FiChevronLeft />
                    </Link>
                    <h1 className="font-semibold">Pop Event</h1>
                </div>
                <div className="px-6 pt-2 pb-10-mx-4 space-y-8">
                    {/* posts */}
                    <div
                        className="bg-neutral-50 rounded-2xl p-4 h-full text-sm text-neutral-800"
                        style={{
                            boxShadow: `0px 4px 10px 0px ${houseData.altColor}33, 0px -4px 20px 0px ${houseData.altColor}1A inset`,
                        }}
                    >
                        <h1 className="font-medium text-base text-xl">
                            {gameData.title}
                        </h1>
                        {gameData.description ? (
                            <p className="my-8 ml-4">{gameData.description}</p>
                        ) : (
                            <p className="my-8 ml-4 italic">ไม่มีรายละเอียด</p>
                        )}
                        <div className="p-2">
                            <h1 className="font-light ml-4 italic text-base text-xs">
                                Answer
                            </h1>
                            <div className="my-2">
                                {gameData.choices ? (
                                    gameData.choices.map((choice, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-center mb-4"
                                        >
                                            <input
                                                type="radio"
                                                className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                                                value={choice.choiceId}
                                                key={choice.choiceId}
                                                checked={
                                                    selected === choice.choiceId
                                                }
                                                onChange={() =>
                                                    setSelected(choice.choiceId)
                                                }
                                            />
                                            <label className="ml-2 text-sm font-medium">
                                                {choice.text}
                                            </label>
                                        </div>
                                    ))
                                ) : (
                                    <></>
                                )}
                            </div>
                        </div>
                        <div className="w-full text-center">
                            <button
                                className={`text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 ${
                                    !selected && 'opacity-50'
                                }`}
                                onClick={submit}
                                disabled={gameData.submitted || !selected}
                            >
                                ส่งคำตอบ
                            </button>
                        </div>
                    </div>

                    {/* sponsor */}
                    <div
                        className="flex flex-col items-center font-medium text-xs space-y-2"
                        style={{
                            color:
                                houseData.theme === 'dark'
                                    ? houseData.color
                                    : houseData.altColor,
                        }}
                    >
                        <p>สนับสนุนโดย</p>
                        <div className="flex items-center space-x-2">
                            <Image
                                src={Sponsor1}
                                alt="Sponsor"
                                className="w-10"
                            />
                            <Image
                                src={Sponsor2}
                                alt="Sponsor"
                                className="w-10"
                            />
                            <Image
                                src={Sponsor3}
                                alt="Sponsor"
                                className="w-10"
                            />
                            <Image
                                src={Sponsor4}
                                alt="Sponsor"
                                className="w-10"
                            />
                            <Image
                                src={Sponsor5}
                                alt="Sponsor"
                                className="w-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default GamePlayPage;
