import type { NextPage } from 'next';
import { vol1 } from 'assets';
import Image from 'next/image';

const Home: NextPage = () => {
    return (
        <main>
            <div className="relative w-80 h-screen">
                <Image
                    src={vol1.leaf1}
                    alt="test"
                    fill
                    style={{
                        objectFit: 'contain',
                    }}
                />
            </div>
        </main>
    );
};

export default Home;
