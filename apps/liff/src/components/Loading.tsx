import LoadingBackground from '@/public/images/loading_background.png';
import Image from 'next/image';
import { MoonLoader } from 'react-spinners';

const Loading: React.FC = () => {
    return (
        <>
            <div className="z-20 absolute w-full h-full bg-black/20 backdrop-blur-md grid place-content-center">
                <MoonLoader color="#ffffff" speedMultiplier={0.8} />
            </div>
            <Image
                src={LoadingBackground}
                alt=""
                fill
                className=""
                quality={0}
            />
        </>
    );
};

export default Loading;
