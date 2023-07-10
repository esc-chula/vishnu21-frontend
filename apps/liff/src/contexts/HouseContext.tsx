import HouseData from '@/constants/house-data.json';
import { TGroup, THouse } from '@/types/house';
import { flag } from 'assets';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';

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

    const [group, setGroup] = useState<TGroup>('H');
    const { name, longName, color, alt_color, bg_color, bg_position, theme } =
        HouseData.find((data) => data.group === group);

    if (router.pathname.includes('/house')) {
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
                <main className="flex justify-center">
                    <section className="relative h-screen w-full max-w-screen-sm">
                        {/* content */}
                        {children}

                        {/* background filter */}
                        <div
                            className={`z-10 fixed top-0 left-0 right-0 bottom-0 bg-opacity-20 select-none ${
                                theme === 'dark' ? 'bg-black' : 'bg-white'
                            }`}
                        ></div>

                        {/* bacground image */}
                        <div
                            className="z-0 fixed top-0 left-0 right-0 bottom-0 select-none"
                            style={{
                                backgroundColor: bg_color,
                            }}
                        >
                            <div className="relative h-screen w-full scale-110 blur-lg">
                                <Image
                                    src={flag[group]}
                                    className="object-cover"
                                    style={{
                                        objectPosition: bg_position
                                            ? bg_position
                                            : 'center',
                                    }}
                                    alt="Flag Image"
                                    fill
                                    quality={5}
                                />
                            </div>
                        </div>
                    </section>
                </main>
            </HouseContext.Provider>
        );
    } else {
        return <>{children}</>;
    }
};

export const useHouse = () => {
    const context = useContext(HouseContext);
    return context;
};

export default HouseProvider;
