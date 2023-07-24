import type { NextPage } from 'next';
import Image from 'next/image';
import Decorate from '@/public/images/decorate.svg';
import { useEffect, useState } from 'react';
import { fetcher } from '@/utils/fetcher';
import { useHouse } from '@/contexts/HouseContext';
import GrainBackground from '@/public/images/grain-background.svg';

const Color = [
    'bg-[#DAA520] text-white',
    'bg-[#A7A7AD] text-white',
    'bg-[#A77044] text-white',
    'bg-neutral-50 text-primary-500',
];

const ScoreDetail: NextPage = () => {
    const { houseData, fetchHouseData } = useHouse();
    const [data, setData] = useState<
        {
            name: string;
            shortName: string;
            score: number;
        }[]
    >([]);

    useEffect(() => {
        fetcher('/scores', localStorage.getItem('token')).then((res) => {
            console.log(res);
            setData(res.scores);
        });
        fetchHouseData();
    }, []);

    return (
        <div className="w-screen h-screen flex flex-col items-center px-7 pt-16 pb-5">
            <h1 className="font-bold text-white text-3xl font-baijam py-8 drop-shadow-lg">
                อันดับคะแนนค่ายวิษณุ
            </h1>
            <ul className="flex flex-col overflow-y-auto gap-3 w-full mt-3 pb-40">
                {data.map((item, idx) => (
                    <li
                        key={item.name}
                        className={`${
                            Color[Math.min(idx, 3)]
                        } w-full px-6 flex justify-between items-center py-4 rounded-3xl shadow-details`}
                    >
                        <span className="text-md font-medium">
                            {item.shortName}
                        </span>
                        <span className="text-lg font-medium">
                            {item.score}
                        </span>
                    </li>
                ))}
            </ul>
            {/* Background and decorations */}
            <Image
                src={
                    houseData
                        ? require(`@/public/images/banners/${houseData.group}.png`)
                        : GrainBackground
                }
                alt="background"
                className="fixed blur-xl top-0 left-0 -z-50 h-screen w-full object-cover"
                loading="lazy"
            />
            <div className="fixed top-0 left-0 bg-gradient-to-b from-transparent to-primary-900 w-screen h-screen -z-40" />
            <Image
                src={Decorate}
                alt="background"
                className="fixed bottom-0 left-0 w-full max-h-48 object-cover overflow-visible z-30"
                priority
            />
        </div>
    );
};

export default ScoreDetail;
