import HouseData from '@/constants/house-data.json';
import axios from '@/utils/fetcher';
import { TGroup, THouse } from 'types';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';

interface HouseContextProps {
    group: string;
    name: string;
    longName: string;
    color: string;
    alt_color: string;
    theme: string;
}

export const HouseContext = createContext<HouseContextProps>(null);

const HouseProvider: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    const router = useRouter();
    const { user } = useAuth();

    const [group, setGroup] = useState<TGroup>('F');
    const { name, longName, color, alt_color, bg_color, bg_position, theme } =
        HouseData.find((data) => data.group === group);

    return (
        <HouseContext.Provider
            value={{
                group,
                name,
                longName,
                color,
                alt_color,
                theme,
            }}
        >
            {router.pathname.includes('/house') ? (
                <main className="flex justify-center">
                    <section className="relative h-screen w-full max-w-screen-sm">
                        {/* content */}
                        {children}

                        {/* background filter */}
                        <div
                            className={`z-10 fixed top-0 left-0 right-0 bottom-0 bg-opacity-20 select-none backdrop-blur-lg ${
                                theme === 'dark' ? 'bg-black' : 'bg-white'
                            }`}
                        ></div>

                        {/* bacground image */}
                        <div
                            className="z-0 fixed top-0 left-0 right-0 bottom-0 select-none"
                            // style={{
                            //     backgroundColor: bg_color,
                            // }}
                        >
                            <div className="relative h-screen w-full scale-105">
                                <Image
                                    src={require(`@/public/images/banners/${group}.png`)}
                                    className="object-cover"
                                    style={{
                                        objectPosition: bg_position
                                            ? bg_position
                                            : 'center',
                                    }}
                                    alt="Flag Image"
                                    fill
                                    quality={1}
                                />
                            </div>
                        </div>
                    </section>
                </main>
            ) : (
                children
            )}
        </HouseContext.Provider>
    );
};

export const useHouse = () => {
    const context = useContext(HouseContext);
    if (context === undefined) {
        throw new Error('useHouse must be used within a HouseProvider');
    }
    return context;
};

export default HouseProvider;
