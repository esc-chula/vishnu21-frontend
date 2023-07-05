import GroupsData from '@/constants/groups-data.json';
import { flag } from 'assets';
import type { NextPage } from 'next';
import Image from 'next/image';

const House: NextPage = () => {
    const group = 'C';
    const { color, theme, alt_color } = GroupsData.find(
        (data) => data.group === group
    );

    return (
        <main>
            <section className="relative h-screen w-full">
                {/* content */}
                <div className="z-20 absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center space-y-10">
                    <div className="max-w-[190px] aspect-[421/765] w-full relative border-white border-[10px]">
                        <Image
                            src={flag[group]}
                            alt="Flag Image"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col items-center space-y-7">
                        <div
                            className="text-center"
                            style={{
                                color: color,
                            }}
                        >
                            <h1 className="flex flex-col space-y-2">
                                <span className="font-semibold">
                                    ยินดีต้องรับน้องปูนสู่บ้าน
                                </span>
                                <span className="text-4xl font-bold">
                                    อาหร่อยจังเลย
                                </span>
                            </h1>
                        </div>
                        <div
                            className="flex items-center space-x-4"
                            style={{
                                color: alt_color,
                            }}
                        >
                            <button
                                className="bg-white flex justify-center w-28 py-2 rounded-2xl font-semibold text-sm"
                                style={{
                                    boxShadow: `0px 4px 10px 0px ${alt_color}33, 0px -4px 6px 0px ${alt_color}1A inset`,
                                }}
                            >
                                Feed บ้าน
                            </button>
                            <button
                                className="bg-white flex justify-center w-28 py-2 rounded-2xl font-semibold text-sm"
                                style={{
                                    boxShadow: `0px 4px 10px 0px ${alt_color}33, 0px -4px 6px 0px ${alt_color}1A inset`,
                                }}
                            >
                                สมาชิกบ้าน
                            </button>
                        </div>
                    </div>
                </div>
                {/* background filter */}
                <div
                    className={`z-10 fixed top-0 left-0 right-0 bottom-0 backdrop-blur-lg bg-opacity-20 select-none ${
                        theme === 'dark' ? 'bg-black' : 'bg-white'
                    }`}
                ></div>
                {/* bacground image */}
                <div className="z-0 fixed top-0 left-0 right-0 bottom-0 select-none">
                    <div className="relative h-screen w-full scale-105">
                        <Image
                            src={flag[group]}
                            className="object-cover"
                            alt="Flag Image"
                            fill
                            quality={5}
                        />
                    </div>
                </div>
            </section>
            <section className="h-screen"></section>
        </main>
    );
};

export default House;
