import ContactCard from '@/components/ContactCard';
import Main from '@/layouts/Main';
import axios from '@/utils/fetcher';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { IGroup } from 'types';

const Contact: NextPage = () => {
    const [houseData, setHouseData] = useState<IGroup | null>(null);

    useEffect(() => {
        setHouseData(
            localStorage.getItem('houseData')
                ? JSON.parse(localStorage.getItem('houseData'))
                : null
        );
    }, []);

    return (
        <>
            <Head>
                <title>ติดต่อฉุกเฉิน</title>
            </Head>
            <Main foregroundImage="full2">
                <h1 className="font-bold text-2xl mt-12">ติดต่อฉุกเฉิน</h1>
                <div className="flex flex-col items-center w-full h-full overflow-y-auto pb-20 px-10 mt-6">
                    {houseData && (
                        <div className="flex flex-col items-center w-full">
                            <h3 className="font-medium text-sm opacity-70 mb-4">
                                พี่บ้าน{houseData.shortName}
                            </h3>
                            <ContactCard name="" department="" tel="" line="" />
                            <ContactCard name="" department="" tel="" line="" />
                        </div>
                    )}
                    <div className="flex flex-col items-center w-full">
                        <h3 className="font-medium text-sm opacity-70 mb-4">
                            ฝ่ายพยาบาล
                        </h3>
                        <ContactCard
                            name="พี่โฟล์ค"
                            department="พยาบาลกลาง"
                            tel="095-945-9928"
                            line="folkieszarama"
                        />
                    </div>
                    <div className="flex flex-col items-center w-full">
                        <h3 className="font-medium text-sm opacity-70 mb-4">
                            ฝ่ายทะเบียน
                        </h3>
                        <ContactCard
                            name="พี่มาร์ค"
                            department="ทะเบียนกลาง"
                            tel="086-868-8242"
                            line="086-868-8242"
                        />
                    </div>
                </div>
            </Main>
        </>
    );
};

export default Contact;
