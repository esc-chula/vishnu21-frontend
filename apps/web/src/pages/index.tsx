import Cloud1 from '@/public/images/cloud1.png';
import Divider1 from '@/public/images/divider1.svg';
import type { NextPage } from 'next';
import Image from 'next/image';
import { FiChevronDown } from 'react-icons/fi';

const Home: NextPage = () => {
    return (
        <main className="overflow-hidden min-h-screen w-full">
            <section
                className="w-full h-screen relative grid place-content-center"
                style={{
                    backgroundImage:
                        'linear-gradient(180deg, #000 0%, #4713A3 86.82%)',
                }}
            >
                {/* scroll button */}
                <div className="z-50 absolute bottom-10 left-0 right-0 flex justify-center text-3xl">
                    <FiChevronDown className="cursor-pointer" />
                </div>

                {/* text */}
                <div className="z-40 absolute w-full h-full flex flex-col justify-center items-center pb-20 space-y-4 sm:space-y-6 text-center">
                    <h1 className="flex flex-col items-center font-bold space-y-4">
                        <span
                            className="text-sm sm:text-2xl"
                            style={{
                                textShadow:
                                    '0px 4px 17px rgba(71, 19, 163, 0.75)',
                            }}
                        >
                            ยินดีต้อนรับน้อง ๆ ทุกคนเข้าสู่ค่าย
                        </span>
                        <span
                            className="text-4xl sm:text-7xl"
                            style={{
                                textShadow:
                                    '0px -41px 140px rgba(255, 231, 106, 1), 0px 7px 30px rgba(71, 19, 163, 0.75)',
                            }}
                        >
                            ค่ายวิษณุกรรมบุตร
                        </span>
                    </h1>
                    <div className="flex flex-col space-y-8 sm:space-y-10 w-full">
                        <div className="relative w-full h-[7px] sm:h-[14px] select-none">
                            <Image src={Divider1} alt="Divider" fill />
                        </div>
                        <div className="flex flex-col items-center space-y-10 sm:space-y-12">
                            <p className="font-baijam font-semibold text-sm sm:text-2xl flex flex-col space-y-3">
                                <span>
                                    น้อง ๆ สามารถติดตามกิจกรรมและข้อมูลอื่น ๆ
                                </span>
                                <span>ได้ผ่าน LINE OA ลิงก์ด้านล่างนี้เลย</span>
                            </p>
                            <button
                                className="bg-white text-primary-600 font-bold sm:text-xl px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl duration-300 hover:scale-105"
                                style={{
                                    boxShadow:
                                        '0px 4.536645889282227px 21px 0px rgba(255, 231, 106, 0.65), 0px -4px 8px 0px rgba(194, 150, 239, 0.42) inset',
                                }}
                            >
                                ADD LINE
                            </button>
                        </div>
                    </div>
                </div>

                {/* front sun */}
                <div
                    className="z-30 absolute -bottom-80 -left-28 w-[400px] aspect-square bg-[#F0D396] bg-opacity-50 rounded-full mix-blend-screen"
                    style={{
                        filter: 'drop-shadow(0px 0px 200px #D9AB9F) blur(32px)',
                    }}
                ></div>
                <div
                    className="z-0 absolute -bottom-80 -left-28 w-[400px] aspect-square bg-[#F0D396] bg-opacity-50 rounded-full mix-blend-screen"
                    style={{
                        filter: 'drop-shadow(0px 0px 200px #D9AB9F) blur(32px)',
                    }}
                ></div>

                {/* back sun */}

                {/* text background */}
                <div className="z-30 absolute w-full h-full flex justify-center items-center">
                    <div
                        className="max-w-[1000px] w-full aspect-square rounded-full"
                        style={{
                            background:
                                'radial-gradient(50% 50.00% at 50% 50.00%, rgba(255, 231, 106, 0.14) 38.54%, rgba(255, 231, 106, 0.00) 100%)',
                        }}
                    ></div>
                </div>

                {/* large cloud */}
                <div className="z-20 absolute w-[1400px] aspect-[1863/845] -bottom-[280px] -right-[440px] select-none">
                    <div className="relative w-full h-full">
                        <Image
                            src={Cloud1}
                            alt="Cloud"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* small cloud */}
                <div
                    className="z-10 absolute w-[840px] aspect-[1863/845] -bottom-32 -left-72 select-none"
                    style={{
                        transform: 'scaleX(-1)',
                    }}
                >
                    <div className="relative w-full h-full">
                        <Image
                            src={Cloud1}
                            alt="Cloud"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* star background */}
                <svg
                    className="z-0 absolute flex h-full w-full"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <filter className="h-full w-full" id="filter">
                        <feTurbulence baseFrequency="0.2" />
                        <feColorMatrix
                            values="0 0 0 8 -4
                               0 0 0 8 -4
                               0 0 0 8 -4
                               0 0 0 8 -4"
                        />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#filter)" />
                </svg>
            </section>
            <section
                className="w-full h-[200vh]"
                style={{
                    backgroundImage:
                        'linear-gradient(0deg, #1E084A 40.55%, #4713A3 88.16%)',
                }}
            >
                {/* star background */}
                <svg
                    className="flex h-full w-full"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <filter className="h-full w-full" id="filter">
                        <feTurbulence baseFrequency="0.2" />
                        <feColorMatrix
                            values="0 0 0 8 -4
                               0 0 0 8 -4
                               0 0 0 8 -4
                               0 0 0 8 -4"
                        />
                    </filter>
                    <rect width="100%" height="100%" filter="url(#filter)" />
                </svg>
            </section>
        </main>
    );
};

export default Home;
