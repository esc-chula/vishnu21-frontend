import { vol1 } from 'assets';
import Image from 'next/image';
import Vignette from './Vignette';
import Center from './Center';
import BackgroundImage from './BackgroundImage';
import { useState } from 'react';
import LoadingImage from './LoadingImage';
import Moon from './Moon';

const Background: React.FC = () => {
    return (
        <div className="fixed flex justify-center top-0 left-0 right-0 bottom-0">
            <div className="max-w-[500px] relative w-full h-full overflow-hidden bg-primary-800">
                <div className="z-30 absolute w-full h-full">
                    <Center axis="x">
                        <LoadingImage
                            src={vol1.leaf6}
                            className="z-[9] absolute -bottom-[76px] mr-40"
                            width={98}
                            height={168}
                        />
                    </Center>
                    <LoadingImage
                        src={vol1.leaf11}
                        className="z-[8] absolute -bottom-6 left-4"
                        width={110}
                        height={180}
                    />
                    <Center axis="x">
                        <LoadingImage
                            src={vol1.leaf9}
                            className="z-[7] absolute -bottom-[86px]"
                            width={113}
                            height={183}
                        />
                    </Center>
                    <LoadingImage
                        src={vol1.leaf9}
                        className="z-[6] absolute -bottom-8 -left-14"
                        width={127}
                        height={239}
                    />
                    <LoadingImage
                        src={vol1.leaf8}
                        className="z-[5] absolute -bottom-[84px] right-24 rotate-[17deg]"
                        width={131}
                        height={219}
                    />
                    <LoadingImage
                        src={vol1.mushroom4}
                        className="z-[4] absolute -bottom-14 -left-16"
                        width={294}
                        height={95}
                    />
                    <LoadingImage
                        src={vol1.mushroom3}
                        className="z-[3] absolute -bottom-10 right-8"
                        width={172}
                        height={182}
                    />
                    <LoadingImage
                        src={vol1.leaf2}
                        className="z-[2] absolute -bottom-8 -right-20"
                        width={155}
                        height={274}
                    />
                    <LoadingImage
                        src={vol1.leaf13}
                        className="z-[1] absolute -bottom-10 right-4"
                        width={154}
                        height={221}
                    />
                    <LoadingImage
                        src={vol1.leaf15}
                        className="absolute -bottom-6 -right-14"
                        width={194}
                        height={248}
                    />
                    <Moon />
                    <LoadingImage
                        src={vol1.leaf6}
                        className="z-10 absolute top-[275px] -right-16 -rotate-[40deg]"
                        width={98}
                        height={168}
                    />
                    <LoadingImage
                        src={vol1.mushroom2}
                        className="absolute top-[200px] -right-[100px] -rotate-[54deg]"
                        width={185}
                        height={174}
                    />
                    <LoadingImage
                        src={vol1.spore1}
                        className="z-10 absolute top-[120px] -right-16"
                        width={150}
                        height={142}
                    />
                    <LoadingImage
                        src={vol1.branches1}
                        className="absolute -top-48 -left-0 rotate-[75deg]"
                        width={231}
                        height={384}
                    />
                    <LoadingImage
                        src={vol1.branches1}
                        className="z-10 absolute -top-10 -left-[82px]"
                        width={170}
                        height={320}
                    />
                </div>
                <Vignette />
                <div className="z-10 absolute w-full h-full">
                    <LoadingImage
                        src={vol1.cloud1}
                        className="z-10 absolute -top-4 -right-44 duration-300"
                        width={317}
                        height={144}
                    />
                    <LoadingImage
                        src={vol1.cloud1}
                        className="absolute -top-[66px] -right-8 duration-300"
                        width={317}
                        height={144}
                    />
                    <LoadingImage
                        src={vol1.ticket1}
                        className="absolute -left-6 -bottom-10 duration-300"
                        width={236}
                        height={168}
                    />
                    <LoadingImage
                        src={vol1.leaf3}
                        className="absolute -bottom-6 left-[88px] mr-28 duration-300"
                        width={108}
                        height={152}
                    />
                    <Center axis="y">
                        <LoadingImage
                            src={vol1.key}
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
