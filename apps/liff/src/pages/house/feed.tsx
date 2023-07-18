import { useHouse } from '@/contexts/HouseContext';
import Sponsor1 from '@/public/images/sponsors/gcme_logo.png';
import Sponsor2 from '@/public/images/sponsors/fujifilm_logo.png';
import Sponsor3 from '@/public/images/sponsors/instax_logo.png';
import Sponsor4 from '@/public/images/sponsors/major_logo.png';
import Sponsor5 from '@/public/images/sponsors/bright_hair_logo.png';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FiChevronLeft, FiInstagram } from 'react-icons/fi';
import Image from 'next/image';

const Feed: NextPage = () => {
    const {
        name,
        color,
        alt_color,
        theme,
        instagram_link,
        line_invitation_link,
    } = useHouse();

    return (
        <>
            <Head>
                <title>Feed บ้าน{name}</title>
            </Head>

            <div className="z-20 absolute top-0 left-0 right-0 bottom-0 flex flex-col space-y-3 px-4">
                <div
                    className="relative flex justify-center items-center pt-6 pb-2"
                    style={{
                        color: theme === 'dark' ? color : alt_color,
                    }}
                >
                    <Link href="/house" className="absolute left-0 text-3xl">
                        <FiChevronLeft />
                    </Link>
                    <h1 className="font-semibold">Feed บ้าน{name}</h1>
                    <a
                        href={instagram_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute right-2 text-2xl"
                    >
                        <FiInstagram />
                    </a>
                </div>
                <div className="px-6 pt-2 pb-10 -mx-4 space-y-8 h-full overflow-y-auto">
                    {/* posts */}
                    <div
                        className="bg-neutral-50 rounded-2xl p-4 text-sm text-neutral-800"
                        style={{
                            boxShadow: `0px 4px 10px 0px ${alt_color}33, 0px -4px 20px 0px ${alt_color}1A inset`,
                        }}
                    >
                        <h1 className="font-medium text-base">
                            ยินดีต้อนรับน้อง ๆ ทุกคนเข้าสู่บ้าน{name}นะงับบ
                        </h1>
                        <p>
                            ถ้าหากคนไหนได้แอดไลน์ OA มาแล้วก็ฝากชวนเพื่อน ๆ
                            มาด้วยนะะ
                        </p>
                        <br />
                        <a
                            href={line_invitation_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline"
                        >
                            {line_invitation_link}
                        </a>
                        <br />
                        <br />
                        <p>
                            อันนี้ก็เป็นลิงก์สำหรับเข้ากลุ่มไลน์ของบ้านเรานะ
                            กลุ่มนี้จะเป็นกลุ่มรวมน้อง ๆ และพี่ ๆ
                            ของบ้านเราทุกคนเลยย อย่าลืมเข้าด้วยนะฮ้าฟฟู่~
                        </p>
                    </div>

                    {/* sponsor */}
                    <div
                        className="flex flex-col items-center font-medium text-xs space-y-2"
                        style={{
                            color: theme === 'dark' ? color : alt_color,
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

export default Feed;
