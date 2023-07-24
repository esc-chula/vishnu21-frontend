import ScheduleData from '@/constants/schedule-data.json';
import Main from '@/layouts/Main';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import FDLogo from '@/public/images/logo/firstdate_light.svg';
import VNLogo from '@/public/images/logo/vishnu_light.svg';
import { useEffect, useState } from 'react';
import SponsorFooter from '@/components/SponsorFooter';

const Schedule: NextPage = () => {
    const selector = () => {
        const date = Date.now();

        if (date > new Date('2023-07-26T23:30:00+07:00').getTime())
            return 'vishnu_4';
        if (date > new Date('2023-07-25T22:45:00+07:00').getTime())
            return 'vishnu_3';
        if (date > new Date('2023-07-24T22:45:00+07:00').getTime())
            return 'vishnu_2';
        if (date > new Date('2023-07-23T00:00:00+07:00').getTime())
            return 'vishnu_1';
    };

    const [day, setDay] = useState<
        'vishnu_1' | 'vishnu_2' | 'vishnu_3' | 'vishnu_4'
    >(selector());

    const data = ScheduleData[day];

    return (
        <>
            <Head>
                <title>กำหนดการกิจกรรม</title>
            </Head>
            <Main foregroundImage="full2">
                <div className="w-full h-full p-6">
                    <div className="w-full h-full border-white border-[3px] rounded-3xl flex flex-col items-center">
                        <div className="w-full h-full overflow-y-auto pb-40">
                            <div className="flex flex-col items-center">
                                <h1 className="font-bold text-2xl mt-12">
                                    กำหนดการกิจกรรม
                                </h1>
                                <div className="relative mt-8 w-full h-14 select-none">
                                    <Image
                                        src={
                                            Date.now() >
                                            new Date(
                                                '2023-07-23T00:00:00+07:00'
                                            ).getTime()
                                                ? VNLogo
                                                : FDLogo
                                        }
                                        alt="EventLogo"
                                        fill
                                    />
                                </div>
                                <div className="flex flex-col space-y-4 mt-10 pl-8 pr-5 justify-center">
                                    {data.map((schedule, index) => (
                                        <div
                                            key={index}
                                            className="grid grid-cols-3 gap-3 text-sm"
                                        >
                                            <div className="col-span-1 whitespace-nowrap">
                                                <p>{schedule.time}</p>
                                            </div>
                                            <div className="col-span-2">
                                                <p>{schedule.event}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="font-bold flex items-center space-x-4 text-xl mt-10 mb-16">
                                    <span
                                        className="select-none cursor-pointer"
                                        onClick={() => {
                                            if (day === 'vishnu_1')
                                                setDay('vishnu_4');
                                            else if (day === 'vishnu_2')
                                                setDay('vishnu_1');
                                            else if (day === 'vishnu_3')
                                                setDay('vishnu_2');
                                            else if (day === 'vishnu_4')
                                                setDay('vishnu_3');
                                        }}
                                    >
                                        {'<'}
                                    </span>
                                    <p>
                                        {day === 'vishnu_1'
                                            ? 'Day 1'
                                            : day === 'vishnu_2'
                                            ? 'Day 2'
                                            : day === 'vishnu_3'
                                            ? 'Day 3'
                                            : 'Day 4'}
                                    </p>
                                    <span
                                        className="select-none cursor-pointer"
                                        onClick={() => {
                                            if (day === 'vishnu_1')
                                                setDay('vishnu_2');
                                            else if (day === 'vishnu_2')
                                                setDay('vishnu_3');
                                            else if (day === 'vishnu_3')
                                                setDay('vishnu_4');
                                            else if (day === 'vishnu_4')
                                                setDay('vishnu_1');
                                        }}
                                    >
                                        {'>'}
                                    </span>
                                </div>
                                <SponsorFooter />
                            </div>
                        </div>
                    </div>
                </div>
            </Main>
            <div className="fixed z-50 bottom-6 left-4 right-4 h-[72px] bg-neutral-50 rounded-2xl shadow-faq flex items-center px-5 py-3 space-x-2">
                <Link
                    href="/schedule"
                    className="bg-primary-500 text-white px-4 py-1.5 w-full flex justify-center items-center font-bold rounded-xl h-full"
                >
                    ตารางกิจกรรม
                </Link>
                <Link
                    href="/map"
                    className="text-primary-500 px-4 py-1.5 w-full flex justify-center items-center font-bold rounded-xl h-full"
                >
                    แผนผังงาน
                </Link>
            </div>
        </>
    );
};

export default Schedule;
