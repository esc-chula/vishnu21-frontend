import Layout from '@/components/Layout';
import { logo } from 'assets';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';

const Home: NextPage = () => {
    return (
        <Layout>
            <div className="flex flex-col items-center pt-28 space-y-20">
                {/* informations */}
                <div className="flex flex-col items-center space-y-5">
                    {/* icon */}
                    <div className="flex items-center space-x-3">
                        <Image
                            src={logo.firstdate}
                            alt="First Date Logo"
                            width={62}
                            height={47}
                        />
                        <div className="h-12 w-px bg-white" />
                        <Image
                            src={logo.vishnu}
                            alt="Vishnu Logo"
                            width={138}
                            height={38}
                        />
                    </div>

                    {/* information */}
                    <div className="text-center space-y-1">
                        <h1 className="font-bold text-xl">@vishnu21st</h1>
                        <h2 className="font-semibold text-sm">
                            งาน Intania First Date 2023
                            <br />
                            และค่ายวิษณุกรรมบุตรครั้งที่ 21
                        </h2>
                    </div>
                </div>

                {/* links */}
                <div className="flex flex-col w-80 space-y-10">
                    <Link
                        href="/"
                        className="w-full h-12 bg-white rounded-2xl text-primary-900 flex items-center px-4 font-semibold shadow-button hover:scale-105 duration-300 ease-in-out"
                    >
                        LINE OA
                    </Link>
                    <Link
                        href="/"
                        className="w-full h-12 bg-white rounded-2xl text-primary-900 flex items-center px-4 font-semibold shadow-button hover:scale-105 duration-300 ease-in-out"
                    >
                        ฟอร์มสอบถามความต้องการเข้าร่วมงาน
                    </Link>
                </div>
            </div>
        </Layout>
    );
};

export default Home;
