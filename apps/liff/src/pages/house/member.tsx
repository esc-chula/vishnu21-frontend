import { useHouse } from '@/contexts/HouseContext';
import Sponsor1 from '@/public/images/sponsors/gcme_logo.png';
import Sponsor2 from '@/public/images/sponsors/fujifilm_logo.png';
import Sponsor3 from '@/public/images/sponsors/instax_logo.png';
import Sponsor4 from '@/public/images/sponsors/major_logo.png';
import Sponsor5 from '@/public/images/sponsors/bright_hair_logo.png';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { FiChevronLeft, FiUser } from 'react-icons/fi';

const Member: NextPage = () => {
    const { houseData } = useHouse();

    return (
        <>
            <Head>
                <title>สมาชิกบ้าน{houseData.name}</title>
            </Head>
            <div className="z-20 absolute top-0 left-0 right-0 bottom-0 flex flex-col space-y-3 px-4">
                <div
                    className="relative flex justify-center items-center pt-6 pb-2"
                    style={{
                        color:
                            houseData.theme === 'dark'
                                ? houseData.color
                                : houseData.altColor,
                    }}
                >
                    <Link href="/house" className="absolute left-0 text-3xl">
                        <FiChevronLeft />
                    </Link>
                    <h1 className="font-semibold">
                        สมาชิกบ้าน{houseData.name}
                    </h1>
                    <Link
                        href="/house/profile"
                        className="absolute right-2 text-2xl"
                    >
                        <FiUser />
                    </Link>
                </div>
                <div className="px-6 pt-2 pb-10 -mx-4 space-y-5 h-full overflow-y-auto">
                    {houseData.members.map((member) => (
                        <div
                            key={member.userId}
                            className="flex justify-between items-center px-3.5 py-2.5 bg-neutral-50 rounded-2xl text-sm"
                            style={{
                                boxShadow: `0px 4px 10px 0px ${houseData.altColor}33, 0px -4px 20px 0px ${houseData.altColor}1A inset`,
                            }}
                        >
                            <div className="flex items-center space-x-3">
                                {member.profilePicture ? (
                                    <div className="relative w-10 aspect-square rounded-full overflow-hidden">
                                        <Image
                                            src={member.profilePicture}
                                            alt="Profile Picture"
                                            fill
                                        />
                                    </div>
                                ) : (
                                    <div className="relative w-10 aspect-square bg-gray-300 rounded-full"></div>
                                )}{' '}
                                <p>
                                    {member.nickname
                                        ? `${member.name} (${member.nickname})`
                                        : member.name}
                                </p>
                            </div>
                            <div>
                                <p></p>
                            </div>
                        </div>
                    ))}

                    <div
                        className="flex flex-col items-center font-medium text-xs space-y-2"
                        style={{
                            color:
                                houseData.theme === 'dark'
                                    ? houseData.color
                                    : houseData.altColor,
                        }}
                    >
                        <p>สนับสนุนด้วย</p>
                        <div className="flex items-center space-x-2">
                            <Image
                                src={Sponsor1}
                                alt="Sponsor"
                                className="w-10"
                            />
                            <Image
                                src={Sponsor2}
                                alt="Sponsor"
                                className="w-10"
                            />
                            <Image
                                src={Sponsor3}
                                alt="Sponsor"
                                className="w-10"
                            />
                            <Image
                                src={Sponsor4}
                                alt="Sponsor"
                                className="w-10"
                            />
                            <Image
                                src={Sponsor5}
                                alt="Sponsor"
                                className="w-10"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Member;
