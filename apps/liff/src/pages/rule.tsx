import LoginBackground from '@/public/images/assets/login_background.png';
import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Rule: NextPage = () => {
    return (
        <>
            <Head>
                <title>กฏค่ายวิษณุฯ</title>
            </Head>
            <div className="relative h-full w-full grid place-content-center bg-primary-800 bg-[url('/images/grained_background.jpg')] bg-repeat bg-[length:300px_300px] text-neutral-50">
                fjasldfk
            </div>
            <div
                className={`z-10 absolute -top-44 -bottom-44 -left-44 -right-44 rounded-[100%] pointer-events-none`}
                style={{
                    background:
                        'radial-gradient(50% 50.00% at 50% 50.00%, rgba(19, 5, 49, 0.00) 27.04%, #130531 73.56%)',
                }}
            ></div>
            <div className="z-20 absolute top-0 left-0 right-0 bottom-0 pointer-events-none select-none">
                <div className="relative flex justify-center items-center w-full h-full">
                    <Image
                        src={LoginBackground}
                        alt=""
                        fill
                        className="scale-105 object-cover"
                    />
                </div>
            </div>
        </>
    );
};

export default Rule;
