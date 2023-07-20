import ScheduleData from '@/constants/schedule-data.json';
import Main from '@/layouts/Main';
import liff from '@line/liff';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Schedule: NextPage = () => {
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
                                src={require(`@/public/images/logo/firstdate_light.svg`)}
                                alt="First Date Logo"
                                fill
                            />
                        </div>
                        <div className="flex flex-col space-y-4 mt-10 pl-8 pr-5">
                            {ScheduleData.first_data.map((schedule, index) => (
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
        </>
    );
};

export default Schedule;
