import type { NextPage } from 'next';
import Image from 'next/image';
import Decorate from '@/public/images/decorate.svg';
import { useEffect, useState } from 'react';
import { fetcher } from '@/utils/fetcher';
import { useHouse } from '@/contexts/HouseContext';

const ScoreDetail: NextPage = () => {
    const { houseData, fetchHouseData } = useHouse();
    const [mainScore, setMainScore] = useState(0);
    const [data, setData] = useState<
        {
            id: string;
            info: string;
            description: string;
            score: number;
        }[]
    >([]);

    useEffect(() => {
        fetcher('/scores/user', localStorage.getItem('token')).then((res) => {
            console.log(res);
            setData(res.details);
            setMainScore(res.score);
        });
        fetchHouseData();
    }, [fetchHouseData]);

    return (
        <div className="w-screen h-screen flex flex-col items-center px-7 pt-16 pb-5">
            <h1 className="font-bold text-white text-3xl font-baijam py-8 drop-shadow-lg">
                คะแนนประจำบ้าน{houseData.shortName}
            </h1>
            <div className="relative w-full px-5 py-10">
                <div>
                    <p className="text-white font-light">Total score</p>
                    <h1 className="text-white text-center text-7xl font-bold ml-4">
                        {mainScore}
                    </h1>
                </div>
            </div>
            <ul className="flex flex-col overflow-y-auto gap-3 w-full mt-3 pb-40">
                {data.map((item) => (
                    <li
                        key={item.id}
                        className={`${
                            item.score >= 0
                                ? 'bg-success-300 text-success-900'
                                : 'bg-error-400 text-error-900'
                        } w-full px-6 flex justify-between items-center py-4 rounded-3xl shadow-details`}
                    >
                        <span className="text-md font-medium">{item.info}</span>
                        <span className="text-lg font-medium">
                            {item.score}
                        </span>
                    </li>
                ))}
            </ul>
            {/* Background and decorations */}
            <Image
                src={require(`@/public/images/banners/${houseData.group}.png`)}
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
