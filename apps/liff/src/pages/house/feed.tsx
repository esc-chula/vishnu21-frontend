import { useHouse } from '@/contexts/HouseContext';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { FiChevronLeft, FiInstagram } from 'react-icons/fi';

const Feed: NextPage = () => {
    const { name, color, alt_color, theme } = useHouse();

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
                        href={'https://www.instagram.com/vishnu21st'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute right-2 text-2xl"
                    >
                        <FiInstagram />
                    </a>
                </div>
                <div className="px-6 pt-2 pb-10 -mx-4 space-y-8 h-full overflow-y-auto">
                    <div
                        className="h-40 bg-neutral-50 rounded-2xl"
                        style={{
                            boxShadow: `0px 4px 10px 0px ${alt_color}33, 0px -4px 20px 0px ${alt_color}1A inset`,
                        }}
                    ></div>
                    <div
                        className="h-40 bg-neutral-50 rounded-2xl"
                        style={{
                            boxShadow: `0px 4px 10px 0px ${alt_color}33, 0px -4px 20px 0px ${alt_color}1A inset`,
                        }}
                    ></div>
                    <div
                        className="h-40 bg-neutral-50 rounded-2xl"
                        style={{
                            boxShadow: `0px 4px 10px 0px ${alt_color}33, 0px -4px 20px 0px ${alt_color}1A inset`,
                        }}
                    ></div>
                    <div
                        className="h-40 bg-neutral-50 rounded-2xl"
                        style={{
                            boxShadow: `0px 4px 10px 0px ${alt_color}33, 0px -4px 20px 0px ${alt_color}1A inset`,
                        }}
                    ></div>
                    <div
                        className="h-40 bg-neutral-50 rounded-2xl"
                        style={{
                            boxShadow: `0px 4px 10px 0px ${alt_color}33, 0px -4px 20px 0px ${alt_color}1A inset`,
                        }}
                    ></div>
                </div>
            </div>
        </>
    );
};

export default Feed;
