import Cloud1 from '@/public/images/landing/cloud1.png';
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
                    className="-z-20 sm:hidden lg:inline"
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
                        className="select-none object-none object-[10%,0] md:object-left-top -mt-40"
                    />
                </ParallaxLayer>
                <ParallaxLayer offset={3.4} speed={0.3}>
                    <Image
                        src={Mountain2}
                        alt=""
                        fill
                        className="select-none object-none object-[3%,0] md:object-left-top -mt-96 md:-mt-auto"
                    />
                </ParallaxLayer>
                <ParallaxLayer offset={3} speed={0.9}>
                    <Image
                        src={Mountain3}
                        alt=""
                        fill
                        className="select-none object-none object-[82%,0] md:object-[40%,0] -mt-96 md:-mt-auto"
                    />
                </ParallaxLayer>
            </>
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
                    offset={3.5}
                    factor={2}
                    speed={0.9}
                    className="z-10"
                >
                    <div
                        className="z-10 absolute top-0 -left-[400px] -right-[400px] bottom-0 bg-gradient-to-b from-[#130531] to-transparent"
                        style={{
                            background:
                                'radial-gradient(50% 50.00% at 50% 50.00%, rgba(19, 5, 49, 0.00) 40.10%, #130531 100%)',
                        }}
                    />
                    <div className="absolute top-0 left-0 right-0 bottom-0 bg-primary-800 bg-[url('/images/landing/grained_background.jpg')] bg-repeat" />
                </ParallaxLayer>
            </>
        </>
    );
};

export default Decoration;
