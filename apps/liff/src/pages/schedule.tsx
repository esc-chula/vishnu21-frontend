import ScheduleData from '@/constants/schedule-data.json';
import Main from '@/layouts/Main';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import FDLogo from '@/public/images/logo/firstdate_light.svg';
import VNLogo from '@/public/images/logo/vishnu_light.svg';
import { useEffect } from 'react';

const Schedule: NextPage = () => {
    const selector = (date: number) => {
        if (date > new Date('2023-07-26T23:30:00+07:00').getTime())
            return 'vishnu_4';
        if (date > new Date('2023-07-25T22:45:00+07:00').getTime())
            return 'vishnu_3';
        if (date > new Date('2023-07-24T22:45:00+07:00').getTime())
            return 'vishnu_2';
        if (date > new Date('2023-07-23T00:00:00+07:00').getTime())
            return 'vishnu_1';
        else return 'first_date';
    };

    // const data = useState(null)
    const data = ScheduleData[selector(Date.now())];
    useEffect(() => {
        console.log(selector(Date.now()));
    });
    return (
        <>
            <Head>
                <title>กำหนดการกิจกรรม</title>
            </Head>
            <Main foregroundImage="full2">
                <div className="w-full h-full p-6">
                    <div className="w-full h-full border-white border-[3px] rounded-3xl flex flex-col items-center">
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
                        <div className="flex flex-col overflow-y-auto space-y-4 mt-10 pl-8 pr-5 justify-center mb-[100px]">
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
