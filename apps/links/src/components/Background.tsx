import { vol1 } from 'assets';
import Image from 'next/image';

const Background: React.FC = () => {
    return (
        <Image
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

export default Background;
