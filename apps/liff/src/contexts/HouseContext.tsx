import HouseData from '@/constants/house-data.json';
import axios from '@/utils/fetcher';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { createContext, useContext, useEffect, useState } from 'react';
import { useAuth } from './AuthContext';
import Loading from '@/components/Loading';
import { IHouse } from 'types';

interface HouseContextProps {
    houseData: IHouse | null;
    fetchHouseData: () => Promise<void>;
}

export const HouseContext = createContext<HouseContextProps>(null);

const HouseProvider: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    const router = useRouter();

    const [houseData, setHouseData] = useState<IHouse | null>(null);

    const fetchHouseData = async () => {
        await axios
            .get('/groups/user', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((res) => {
                const localData = HouseData.find(
                    (data) => data.group === res.data.group
                );
                setHouseData({ ...res.data, ...localData });
            })
            .catch((err) => {
                console.error(err);
            });
    };

    useEffect(() => {
        fetchHouseData();
    }, []);

    if (houseData === null) return <Loading />;
    return (
        <HouseContext.Provider
            value={{
                houseData,
                fetchHouseData,
            }}
        >
            {router.pathname.includes('/house') ? (
                <>
                    {children}

                    <div
                        className={`z-10 fixed top-0 left-0 right-0 bottom-0 bg-opacity-20 select-none backdrop-blur-lg ${
                            houseData.theme === 'dark' ? 'bg-black' : 'bg-white'
                        }`}
                    ></div>

                    <div className="z-0 fixed top-0 left-0 right-0 bottom-0 select-none">
                        <div className="relative h-screen w-full scale-105">
                            <Image
                                src={require(`@/public/images/banners/${houseData.group}.png`)}
                                className="object-cover"
                                style={{
                                    objectPosition: houseData.bgPosition
                                        ? houseData.bgPosition
                                        : 'center',
                                }}
                                alt="Flag Image"
                                fill
                                quality={1}
                                priority
                                loading="eager"
                            />
                        </div>
                    </div>
                </>
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
