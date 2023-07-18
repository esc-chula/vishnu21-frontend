import HouseData from '@/constants/house-data.json';
import { useAuth } from '@/contexts/AuthContext';
import { useHouse } from '@/contexts/HouseContext';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

const House: NextPage = () => {
    const router = useRouter();
    const { user } = useAuth();
    const { name, group, color, alt_color } = useHouse();

    return (
        <>
            <Head>
                <title>บ้าน{name}</title>
            </Head>
            <div className="z-20 absolute top-0 bottom-0 left-0 right-0 flex flex-col justify-center items-center space-y-10">
                <div className="max-w-[190px] aspect-[421/765] w-full relative border-white border-[10px]">
                    <Image
                        src={require(`@/public/images/banners/${group}.png`)}
                        alt="Flag Image"
                        fill
                        className="object-fill"
                    />
                </div>
                <div className="flex flex-col items-center space-y-7">
                    <div
                        className="text-center"
                        style={{
                            color: color,
                        }}
                    >
                        <h1 className="flex flex-col space-y-2">
                            <span className="font-semibold">
                                ยินดีต้องรับน้อง{user.nickname}สู่บ้าน
                            </span>
                            <span className="text-4xl font-bold">{name}</span>
                        </h1>
                    </div>
                    <div
                        className="flex items-center space-x-4"
                        style={{
                            color: alt_color,
                        }}
                    >
                        <button
                            onClick={() => router.push('/house/feed')}
                            className="bg-neutral-50 flex justify-center w-28 py-2 rounded-2xl font-semibold text-sm"
                            style={{
                                boxShadow: `0px 4px 10px 0px ${alt_color}33, 0px -4px 6px 0px ${alt_color}1A inset`,
                            }}
                        >
                            Feed บ้าน
                        </button>
                        <button
                            onClick={() => router.push('/house/member')}
                            className="bg-neutral-50 flex justify-center w-28 py-2 rounded-2xl font-semibold text-sm"
                            style={{
                                boxShadow: `0px 4px 10px 0px ${alt_color}33, 0px -4px 6px 0px ${alt_color}1A inset`,
                            }}
                        >
                            สมาชิกบ้าน
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default House;
