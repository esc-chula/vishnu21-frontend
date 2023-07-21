import FacultyMap from '@/components/FacultyMap';
import Main from '@/layouts/Main';
import SponsorFooter from '@/components/SponsorFooter';
import Map1 from '@/public/images/maps/map1.png';
import Map2 from '@/public/images/maps/map2.png';
import Map3 from '@/public/images/maps/map3.png';
import Map4 from '@/public/images/maps/map4.png';
import Map5 from '@/public/images/maps/map5.png';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const Map: NextPage = () => {
    return (
        <>
            <Head>
                <title>แผนผังงานและจุดตั้งชมรม</title>
            </Head>
            <Main foregroundImage="top2">
                <div className="w-full h-full p-6 space-y-6 overflow-y-auto pb-36 text-center">
                    <h1 className="font-bold text-2xl mt-10">
                        แผนผังจุดตั้งชมรม
                    </h1>
                    <div className="w-full h-80 bg-neutral-50 rounded-3xl flex flex-col items-center shadow-faq p-3 relative">
                        <div className="overflow-auto relative w-full h-full rounded-2xl bg-[#EAEAEA]">
                            <Image
                                src={Map1}
                                alt=""
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                    <h2 className="font-bold text-xl pb-5">แผนที่คณะ</h2>
                    <div className="w-full h-64 bg-neutral-50 rounded-3xl flex flex-col items-center shadow-faq p-3 relative">
                        <div className="overflow-auto relative w-full h-full rounded-2xl">
                            <Image
                                src={Map2}
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <h2 className="font-bold text-xl pb-5">สวนรวมใจ</h2>
                    <div className="w-full h-64 bg-neutral-50 rounded-3xl flex flex-col items-center shadow-faq p-3 relative">
                        <div className="overflow-auto relative w-full h-full rounded-2xl">
                            <Image
                                src={Map3}
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <h2 className="font-bold text-xl pb-5">ตึกวิศวฯ 100 ปี</h2>
                    <div className="w-full h-64 bg-neutral-50 rounded-3xl flex flex-col items-center shadow-faq p-3 relative">
                        <div className="overflow-auto relative w-full h-full rounded-2xl">
                            <Image
                                src={Map4}
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <h2 className="font-bold text-xl pb-5">
                        อาคารเจริญวิศวกรรม(ตึก 4)
                    </h2>
                    <div className="w-full h-64 bg-neutral-50 rounded-3xl flex flex-col items-center shadow-faq p-3 relative">
                        <div className="overflow-auto relative w-full h-full rounded-2xl">
                            <Image
                                src={Map5}
                                alt=""
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                    <h2 className="font-bold text-xl pb-5">สนามบาสเกตบอล</h2>
                    <br />
                    <SponsorFooter />
                </div>
            </Main>
            <div className="fixed z-50 bottom-6 left-4 right-4 h-[72px] bg-neutral-50 rounded-2xl shadow-faq flex items-center px-5 py-3 space-x-2">
                <Link
                    href="/schedule"
                    className="text-primary-500 px-4 py-1.5 w-full flex justify-center items-center font-bold rounded-xl h-full"
                >
                    ตารางกิจกรรม
                </Link>
                <Link
                    href="/map"
                    className="bg-primary-500 text-white px-4 py-1.5 w-full flex justify-center items-center font-bold rounded-xl h-full"
                >
                    แผนผังงาน
                </Link>
            </div>
        </>
    );
};

export default Map;
