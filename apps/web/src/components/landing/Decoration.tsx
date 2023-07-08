import Cloud1 from '@/public/images/landing/cloud1.png';
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
                    speed={0.4}
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
            {/* background */}
            <>
                {/* star background */}
                <ParallaxLayer className="-z-40" offset={0} factor={3}>
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
                {/* gradient background */}
                <ParallaxLayer
                    className="-z-50"
                    offset={0}
                    factor={1}
                    style={{
                        backgroundImage:
                            'linear-gradient(180deg, #000 0%, #4713A3 86.82%)',
                    }}
                ></ParallaxLayer>
                {/* gradient background */}
                <ParallaxLayer
                    className="-z-50"
                    offset={1}
                    factor={2}
                    style={{
                        backgroundImage:
                            'linear-gradient(0deg, #1E084A 40.55%, #4713A3 88.16%)',
                    }}
                ></ParallaxLayer>
            </>
        </>
    );
};

export default Decoration;
