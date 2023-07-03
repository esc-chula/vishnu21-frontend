import Image from 'next/image';
import { useState } from 'react';

interface LoadingImageProps {
    src: string;
    className: string;
    width: number;
    height: number;
}

const LoadingImage: React.FC<LoadingImageProps> = ({
    src,
    className,
    width,
    height,
}) => {
    const [loaded, setLoaded] = useState<boolean>(false);

    return (
        <Image
            quality={10}
            src={src}
            alt="Background Image"
            className={className}
            style={{
                transitionDuration: '700ms',
                opacity: loaded ? 1 : 0,
            }}
            width={width}
            height={height}
            onLoadingComplete={() => setLoaded(true)}
        />
    );
};

export default LoadingImage;
