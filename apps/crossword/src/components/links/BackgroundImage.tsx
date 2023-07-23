import { vol1 } from 'assets';
import Image from 'next/image';
import { useState } from 'react';

const BackgroundImage: React.FC = () => {
    const [loaded, setLoaded] = useState<boolean>(false);

    return (
        <Image
            priority
            loading="eager"
            quality={10}
            src={vol1.bg}
            alt="Background Image"
            fill
            style={{
                zIndex: 0,
                objectFit: 'cover',
                objectPosition: 'center',
                transitionDuration: '100ms',
                opacity: loaded ? 1 : 0,
            }}
            onLoadingComplete={() => setLoaded(true)}
        />
    );
};

export default BackgroundImage;
