import type { NextPage } from 'next';
import Image from 'next/image';

import GrainBackground from '/public/images/grain-background.svg';
import Decorate from '/public/images/decorate.svg';
import { AiFillPhone } from 'react-icons/ai';

// TODO: fetch from API
const contacts = [
    {
        id: '1',
        name: 'Lorem',
        phone: '0812345678',
        remark: null,
        line: 'lineid',
        photo_url: '/images/branches1.svg',
    },
    {
        id: '2',
        name: 'Lorem',
        phone: '0812345678',
        remark: null,
        line: 'lineid',
        photo_url: '/images/spore1.svg',
    },
    {
        id: '3',
        name: 'Lorem',
        phone: '0812345678',
        remark: 'Lorem ipsum dolor',
        line: 'lineid',
        photo_url: '/images/branches1.svg',
    },
    {
        id: '4',
        name: 'Lorem',
        phone: '0812345678',
        remark: null,
        line: 'lineid',
        photo_url: '/images/spore1.svg',
    },
    {
        id: '5',
        name: 'Lorem',
        phone: '0812345678',
        remark: null,
        line: 'lineid',
        photo_url: '/images/branches1.svg',
    },
    {
        id: '6',
        name: 'Lorem',
        phone: '0812345678',
        remark: null,
        line: 'lineid',
        photo_url: '/images/spore1.svg',
    },
    {
        id: '7',
        name: 'Lorem',
        phone: '0812345678',
        remark: 'Lorem ipsum dolor',
        line: 'lineid',
        photo_url: '/images/branches1.svg',
    },
];

const EmergencyContactList: NextPage = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col items-center px-7 pt-16 pb-48 bg-gradient-to-b from-transparent to-primary-900">
            <Image
                src={GrainBackground}
                alt="background"
                className="fixed top-0 left-0 -z-10 h-screen w-full object-cover"
            />
            <Image
                src={Decorate}
                alt="background"
                className="fixed bottom-0 left-0 w-full max-h-48 object-cover overflow-visible"
            />
            <h1 className="font-bold text-white text-xl font-baijam mb-6">
                ติดต่อฉุกเฉิน
            </h1>
            <div className="flex flex-col justify-center gap-2 items-center w-full">
                {contacts.map((contact) => (
                    <div
                        key={contact.id}
                        className="w-full flex items-center justify-between bg-secondary-50/30 rounded-3xl px-6 py-2 text-white z-0"
                    >
                        <div className="w-1/6 flex items-center justify-center relative mr-7">
                            <Image
                                src={contact.photo_url}
                                alt=""
                                width={48}
                                height={48}
                                className="z-0"
                            />
                        </div>
                        <div className="w-4/6 flex flex-col gap-1">
                            <h1 className="font-bold text-sm font-ibm">
                                {contact.name}
                            </h1>
                            <div className="flex">
                                <h1 className="font-semibold text-xs font-ibm w-1/3">
                                    เบอร์
                                </h1>
                                <h1 className="font-semibold text-xs font-ibm">
                                    {contact.phone}
                                </h1>
                            </div>
                            <div className="flex">
                                <h1 className="font-semibold text-xs font-ibm w-1/3">
                                    Line
                                </h1>
                                <h1 className="font-semibold text-xs font-ibm">
                                    {contact.line}
                                </h1>
                            </div>
                            {contact.remark && (
                                <div className="flex">
                                    <h1 className="font-semibold text-xs font-ibm w-1/3">
                                        หมายเหตุ
                                    </h1>
                                    <h1 className="font-semibold text-xs font-ibm">
                                        {contact.remark}
                                    </h1>
                                </div>
                            )}
                        </div>
                        <div className="w-1/6 flex items-center justify-center">
                            <button className="w-8 h-8 flex items-center justify-center">
                                <AiFillPhone className="w-5 h-5 text-white" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default EmergencyContactList;
