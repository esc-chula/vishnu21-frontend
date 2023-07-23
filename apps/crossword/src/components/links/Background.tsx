import Branches1 from '@/public/images/assets/branches1.png';
import Branches2 from '@/public/images/assets/branches2.png';
import Cloud1 from '@/public/images/assets/cloud1.png';
import Key from '@/public/images/assets/key.png';
import Leaf1 from '@/public/images/assets/leaf1.png';
import Leaf2 from '@/public/images/assets/leaf2.png';
import Leaf3 from '@/public/images/assets/leaf3.png';
import Leaf6 from '@/public/images/assets/leaf6.png';
import Leaf7 from '@/public/images/assets/leaf7.png';
import Leaf8 from '@/public/images/assets/leaf8.png';
import Leaf9 from '@/public/images/assets/leaf9.png';
import Leaf10 from '@/public/images/assets/leaf10.png';
import Leaf11 from '@/public/images/assets/leaf11.png';
import Leaf12 from '@/public/images/assets/leaf12.png';
import Leaf13 from '@/public/images/assets/leaf13.png';
import Leaf14 from '@/public/images/assets/leaf14.png';
import Leaf15 from '@/public/images/assets/leaf15.png';
import Leaf16 from '@/public/images/assets/leaf16.png';
import Leaf17 from '@/public/images/assets/leaf17.png';
import Mushroom1 from '@/public/images/assets/mushroom1.png';
import Mushroom2 from '@/public/images/assets/mushroom2.png';
import Mushroom3 from '@/public/images/assets/mushroom3.png';
import Mushroom4 from '@/public/images/assets/mushroom4.png';
import Spore1 from '@/public/images/assets/spore1.png';
import Ticket1 from '@/public/images/assets/ticket1.png';
import Vignette from './Vignette';
import Center from './Center';
import BackgroundImage from './BackgroundImage';
import LoadingImage from './LoadingImage';
import Moon from './Moon';

const Background: React.FC = () => {
    return (
        <div className="fixed flex justify-center top-0 left-0 right-0 bottom-0">
            <div className="max-w-[500px] relative w-full h-full overflow-hidden bg-primary-800 bg-[url('/images/assets/grained_background.jpg')] bg-repeat bg-[length:400px_400px]">
                <div className="z-30 absolute w-full h-full">
                    <Center axis="x">
                        <LoadingImage
                            src={Leaf6}
                            className="z-[9] absolute -bottom-[76px] mr-40"
                            width={98}
                            height={168}
                        />
                    </Center>
                    <LoadingImage
                        src={Leaf11}
                        className="z-[8] absolute -bottom-6 left-4"
                        width={110}
                        height={180}
                    />
                    <Center axis="x">
                        <LoadingImage
                            src={Leaf9}
                            className="z-[7] absolute -bottom-[86px]"
                            width={113}
                            height={183}
                        />
                    </Center>
                    <LoadingImage
                        src={Leaf9}
                        className="z-[6] absolute -bottom-8 -left-14"
                        width={127}
                        height={239}
                    />
                    <LoadingImage
                        src={Leaf8}
                        className="z-[5] absolute -bottom-[84px] right-24 rotate-[17deg]"
                        width={131}
                        height={219}
                    />
                    <LoadingImage
                        src={Mushroom4}
                        className="z-[4] absolute -bottom-14 -left-16"
                        width={294}
                        height={95}
                    />
                    <LoadingImage
                        src={Mushroom3}
                        className="z-[3] absolute -bottom-10 right-8"
                        width={172}
                        height={182}
                    />
                    <LoadingImage
                        src={Leaf2}
                        className="z-[2] absolute -bottom-8 -right-20"
                        width={155}
                        height={274}
                    />
                    <LoadingImage
                        src={Leaf13}
                        className="z-[1] absolute -bottom-10 right-4"
                        width={154}
                        height={221}
                    />
                    <LoadingImage
                        src={Leaf15}
                        className="absolute -bottom-6 -right-14"
                        width={194}
                        height={248}
                    />
                    <Moon />
                    <LoadingImage
                        src={Leaf6}
                        className="z-10 absolute top-[275px] -right-16 -rotate-[40deg]"
                        width={98}
                        height={168}
                    />
                    <LoadingImage
                        src={Mushroom2}
                        className="absolute top-[200px] -right-[100px] -rotate-[54deg]"
                        width={185}
                        height={174}
                    />
                    <LoadingImage
                        src={Spore1}
                        className="z-10 absolute top-[120px] -right-16"
                        width={150}
                        height={142}
                    />
                    <LoadingImage
                        src={Branches1}
                        className="absolute -top-48 -left-0 rotate-[75deg]"
                        width={231}
                        height={384}
                    />
                    <LoadingImage
                        src={Branches1}
                        className="z-10 absolute -top-10 -left-[82px]"
                        width={170}
                        height={320}
                    />
                </div>
                <Vignette />
                <div className="z-10 absolute w-full h-full">
                    <LoadingImage
                        src={Cloud1}
                        className="z-10 absolute -top-4 -right-44 duration-300"
                        width={317}
                        height={144}
                    />
                    <LoadingImage
                        src={Cloud1}
                        className="absolute -top-[66px] -right-8 duration-300"
                        width={317}
                        height={144}
                    />
                    <LoadingImage
                        src={Ticket1}
                        className="absolute -left-6 -bottom-10 duration-300"
                        width={236}
                        height={168}
                    />
                    <LoadingImage
                        src={Leaf3}
                        className="absolute -bottom-6 left-[88px] mr-28 duration-300"
                        width={108}
                        height={152}
                    />
                    <Center axis="y">
                        <LoadingImage
                            src={Key}
                            className="absolute -left-12 rotate-[20deg]"
                            width={129}
                            height={301}
                        />
                    </Center>
                </div>
                {/* <BackgroundImage /> */}
            </div>
        </div>
    );
};

export default Background;
