import Logo from '@/components/landing/Logo';
import Divider from '@/components/landing/Divider';
import Image1 from '@/public/images/landing/1.webp';
import Image3 from '@/public/images/landing/3.webp';
import Image5 from '@/public/images/landing/5.webp';
import Image6 from '@/public/images/landing/6.webp';
import Mountain1 from '@/public/images/landing/mountain1.svg';
import Mountain2 from '@/public/images/landing/mountain2.svg';
import Mountain3 from '@/public/images/landing/mountain3.svg';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import type { NextPage } from 'next';
import Image from 'next/image';
import Navigation from '@/components/landing/Navigation';
import Decoration from '@/components/landing/Decoration';
import { useState } from 'react';
import NavigationDrawer from '@/components/landing/NavigationDrawer';

const Home: NextPage = () => {
    const [toggleNav, setToggleNav] = useState(false);

    return (
        <>
            <Navigation setToggleNav={setToggleNav} />
            {toggleNav && <NavigationDrawer setToggleNav={setToggleNav} />}

            <Parallax pages={6}>
                {/* hero */}
                <ParallaxLayer offset={0} speed={0.3}>
                    <div className="z-40 absolute w-full h-full flex flex-col justify-center items-center pb-20 px-4 space-y-4 sm:space-y-6 text-center">
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
                                className="text-[40px] whitespace-nowrap sm:text-7xl"
                                style={{
                                    textShadow:
                                        '0px -41px 140px rgba(255, 231, 106, 1), 0px 7px 30px rgba(71, 19, 163, 1)',
                                }}
                            >
                                ค่ายวิษณุกรรมบุตร
                            </span>
                        </h1>
                        <div className="flex flex-col items-center space-y-8 sm:space-y-10 w-full">
                            <div className="relative w-[320px] sm:w-[560px]">
                                <Divider />
                            </div>

                            {/* <div className="relative aspect-[742/12] w-[800px] select-none">
                                <Image src={Divider1} alt="Divider" fill />
                            </div> */}
                            <div className="flex flex-col items-center space-y-10 sm:space-y-12">
                                <p className="font-baijam font-semibold text-[17px] sm:text-2xl leading-loose sm:leading-loose whitespace-nowrap">
                                    น้อง ๆ สามารถติดตามกิจกรรมและข้อมูลอื่น ๆ
                                    <br />
                                    ได้ผ่าน LINE OA ลิงก์ด้านล่างนี้เลย
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
                    <div className="z-30 absolute w-full h-full flex justify-center items-center">
                        <div
                            className="max-w-[1000px] w-full aspect-square rounded-full"
                            style={{
                                background:
                                    'radial-gradient(50% 50.00% at 50% 50.00%, rgba(255, 231, 106, 0.14) 38.54%, rgba(255, 231, 106, 0.00) 100%)',
                            }}
                        ></div>
                    </div>
                </ParallaxLayer>

                {/* camp overview */}
                <ParallaxLayer
                    offset={1}
                    factor={0.5}
                    speed={0.5}
                    className="flex flex-col justify-center items-center space-y-10 sm:space-y-16 px-4"
                >
                    <Logo className="sm:scale-110" />
                    <p className="font-baijam font-semibold text-lg sm:text-2xl text-center text-primary-50 max-w-[807px] leading-loose tracking-normal sm:leading-loose sm:tracking-wide">
                        ค่ายวิษณุกรรมบุตร
                        เป็นค่ายที่จัดเพื่อต้อนรับนิสิตใหม่ของคณะวิศวฯ จุฬาฯ
                        ซึ่งได้จัดติดต่อกันมาเป็นเวลากว่า 20 ปีแล้ว !
                        ค่ายนี้จะทำให้ทุกคนได้รู้จัก
                        และสร้างความสนิทสนมกับเพื่อน ๆ ชาววิศวฯ
                        ผ่านกิจกรรมสุดจัดเต็มตลอด 4 วัน
                    </p>
                </ParallaxLayer>
                <ParallaxLayer
                    offset={1.5}
                    factor={0.3}
                    speed={0.6}
                    className="flex justify-center px-4 select-none"
                >
                    <div className="grid grid-cols-2 gap-4 sm:gap-10 max-w-screen-lg w-full">
                        <Image
                            src={Image5}
                            alt="Camp Photo"
                            className="object-contain scale-90 rounded-2xl shadow-2xl"
                        />
                        <Image
                            src={Image1}
                            alt="Camp Photo"
                            className="object-contain scale-95 rounded-2xl shadow-2xl"
                        />
                        <Image
                            src={Image3}
                            alt="Camp Photo"
                            className="object-contain scale-100 rounded-2xl shadow-2xl"
                        />
                        <Image
                            src={Image6}
                            alt="Camp Photo"
                            className="object-contain scale-90 rounded-2xl shadow-2xl"
                        />
                    </div>
                </ParallaxLayer>

                {/* sponsor */}
                <ParallaxLayer
                    offset={2}
                    factor={0.5}
                    speed={0.3}
                    className="flex flex-col items-center justify-center px-4 space-y-10"
                >
                    <h3 className="font-semibold text-3xl">
                        ผู้สนับสนุนของเรา
                    </h3>
                    <div className="flex space-x-10">
                        <div className="bg-primary-800 w-40 h-40"></div>
                        <div className="bg-primary-800 w-40 h-40"></div>
                        <div className="bg-primary-800 w-40 h-40"></div>
                        <div className="bg-primary-800 w-40 h-40"></div>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={2.8} factor={2} speed={0.1}>
                    <Image
                        src={Mountain1}
                        alt=""
                        fill
                        className="object-none object-[10%,0] md:object-left-top -mt-40"
                    />
                </ParallaxLayer>
                <ParallaxLayer offset={3.3} speed={0.3}>
                    <Image
                        src={Mountain2}
                        alt=""
                        fill
                        className="object-none object-[3%,0] md:object-left-top -mt-96 md:-mt-auto"
                    />
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0.9}>
                    <Image
                        src={Mountain3}
                        alt=""
                        fill
                        className="object-none object-[82%,0] md:object-[40%,0] -mt-96 md:-mt-auto"
                    />
                </ParallaxLayer>
                <ParallaxLayer
                    offset={3.7}
                    factor={4}
                    speed={0.9}
                    className="bg-[#130531] -mt-36 md:-mt-auto"
                ></ParallaxLayer>

                <Decoration />
            </Parallax>
        </>
    );
};

export default Home;
