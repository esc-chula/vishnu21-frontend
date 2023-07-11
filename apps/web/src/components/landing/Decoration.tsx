import Branches1 from '@/public/images/assets/branches1.png';
import Cloud1 from '@/public/images/assets/cloud1.png';
import Spore1 from '@/public/images/assets/spore1.png';
import Leaf1 from '@/public/images/assets/leaf1.png';
import Leaf3 from '@/public/images/assets/leaf3.png';
import Leaf6 from '@/public/images/assets/leaf6.png';
import Leaf7 from '@/public/images/assets/leaf7.png';
import Leaf8 from '@/public/images/assets/leaf8.png';
import Leaf11 from '@/public/images/assets/leaf11.png';
import Key from '@/public/images/assets/key.png';
import Mushroom2 from '@/public/images/assets/mushroom2.png';
import Mushroom3 from '@/public/images/assets/mushroom3.png';
import Mountain1 from '@/public/images/landing/mountain1.svg';
import Mountain2 from '@/public/images/landing/mountain2.svg';
import Mountain3 from '@/public/images/landing/mountain3.svg';
import { ParallaxLayer } from '@react-spring/parallax';
import Image from 'next/image';

const Decoration: React.FC = () => {
    return (
        <>
            {/* sun */}
            <>
                <ParallaxLayer className="-z-10" offset={0} speed={0.2}>
                    <div
                        className="absolute -bottom-36 sm:-bottom-64 -left-12 sm:-left-28 w-[240px] sm:w-[400px] aspect-square bg-[#f5ecda] bg-opacity-50 rounded-full"
                        style={{
                            filter: 'drop-shadow(0px 0px 200px #D9AB9F) blur(32px)',
                        }}
                    ></div>
                </ParallaxLayer>
                <ParallaxLayer className="-z-30" offset={0} speed={0.2}>
                    <div
                        className="absolute -bottom-36 sm:-bottom-64 -left-12 sm:-left-28 w-[240px] sm:w-[400px] aspect-square bg-[#ffffff] bg-opacity-70 rounded-full"
                        style={{
                            filter: 'drop-shadow(0px 0px 200px #D9AB9F) blur(32px)',
                        }}
                    ></div>
                </ParallaxLayer>
            </>
            {/* cloud */}
            <>
                {/* large cloud */}
                <ParallaxLayer
                    className="-z-10 sm:hidden lg:inline"
                    offset={0}
                    speed={0.5}
                >
                    <div className="absolute w-[700px] sm:w-[1400px] aspect-[1863/845] -bottom-16 sm:-bottom-[240px] -right-64 sm:-right-[440px] select-none">
                        <div className="relative w-full h-full">
                            <Image
                                src={Cloud1}
                                alt="Cloud"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </ParallaxLayer>
                {/* small cloud */}
                <ParallaxLayer
                    className="-z-20 hidden sm:inline"
                    offset={0}
                    speed={0.2}
                >
                    <div
                        className="absolute w-[840px] aspect-[1863/845] -bottom-20 -left-72 select-none"
                        style={{
                            transform: 'scaleX(-1)',
                        }}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={Cloud1}
                                alt="Cloud"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                </ParallaxLayer>
            </>
            {/* mountain */}
            <>
                <ParallaxLayer offset={2.8} factor={2} speed={0.1}>
                    <Image
                        src={Mountain1}
                        alt=""
                        fill
                        className="select-none object-none object-[10%,0] md:object-left-top md:-mt-24"
                    />
                </ParallaxLayer>
                <ParallaxLayer offset={3.5} speed={0.3}>
                    <Image
                        src={Mountain2}
                        alt=""
                        fill
                        className="select-none object-none object-[3%,0] md:object-left-top -mt-96 md:-mt-auto"
                    />
                </ParallaxLayer>
                <ParallaxLayer offset={3} factor={2} speed={0.9}>
                    <Image
                        src={Mountain3}
                        alt=""
                        fill
                        className="select-none object-none object-[82%,0] md:object-[40%,0] -mt-96 md:-mt-auto"
                    />
                </ParallaxLayer>
            </>
            {/* forest assets */}
            <ParallaxLayer
                offset={3.6}
                factor={2.5}
                speed={0.8}
                className="z-20 select-none -mt-80 lg:mt-0"
            >
                <div
                    className="z-30 opacity-50 lg:hidden absolute top-0 -left-[100px] lg:-left-[400px] -right-[100px] lg:-right-[400px] bottom-0 bg-gradient-to-b from-[#130531] to-transparent"
                    style={{
                        background:
                            'radial-gradient(50% 50.00% at 50% 50.00%, rgba(19, 5, 49, 0.00) 40.10%, #130531 100%)',
                    }}
                />
                <div className="z-10 absolute -left-36 top-[10%] w-60 lg:w-auto lg:h-[40vw] aspect-[161/293]">
                    <Image
                        src={Branches1}
                        alt="Branches1"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="z-10 absolute -left-20 lg:left-0 top-[0%] lg:top-[0%] w-60 lg:w-auto lg:h-[40vw] rotate-90 aspect-[161/293]">
                    <Image
                        src={Branches1}
                        alt="Branches1"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="z-10 absolute -right-10 top-[24%] w-60 lg:w-auto lg:h-[20vw] rotate-[0deg] aspect-[150/142]">
                    <Image
                        src={Spore1}
                        alt="Spore1"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="absolute -right-40 top-[22%] w-72 lg:w-auto lg:h-[40vw] rotate-[-40deg] aspect-[131/219]">
                    <Image
                        src={Mushroom2}
                        alt="Mushroom2"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="absolute -right-12 top-[36%] w-32 lg:w-auto lg:h-[16vw] rotate-[-30deg] aspect-[131/219]">
                    <Image
                        src={Leaf6}
                        alt="Leaf6"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="absolute -right-20 top-[50%] w-52 lg:w-auto lg:h-[30vw] rotate-[-10deg] aspect-[131/219]">
                    <Image
                        src={Leaf8}
                        alt="Leaf8"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="absolute -left-20 top-[43%] w-40 lg:w-auto lg:h-[30vw] aspect-[131/219]">
                    <Image
                        src={Leaf1}
                        alt="Leaf1"
                        fill
                        className="object-contain"
                    />
                </div>
                <div className="absolute -right-28 lg:-right-48 bottom-[20%] w-60 -rotate-[20deg] lg:w-auto lg:h-[30vw] aspect-square">
                    <Image
                        src={Mushroom3}
                        alt="Mushroom3"
                        fill
                        className="object-contain"
                    />
                </div>
            </ParallaxLayer>
            {/* background */}
            <>
                {/* star background */}
                <ParallaxLayer className="-z-40" offset={0} factor={5}>
                    <svg
                        className="h-full w-full"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <filter className="h-full w-full" id="filter">
                            <feTurbulence baseFrequency="0.2" />
                            <feColorMatrix
                                values="0 0 0 8 -4
                   0 0 0 8 -4
                   0 0 0 8 -4
                   0 0 0 8 -4"
                            />
                        </filter>
                        <rect
                            width="100%"
                            height="100%"
                            filter="url(#filter)"
                        />
                    </svg>
                </ParallaxLayer>
                {/* sky background */}
                <ParallaxLayer
                    className="-z-50"
                    offset={0}
                    factor={1}
                    style={{
                        backgroundImage:
                            'linear-gradient(180deg, #000 0%, #4713A3 86.82%)',
                    }}
                ></ParallaxLayer>
                <ParallaxLayer
                    className="-z-50"
                    offset={1}
                    factor={2}
                    style={{
                        backgroundImage:
                            'linear-gradient(0deg, #1E084A 40.55%, #4713A3 88%)',
                    }}
                ></ParallaxLayer>
                <ParallaxLayer
                    className="-z-50"
                    offset={3}
                    factor={2}
                    style={{
                        background: '#1E084A',
                    }}
                ></ParallaxLayer>
                {/* grained background */}
                <ParallaxLayer
                    offset={3.7}
                    factor={2.5}
                    speed={0.9}
                    className="z-10 select-none -mt-96 lg:mt-0"
                >
                    <div
                        className="z-20 absolute top-0 -left-[100px] lg:-left-[400px] -right-[100px] lg:-right-[400px] bottom-0 bg-gradient-to-b from-[#130531] to-transparent"
                        style={{
                            background:
                                'radial-gradient(50% 50.00% at 50% 50.00%, rgba(19, 5, 49, 0.00) 40.10%, #130531 100%)',
                        }}
                    />
                    <div className="z-10 absolute -left-16 top-[34%] w-40 lg:w-auto lg:h-[32vw] rotate-[22deg] aspect-[156/365]">
                        <Image
                            src={Key}
                            alt="Key"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="z-10 absolute -right-44 top-[8%] w-80 lg:w-auto lg:h-[16vw] aspect-[365/156] opacity-70">
                        <Image
                            src={Cloud1}
                            alt="Cloud1"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="z-10 absolute -right-0 top-[1%] w-80 lg:w-auto lg:h-[18vw] aspect-[365/156] opacity-50">
                        <Image
                            src={Cloud1}
                            alt="Cloud1"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="z-10 absolute -right-20 top-[40%] w-64 lg:w-auto lg:h-[50vw] -rotate-[45deg] aspect-[156/365] opacity-50">
                        <Image
                            src={Leaf11}
                            alt="Leaf11"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary-800 bg-[url('/images/landing/grained_background.jpg')] bg-repeat" />
                </ParallaxLayer>
            </>
        </>
    );
};

export default Decoration;
