import { NextPage } from 'next';
import Image from 'next/image';
import { TabsContext, useTabs } from '../../../contexts/TabsContext';
import ProfileCard from '../../../components/ProfileCard';
import { Tab, Tabs } from '../../../components/Tabs';
import GameCard, { GameCardProps } from '../../../components/GameCard';
import KeySvg from '@/public/images/key.svg';
import {
    tabs,
    games as gamesMockup,
    profileInfo as profileInfoMockup,
} from '../../../components/info';
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react';

type GameTapsProps = DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
> & {
    games: GameCardProps[];
};

const GameTaps = ({ games, className, ...props }: GameTapsProps) => {
    const { setCurrentTab } = useTabs();
    return (
        <Tabs
            tabs={tabs}
            defaultTab={tabs.canPlay}
            onTabSelect={(tab) => setCurrentTab(tab)}
            className={className}
            {...props}
        >
            <Tab id={tabs.canPlay} className="flex flex-col gap-4">
                {games.map((game, index) => (
                    <GameCard key={index} {...game} />
                ))}
            </Tab>
            <Tab id={tabs.canNotPlay} className="flex flex-col gap-4">
                {games.map(
                    (game, index) =>
                        game.isDone && <GameCard key={index} {...game} />
                )}
            </Tab>
        </Tabs>
    );
};

type Props = {};

const GameHomePage: NextPage = (props: Props) => {
    const [currentTab, setCurrentTab] = useState<string | null>(null);

    const games = gamesMockup;
    const profileInfo = profileInfoMockup;

    return (
        <>
            <main className="bg-[url('/images/grain-background.svg')] w-screen h-screen">
                <ProfileCard {...profileInfo} />
                <Image
                    className="z-0 absolute top-12 right-14 rotate-[35deg]"
                    alt="key background prop"
                    src={KeySvg}
                    width={99}
                    height={322}
                />
                <div className="z-10 absolute flex flex-col bg-secondary-50 w-screen overflow-auto bottom-0 top-32 rounded-tl-[1.25rem] rounded-tr-[1.25rem] shadow-[0_-5px_4px_0px_rgb(0,0,0,0.25)] pt-6 px-6">
                    <TabsContext.Provider value={{ currentTab, setCurrentTab }}>
                        <GameTaps games={games} />
                    </TabsContext.Provider>
                </div>
            </main>
        </>
    );
};

export default GameHomePage;
