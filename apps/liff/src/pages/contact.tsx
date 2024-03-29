import ContactCard from '@/components/ContactCard';
import Main from '@/layouts/Main';
import axios from '@/utils/fetcher';
import { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { IGroup } from 'types';

const Contact: NextPage = () => {
    const [houseData, setHouseData] = useState<IGroup | null>(null);
    const [houseContact, setHouseContact] = useState<
        {
            name: string;
            department: string;
            line: string;
            tel: string;
        }[]
    >([]);

    useEffect(() => {
        setHouseData(
            localStorage.getItem('houseData')
                ? JSON.parse(localStorage.getItem('houseData'))
                : null
        );
    }, []);

    useEffect(() => {
        if (houseData) {
            axios
                .get(`/groups/contact/${houseData.groupId}`)
                .then((res) => {
                    if (res.data) setHouseContact(res.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, [houseData]);

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
                                พี่ๆบ้าน{houseData.shortName}
                            </h3>
                            {houseContact.length > 0 ? (
                                <ContactCard
                                    name=""
                                    department=""
                                    tel=""
                                    line=""
                                />
                            ) : (
                                <h3 className="font-light text-sm opacity-70 mb-4">
                                    ไม่พบข้อมูลของพี่บ้าน
                                </h3>
                            )}
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
                            line="vikimark.king"
                        />
                    </div>
                </div>
            </Main>
        </>
    );
};

export default Contact;
