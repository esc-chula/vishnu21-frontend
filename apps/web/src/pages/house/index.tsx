import { flag } from 'assets';
import type { NextPage } from 'next';
import Image from 'next/image';

const House: NextPage = () => {
    const flags = [
        'A',
        'B',
        'C',
        'Dog',
        'E',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'M',
        'N',
        'P',
        'Q',
        'R',
        'S',
        'T',
    ];
    return (
        <>
            {flags.map((letter, idx) => (
                <div key={idx} className="relative h-screen w-full">
                    <Image
                        src={flag[letter]}
                        alt="Flag Image"
                        fill
                        className="object-contain"
                    />
                </div>
            ))}
        </>
    );
};

export default House;
