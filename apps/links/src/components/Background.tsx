import { vol1 } from 'assets';
import Image from 'next/image';
import Vignette from './Vignette';
import Center from './Center';
import BackgroundImage from './BackgroundImage';

const Background: React.FC = () => {
    return (
        <div className="fixed flex justify-center top-0 left-0 right-0 bottom-0">
            <div className="max-w-[500px] relative w-full h-full overflow-hidden">
                <div className="z-30 absolute w-full h-full">
                    <Center axis="x">
                        <Image
                            src={vol1.leaf6}
                            alt="Leaf 6"
                            className="z-[9] absolute -bottom-[76px] mr-40"
                            width={98}
                            height={168}
                        />
                    </Center>
                    <Image
                        src={vol1.leaf11}
                        alt="Leaf 11"
                        className="z-[8] absolute -bottom-6 left-4"
                        width={110}
                        height={180}
                    />
                    <Center axis="x">
                        <Image
                            src={vol1.leaf9}
                            alt="Leaf 9"
                            className="z-[7] absolute -bottom-[86px]"
                            width={113}
                            height={183}
                        />
                    </Center>
                    <Image
                        src={vol1.leaf9}
                        alt="Leaf 9"
                        className="z-[6] absolute -bottom-8 -left-14"
                        width={127}
                        height={239}
                    />
                    <Image
                        src={vol1.leaf8}
                        alt="Leaf 8"
                        className="z-[5] absolute -bottom-[84px] right-24 rotate-[17deg]"
                        width={131}
                        height={219}
                    />
                    <Image
                        src={vol1.mushroom4}
                        alt="Mushroom 4"
                        className="z-[4] absolute -bottom-14 -left-16"
                        width={294}
                        height={95}
                    />
                    <Image
                        src={vol1.mushroom3}
                        alt="Mushroom 3"
                        className="z-[3] absolute -bottom-10 right-8"
                        width={172}
                        height={182}
                    />
                    <Image
                        src={vol1.leaf2}
                        alt="Leaf 2"
                        className="z-[2] absolute -bottom-8 -right-20"
                        width={155}
                        height={274}
                    />
                    <Image
                        src={vol1.leaf13}
                        alt="Leaf 13"
                        className="z-[1] absolute -bottom-10 right-4"
                        width={154}
                        height={221}
                    />
                    <Image
                        src={vol1.leaf15}
                        alt="Leaf 15"
                        className="absolute -bottom-6 -right-14"
                        width={194}
                        height={248}
                    />
                    <div
                        className="z-20 absolute w-[134px] h-[134px] -top-16 -right-10 rounded-full bg-[#f3d79c] opacity-70 blur-[8px] mix-blend-screen"
                        style={{
                            boxShadow: '0px 4px 100px 0px #D9AB9F',
                        }}
                    ></div>
                    <Image
                        src={vol1.leaf6}
                        alt="Leaf 6"
                        className="z-10 absolute top-[275px] -right-16 -rotate-[40deg]"
                        width={98}
                        height={168}
                    />
                    <Image
                        src={vol1.mushroom2}
                        alt="Mushroom 1"
                        className="absolute top-[200px] -right-[100px] -rotate-[54deg]"
                        width={185}
                        height={174}
                    />
                    <Image
                        src={vol1.spore1}
                        alt="Spore 1"
                        className="z-10 absolute top-[120px] -right-16"
                        width={150}
                        height={142}
                    />
                    <Image
                        src={vol1.branches1}
                        alt="Branches 1"
                        className="absolute -top-48 -left-0 rotate-[75deg]"
                        width={231}
                        height={384}
                    />
                    <Image
                        src={vol1.branches1}
                        alt="Branches 1"
                        className="z-10 absolute -top-10 -left-[82px]"
                        width={170}
                        height={320}
                    />
                </div>
                <Vignette />
                <div className="z-10 absolute w-full h-full">
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
                <BackgroundImage />
            </div>
        </div>
    );
};

export default Background;
