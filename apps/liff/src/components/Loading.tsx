import LoadingBackground from '@/public/images/loading_background.png';
import Image from 'next/image';
import VishnuLogo from './VishnuLogo';

const Loading: React.FC = () => {
    return (
        <>
            <div className="z-20 absolute w-full h-screen bg-black/20 backdrop-blur-md flex flex-col items-center justify-center space-y-6 text-white">
                <VishnuLogo className="scale-90" />
                <p>Loading ...</p>
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
