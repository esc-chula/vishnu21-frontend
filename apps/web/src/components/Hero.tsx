import Image from 'next/image';
import ForegroundImage from '@/public/images/Foreground.svg';
import BackgroundImage from '@/public/images/Background.svg';

const Hero: React.FC = () => {
    return (
        <section className="h-screen">
            <div className="absolute z-10 bg-black h-[200vh] w-full top-[100vh]"></div>
            <div className="absolute top-0 left-0 right-0 bottom-0 z-10 pointer-events-none">
                <Image
                    src={ForegroundImage}
                    alt="Background Image"
                    fill
                    style={{
                        objectFit: 'contain',
                        objectPosition: 'bottom',
                        userSelect: 'none',
                    }}
                />
            </div>
            <div className="fixed top-0 left-0 right-0 bottom-0">
                <div className="absolute top-0 left-0 right-0 z-20">
                    heading
                </div>
                <Image
                    src={BackgroundImage}
                    alt="Background Image"
                    fill
                    style={{
                        objectFit: 'cover',
                        userSelect: 'none',
                    }}
                />
            </div>
        </section>
    );
};

export default Hero;
