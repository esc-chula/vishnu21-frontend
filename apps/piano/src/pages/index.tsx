import type { NextPage } from 'next';
import { useContext, useRef, useState } from 'react';
import Tile from '@/components/Tile';
import { useWindowSize } from '@/hooks/useWindowSize';
import { KeyPressContext } from '@/contexts/KeyPressContext';
import { AudioContext } from '@/contexts/AudioContext';
import SiiluedMhooKeys from '@/constants/siilued_mhoo.json';

const Home: NextPage = () => {
    const { audioRef, start } = useContext(AudioContext);
    const { height } = useWindowSize();

    const { keysPress, setKeysPress } = useContext(KeyPressContext);

    return (
        <>
            {/* body */}
            <main className="flex justify-center h-screen w-full bg-black">
                <div className="max-w-screen-sm h-full w-full relative">
                    {/* button */}
                    <div
                        ref={(el) => {
                            // console.log(
                            //     'detector',
                            //     el?.getBoundingClientRect()
                            // );
                        }}
                        className="z-20 absolute bottom-0 left-0 right-0 h-36 border-t-[6px] border-white grid grid-cols-4"
                    >
                        <button
                            className={
                                keysPress.d
                                    ? 'bg-white/20'
                                    : 'bg-black/50 active:bg-white/20'
                            }
                        ></button>
                        <button
                            onClick={() => {}}
                            className={
                                keysPress.f
                                    ? 'bg-white/20'
                                    : 'bg-black/50 active:bg-white/20'
                            }
                        ></button>
                        <button
                            onClick={() => {}}
                            className={
                                keysPress.j
                                    ? 'bg-white/20'
                                    : 'bg-black/50 active:bg-white/20'
                            }
                        ></button>
                        <button
                            onClick={() => {}}
                            className={
                                keysPress.k
                                    ? 'bg-white/20'
                                    : 'bg-black/50 active:bg-white/20'
                            }
                        ></button>
                    </div>

                    {/* column */}
                    <div className="z-10 absolute top-0 left-0 right-0 bottom-0 grid grid-cols-4">
                        <div className="border border-white/20"></div>
                        <div className="border border-white/20"></div>
                        <div className="border border-white/20"></div>
                        <div className="border border-white/20"></div>
                    </div>

                    {/* tile */}
                    <div
                        className={`z-0 bg-black absolute w-full left-0 right-0 ease-linear grid grid-cols-4`}
                        style={{
                            transitionDuration:
                                audioRef.current?.duration + 's',
                            bottom: start
                                ? -(audioRef.current?.duration * 0.7 * height) +
                                  height * 2
                                : 0,
                            height:
                                audioRef.current?.duration * 0.7 * height -
                                height,
                        }}
                    >
                        {/* track 1 */}
                        <div className="relative flex flex-col justify-end">
                            {SiiluedMhooKeys.filter(
                                (key) => key.track === 1
                            ).map((key, idx) => (
                                <Tile
                                    key={idx}
                                    position={key.position}
                                    hold={key.hold}
                                    range={key.range}
                                    track={1}
                                    tileOffset={150}
                                />
                            ))}
                        </div>
                        {/* track 2 */}
                        <div className="relative flex flex-col justify-end">
                            {SiiluedMhooKeys.filter(
                                (key) => key.track === 2
                            ).map((key, idx) => (
                                <Tile
                                    key={idx}
                                    position={key.position}
                                    hold={key.hold}
                                    range={key.range}
                                    track={2}
                                    tileOffset={150}
                                />
                            ))}
                        </div>
                        {/* track 3 */}
                        <div className="relative flex flex-col justify-end">
                            {SiiluedMhooKeys.filter(
                                (key) => key.track === 3
                            ).map((key, idx) => (
                                <Tile
                                    key={idx}
                                    position={key.position}
                                    hold={key.hold}
                                    range={key.range}
                                    track={3}
                                    tileOffset={150}
                                />
                            ))}
                        </div>
                        {/* track 4 */}
                        <div className="relative flex flex-col justify-end">
                            {SiiluedMhooKeys.filter(
                                (key) => key.track === 4
                            ).map((key, idx) => (
                                <Tile
                                    key={idx}
                                    position={key.position}
                                    hold={key.hold}
                                    range={key.range}
                                    track={4}
                                    tileOffset={150}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
