import { useAuth } from '@/contexts/AuthContext';
import { useHouse } from '@/contexts/HouseContext';
import Sponsor1 from '@/public/images/sponsors/gcme_logo.png';
import Sponsor2 from '@/public/images/sponsors/fujifilm_logo.png';
import Sponsor3 from '@/public/images/sponsors/instax_logo.png';
import Sponsor4 from '@/public/images/sponsors/major_logo.png';
import Sponsor5 from '@/public/images/sponsors/bright_hair_logo.png';
import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FaLine } from 'react-icons/fa';
import { FiChevronLeft, FiInstagram, FiUser } from 'react-icons/fi';

const Profile: NextPage = () => {
    const { user } = useAuth();
    const { houseData } = useHouse();

    return (
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
                <Link href="/house/member" className="absolute left-0 text-3xl">
                    <FiChevronLeft />
                </Link>
                <h1 className="font-semibold opacity-0">โปรไฟล์</h1>
            </div>
            <div className="px-6 pt-2 pb-10 -mx-4 space-y-5 h-full overflow-y-auto flex flex-col justify-between items-center">
                <div className="flex flex-col items-center space-y-6">
                    <div
                        className="relative w-36 h-36 rounded-full border-[8px] border-white bg-gray-200 grid place-content-center overflow-hidden"
                        style={{
                            boxShadow: `0px 4px 10px 0px ${houseData.altColor}33, 0px -4px 20px 0px ${houseData.altColor}1A inset`,
                        }}
                    >
                        {user.profilePicture ? (
                            <Image
                                src={user.profilePicture}
                                alt="Profile Picture"
                                fill
                            />
                        ) : (
                            <FiUser className="text-9xl pt-4 text-gray-400 opacity-50" />
                        )}
                    </div>
                    <div
                        className="flex flex-col items-center space-y-1 font-semibold"
                        style={{
                            color:
                                houseData.theme === 'dark'
                                    ? houseData.color
                                    : houseData.altColor,
                        }}
                    >
                        <h2 className="text-xl font-bold">
                            ธนดล ศานติสรร (ปูน)
                        </h2>
                        <p>ภาค ICE</p>
                    </div>
                    <div className="w-60 pt-2 space-y-6">
                        <div
                            className="bg-white h-12 rounded-2xl flex items-center space-x-3 text-neutral-300 px-3 font-semibold"
                            style={{
                                boxShadow: `0px 4px 10px 0px ${houseData.altColor}33, 0px -4px 6px 0px ${houseData.altColor}1A inset`,
                            }}
                        >
                            <FiInstagram className="text-2xl" />
                            <p>Instagram...</p>
                        </div>
                        <div
                            className="bg-white h-12 rounded-2xl flex items-center space-x-3 text-neutral-300 px-3 font-semibold"
                            style={{
                                boxShadow: `0px 4px 10px 0px ${houseData.altColor}33, 0px -4px 6px 0px ${houseData.altColor}1A inset`,
                            }}
                        >
                            <FaLine className="text-2xl" />
                            <p>Line ID...</p>
                        </div>
                    </div>
                </div>
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
                        <Image src={Sponsor1} alt="Sponsor" className="w-10" />
                        <Image src={Sponsor2} alt="Sponsor" className="w-10" />
                        <Image src={Sponsor3} alt="Sponsor" className="w-10" />
                        <Image src={Sponsor4} alt="Sponsor" className="w-10" />
                        <Image src={Sponsor5} alt="Sponsor" className="w-10" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
