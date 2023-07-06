import { NextPage } from 'next';
import Image from 'next/image';
import { TabsContext, useTabs } from './context/TabsContext';
import ProfileCard from './components/ProfileCard';
import { Tab, Tabs } from './components/Tabs';
import GameCard from './components/GameCard';
import KeySvg from '@/public/images/key.svg';
import { tabs, games, profileInfo } from './info';
import { useState } from 'react';

type Props = {};

const GameTaps = () => {
    const { setCurrentTab } = useTabs();
    return (
        <Tabs
            tabs={tabs}
            defaultTab={tabs.canPlay}
            onTabSelect={(tab) => setCurrentTab(tab)}
            className="custom-tab-container-class"
        >
            <Tab id={tabs.canPlay} className="flex flex-col gap-4">
                {games.map((game, index) => (
                    <GameCard key={index} {...game} />
                ))}
            </Tab>
            <Tab
                id={tabs.canNotPlay}
                className="flex flex-col gap-4"
            >
                {games.map(
                    (game, index) =>
                        game.isDone && (
                            <GameCard key={index} {...game} />
                        )
                )}
            </Tab>
        </Tabs>
    );
}

const GameHomePage: NextPage = (props: Props) => {
    const [currentTab, setCurrentTab] = useState<string | null>(null);
    return (
        <>
            <main className="bg-[url('/images/grain-background.svg')] bg-cover bg-no-repeat w-screen h-screen bg-fixed">
                <ProfileCard
                    imageUrl={profileInfo.imageUrl}
                    nickname={profileInfo.nickname}
                    houseName={profileInfo.houseName}
                />
                <Image
                    className="z-0 fixed top-12 right-14 rotate-[35deg]"
                    alt="key background prop"
                    src={KeySvg}
                    width={99}
                    height={322}
                />
                <div className="z-10 absolute flex flex-col bg-secondary-50 w-screen overflow-auto bottom-0 top-32 rounded-tl-[1.25rem] rounded-tr-[1.25rem] shadow-[0_-5px_4px_0px_rgb(0,0,0,0.25)] pt-6 px-6">

                    <TabsContext.Provider value={{ currentTab, setCurrentTab }}>
                        <GameTaps />
                    </TabsContext.Provider>
                </div>
            </main>
        </>
    );
};

export default GameHomePage;
