import { vol1 } from 'assets';
import Image from 'next/image';

const BackgroundImage: React.FC = () => {
    return (
        <Image
            priority
            loading="eager"
            quality={20}
            src={vol1.bg}
            alt="Background Image"
            fill
            style={{
                zIndex: 0,
                objectFit: 'cover',
                objectPosition: 'center',
            }}
        />
    );
};

export default BackgroundImage;
