import { useState } from 'react';
import type { NextPage } from 'next';
import Image from 'next/image';
import GrainBackground from '@/public/images/GrainBackground.svg';
import Member from './conponent/members';
const freshyMembers = [
    // {
    //     id: '1',
    //     profileImg: 'apps/liff/public/images/nongGavin.jpg',
    //     name: 'NongTouch',
    //     line: 'natouchf40',
    //     ig: 'touch_cri',
    // }
    {
        id: '1',
        profileImg: 's',
        name: 'NongTouch',
        line: 'natouchf40',
        ig: 'touch_cri',
    },
    {
        id: '1',
        profileImg: 's',
        name: 'NongTouch',
        line: 'natouchf40',
        ig: 'touch_cri',
    },
    {
        id: '1',
        profileImg: 's',
        name: 'NongTouch',
        line: 'natouchf40',
        ig: 'touch_cri',
    },
    {
        id: '1',
        profileImg: 's',
        name: 'NongTouch',
        line: 'natouchf40',
        ig: 'touch_cri',
    },
    {
        id: '1',
        profileImg: 's',
        name: 'NongTouch',
        line: 'natouchf40',
        ig: 'touch_cri',
    },
    {
        id: '1',
        profileImg: 's',
        name: 'NongTouch',
        line: 'natouchf40',
        ig: 'touch_cri',
    },
    {
        id: '1',
        profileImg: 's',
        name: 'NongTouch',
        line: 'natouchf40',
        ig: 'touch_cri',
    },
    {
        id: '1',
        profileImg: 's',
        name: 'NongTouch',
        line: 'natouchf40',
        ig: 'touch_cri',
    },
];
const sophomoreMembers = [
    {
        id: '1',
        profileImg: 's',
        name: 'P-Touch',
        line: 'natouchf40',
        ig: 'touch_cri',
    },
];

const Rules: NextPage = () => {
    const [freshy, setIsOpen] = useState(true);
    const toggle = () => setIsOpen((prev) => !prev);
    return (
        <div className="w-screen min-h-screen flex flex-col items-center px-7 py-16">
            {freshy ? (
                <div className="w-full">
                    <div className="font-bold text-sm flex font-ibm w-full h-9 justify-center z-30">
                        <div
                            className="text-gray-400 flex w-32 justify-center items-center mx-3"
                            onClick={toggle}
                        >
                            สมาชิก 106
                        </div>
                        <div className="bg-white flex rounded-2xl w-32 text-center justify-center items-center mx-3">
                            สมาชิก 107
                        </div>
                    </div>
                    <ul className="w-full mt-6 flex items-center flex-col gap-5 font-ibm pb-32 z-10">
                        {freshyMembers.map((freshyMembers) => (
                            <Member
                                key={freshyMembers.id}
                                profileImg={freshyMembers.profileImg}
                                name={freshyMembers.name}
                                line={freshyMembers.line}
                                ig={freshyMembers.ig}
                            />
                        ))}
                    </ul>
                </div>
            ) : (
                <div className="w-full">
                    <div className="font-bold text-sm flex font-ibm w-full h-9 justify-center">
                        <div className="bg-white flex rounded-2xl w-32 text-center justify-center items-center mx-3">
                            สมาชิก 106
                        </div>
                        <div
                            className="text-gray-400 flex w-32 center justify-center items-center mx-3"
                            onClick={toggle}
                        >
                            สมาชิก 107
                        </div>
                    </div>
                    <ul className="w-full mt-6 flex items-center flex-col gap-5 font-ibm pb-32 z-10">
                        {sophomoreMembers.map((sophomoreMembers) => (
                            <Member
                                key={sophomoreMembers.id}
                                profileImg={sophomoreMembers.profileImg}
                                name={sophomoreMembers.name}
                                line={sophomoreMembers.line}
                                ig={sophomoreMembers.ig}
                            />
                        ))}
                    </ul>
                </div>
            )}

            <div className="fixed flex rounded-2xl shadow-md bg-gray-300 bg-opacity-30 bottom-12 w-4/5 h-12 justify-center">
                <div className="bg-white flex rounded-2xl w-24 justify-center items-center m-2"></div>
                <div className="bg-white flex rounded-2xl w-24 justify-center items-center m-2"></div>
                <div className="bg-white flex rounded-2xl w-24 justify-center items-center m-2"></div>
            </div>
            <div className="fixed inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-black pointer-events-none" />
            <Image
                src={GrainBackground}
                alt="Background"
                className="fixed top-0 left-0 -z-50 h-screen w-full object-cover"
                loading="lazy"
            />
        </div>
    );
};

export default Rules;
