import Image from 'next/image';
import { useState } from 'react';

interface MainProps {
    children: React.ReactNode;
    foregroundImage: '' | 'full1' | 'full2' | 'top1' | 'top2';
    background?: boolean;
}

const Main: React.FC<MainProps> = ({
    children,
    foregroundImage,
    background,
}) => {
    const [isImageLoading, setIsImageLoading] = useState<boolean>(true);

    return (
        <>
            <div className="z-30 absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center text-neutral-50">
                {children}
            </div>
            <div className="z-0 absolute top-0 left-0 right-0 bottom-0 bg-primary-800 bg-[url('/images/grained_background.jpg')] bg-repeat bg-[length:300px_300px]"></div>
            <div
                className={`z-10 absolute -top-44 -bottom-44 -left-44 -right-44 rounded-[100%] pointer-events-none`}
                style={{
                    background:
                        'radial-gradient(50% 50.00% at 50% 50.00%, rgba(19, 5, 49, 0.00) 27.04%, #130531 73.56%)',
                }}
            ></div>
            {foregroundImage && (
                <div
                    className={`${
                        background ? 'z-20' : 'z-40'
                    } absolute top-0 left-0 right-0 bottom-0 pointer-events-none select-none duration-1000 ease-out ${
                        isImageLoading
                            ? 'scale-105 opacity-0'
                            : 'scale-100 opacity-100'
                    }`}
                >
                    <div className="relative flex justify-center items-center w-full h-full">
                        <Image
                            src={require(`@/public/images/assets/${foregroundImage}.png`)}
                            alt=""
                            fill
                            className={`${
                                foregroundImage.includes('full')
                                    ? 'object-cover'
                                    : 'object-contain object-top'
                            }`}
                            onLoadingComplete={() => setIsImageLoading(false)}
                        />
                    </div>
                </div>
            )}
        </>
    );
};

export default Main;
