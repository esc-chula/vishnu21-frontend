import { NextPage } from 'next';
import Image from 'next/image';
import { TabsContext, useTabs } from '@/contexts/TabsContext';
import ProfileCard from '@/components/ProfileCard';
import { Tab, Tabs } from '@/components/Tabs';
import GameCard, { GameCardProps } from '@/components/GameCard';
import KeySvg from '@/public/images/key.svg';
import { tabs, games as gamesMockup } from '@/components/info';
import { DetailedHTMLProps, HTMLAttributes, useEffect, useState } from 'react';
import { useHouse } from '@/contexts/HouseContext';
import { useAuth } from '@/contexts/AuthContext';
import { fetcher } from '@/utils/fetcher';
import { IGame } from '@/data/games.dto';

type GameTapsProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {
    games: any[];
};

const GameTaps = ({ games, className, ...props }: GameTapsProps) => {
    const { setCurrentTab } = useTabs();
    const activeGames = games.map(
        (game, index) =>
            !(
                game.submitted ||
                new Date(game.expiresAt).getTime() < Date.now() ||
                new Date(game.startedAt).getTime() > Date.now()
            ) && <GameCard key={index} {...game} />
    );
    const inactiveGames = games.map(
        (game, index) =>
            (game.submitted ||
                new Date(game.expiresAt).getTime() < Date.now() ||
                new Date(game.startedAt).getTime() > Date.now()) && (
                <GameCard key={index} {...game} />
            )
    );
    return (
        <Tabs
            tabs={tabs}
            defaultTab={tabs.canPlay}
            onTabSelect={(tab) => setCurrentTab(tab)}
            className={className}
            {...props}
        >
            <Tab
                id={tabs.canPlay}
                className="flex flex-col overflow-y-scroll gap-4"
            >
                {activeGames.filter((g) => g).length > 0 ? (
                    activeGames
                ) : (
                    <p className="text-center text-xs italic my-4 text-neutral-600">
                        ไม่มีเกมที่สามารถเล่นได้ในขณะนี้
                    </p>
                )}
            </Tab>
            <Tab id={tabs.canNotPlay} className="flex flex-col gap-4">
                {inactiveGames.filter((g) => g).length > 0 ? (
                    inactiveGames
                ) : (
                    <p className="text-center text-xs italic my-4 text-neutral-600">
                        ไม่มีเกมที่ไม่สามารถเล่นได้ในขณะนี้
                    </p>
                )}
            </Tab>
        </Tabs>
    );
};

type Props = {};

const GameHomePage: NextPage = (props: Props) => {
    const [currentTab, setCurrentTab] = useState<string | null>(null);
    const { houseData } = useHouse();
    const { user } = useAuth();
    const [games, setGames] = useState([]);
    const [profileInfo, setProfileInfo] = useState({
        imageUrl: undefined,
        houseName: '',
        nickname: '',
    });

    const fetch = () => {
        fetcher('/games', localStorage.getItem('token')).then((res) => {
            const games = res.map((game) => {
                game.tags = [
                    `ให้คะแนนแบบ ${game.scoring}`,
                    game.isIndividual ? 'คะแนนเดี่ยว' : 'คะแนนบ้าน',
                    game.submitted ? 'ส่งแล้ว' : 'ยังไม่ส่ง',
                    new Date(game.startedAt).getTime() < Date.now()
                        ? 'เริ่มแล้ว'
                        : 'ยังไม่เริ่ม',
                    new Date(game.expiresAt).getTime() < Date.now()
                        ? 'หมดเวลา'
                        : 'ยังไม่หมดเวลา',
                ];
                return game;
            });
            setGames(games);
        });
    };

    useEffect(() => {
        const interval = setInterval(() => {
            fetch();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (houseData && user)
            setProfileInfo({
                imageUrl: user.profilePicture,
                houseName: houseData.shortName,
                nickname: user.nickname,
            });
    }, [houseData, user]);

    return (
        <>
            <main className="z-[100] w-screen h-screen">
                <ProfileCard {...profileInfo} />
                <Image
                    className="z-0 absolute top-12 right-14 rotate-[35deg]"
                    alt="key background prop"
                    src={KeySvg}
                    width={99}
                    height={322}
                />
                <div
                    className={`z-10 absolute flex flex-col bg-secondary-50 w-screen overflow-auto bottom-0 top-32 rounded-tl-[1.25rem] rounded-tr-[1.25rem] shadow-[0_-5px_4px_0px_rgb(0,0,0,0.25)] pt-6 px-6`}
                >
                    <TabsContext.Provider value={{ currentTab, setCurrentTab }}>
                        <GameTaps games={games} />
                    </TabsContext.Provider>
                </div>
            </main>
        </>
    );
};

export default GameHomePage;
