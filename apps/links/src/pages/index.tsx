import Background from '@/components/Background';
import Center from '@/components/Center';
import Vignette from '@/components/Vignette';
import { vol1 } from 'assets';
import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
    return (
        <>
            <Vignette />
            <div className="z-10 relative w-full h-full">
                <Image
                    src={vol1.cloud1}
                    alt="Cloud 1"
                    className="z-10 absolute -top-4 -right-44"
                    width={317}
                    height={144}
                />
                <Image
                    src={vol1.cloud1}
                    alt="Cloud 1"
                    className="absolute -top-[66px] -right-8"
                    width={317}
                    height={144}
                />
                <Image
                    src={vol1.ticket1}
                    alt="Ticket"
                    className="absolute -left-6 -bottom-10"
                    width={236}
                    height={168}
                />
                <Image
                    src={vol1.leaf3}
                    alt="Leaf 3"
                    className="absolute -bottom-6 left-[88px] mr-28"
                    width={108}
                    height={152}
                />
                <Center axis="y">
                    <Image
                        src={vol1.key}
                        alt="Key"
                        className="absolute -left-12 rotate-[20deg]"
                        width={129}
                        height={301}
                    />
                </Center>
            </div>
            <Background />
        </>
    );
};

export default Home;
