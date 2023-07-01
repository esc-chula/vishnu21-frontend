import type { NextPage } from 'next';
import { useContext, useEffect, useRef, useState } from 'react';
import Tile from '@/components/Tile';
import { useWindowSize } from '@/hooks/useWindowSize';
import { KeyPressContext } from '@/contexts/KeyPressContext';
import { AudioContext } from '@/contexts/AudioContext';
import SiiluedMhooKeys from '@/constants/siilued_mhoo.json';

const Home: NextPage = () => {
    const { height } = useWindowSize();
    const { audioRef, start } = useContext(AudioContext);
    const { keysPress, setKeysPress } = useContext(KeyPressContext);
    const tileHeight = height - 144;

    const tapHandler = (key: string) => {
        setKeysPress((prev) => ({ ...prev, [key]: true }));

        setTimeout(() => {
            setKeysPress((prev) => ({ ...prev, [key]: false }));
        }, 100);
    };

    return (
        <main className="flex justify-center h-screen w-full bg-black">
            <div className="max-w-screen-sm h-full w-full relative bg-black/20 backdrop-blur-sm">
                {/* track */}
                <div className="z-40 absolute top-0 left-0 right-0 h-1">
                    <div
                        className="h-full bg-red-900"
                        style={{
                            width: `${
                                (audioRef.current?.currentTime /
                                    audioRef.current?.duration) *
                                100
                            }%`,
                        }}
                    ></div>
                </div>

                {/* button */}
                <div className="z-30 absolute bottom-0 left-0 right-0 border-t-[6px] border-white grid grid-cols-4">
                    {['d', 'f', 'j', 'k'].map((key) => (
                        <button
                            key={key}
                            onClick={() => tapHandler(key)}
                            className={`${
                                keysPress[key]
                                    ? 'bg-black/[35%]'
                                    : `bg-black/50 active:bg-black/[35%]`
                            } relative h-36 border border-white/5 group backdrop-blur-md`}
                        >
                            <div
                                className={`${
                                    keysPress[key]
                                        ? 'h-80'
                                        : 'group-active:h-80'
                                } absolute bottom-[150px] w-full bg-gradient-to-t from-white/40 to-transparent`}
                            ></div>
                        </button>
                    ))}
                </div>

                {/* column */}
                <div className="z-20 absolute top-0 left-0 right-0 bottom-0 grid grid-cols-4">
                    <div className="border-[1.5px] border-white/10"></div>
                    <div className="border-[1.5px] border-white/10"></div>
                    <div className="border-[1.5px] border-white/10"></div>
                    <div className="border-[1.5px] border-white/10"></div>
                </div>

                {/* tile */}
                <div
                    className={`z-10 absolute w-full left-0 right-0 ease-linear grid grid-cols-4`}
                    style={{
                        transitionDuration: audioRef.current?.duration + 's',
                        bottom: start
                            ? -(audioRef.current?.duration * 0.7 * tileHeight) +
                              height
                            : 144,
                        height: audioRef.current?.duration * 0.7 * tileHeight,
                    }}
                >
                    {/* track 1 */}
                    <div className="relative flex flex-col justify-end">
                        {SiiluedMhooKeys.filter((key) => key.track === 1).map(
                            (key, idx) => (
                                <Tile
                                    key={idx}
                                    position={key.position}
                                    hold={key.hold}
                                    range={key.range}
                                    track={1}
                                    tileOffset={400}
                                />
                            )
                        )}
                    </div>
                    {/* track 2 */}
                    <div className="relative flex flex-col justify-end">
                        {SiiluedMhooKeys.filter((key) => key.track === 2).map(
                            (key, idx) => (
                                <Tile
                                    key={idx}
                                    position={key.position}
                                    hold={key.hold}
                                    range={key.range}
                                    track={2}
                                    tileOffset={400}
                                />
                            )
                        )}
                    </div>
                    {/* track 3 */}
                    <div className="relative flex flex-col justify-end">
                        {SiiluedMhooKeys.filter((key) => key.track === 3).map(
                            (key, idx) => (
                                <Tile
                                    key={idx}
                                    position={key.position}
                                    hold={key.hold}
                                    range={key.range}
                                    track={3}
                                    tileOffset={400}
                                />
                            )
                        )}
                    </div>
                    {/* track 4 */}
                    <div className="relative flex flex-col justify-end">
                        {SiiluedMhooKeys.filter((key) => key.track === 4).map(
                            (key, idx) => (
                                <Tile
                                    key={idx}
                                    position={key.position}
                                    hold={key.hold}
                                    range={key.range}
                                    track={4}
                                    tileOffset={400}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;
