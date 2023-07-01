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
    const { keysPress } = useContext(KeyPressContext);

    const tileHeight = height - 144;

    return (
        <>
            {/* body */}
            <main className="flex justify-center h-screen w-full bg-black">
                <div className="max-w-screen-sm h-full w-full relative bg-black/50">
                    {/* decoration */}
                    <div
                        ref={(el) => {
                            // console.log(
                            //     'detector',
                            //     el?.getBoundingClientRect()
                            // );
                        }}
                        className="z-30 absolute bottom-36 left-0 right-0 h-28 grid grid-cols-4 opacity-60"
                    >
                        <div
                            className={
                                keysPress.d
                                    ? 'from-red-950/70 to-transparent bg-gradient-to-t'
                                    : ''
                            }
                        ></div>
                        <div
                            className={
                                keysPress.f
                                    ? 'from-red-950/70 to-transparent bg-gradient-to-t'
                                    : ''
                            }
                        ></div>
                        <div
                            className={
                                keysPress.j
                                    ? 'from-red-950/70 to-transparent bg-gradient-to-t'
                                    : ''
                            }
                        ></div>
                        <div
                            className={
                                keysPress.k
                                    ? 'from-red-950/70 to-transparent bg-gradient-to-t'
                                    : ''
                            }
                        ></div>
                    </div>

                    {/* button */}
                    <div
                        ref={(el) => {
                            // console.log(
                            //     'detector',
                            //     el?.getBoundingClientRect()
                            // );
                        }}
                        className="z-30 absolute bottom-0 left-0 right-0 h-36 border-t-[6px] border-red-950 grid grid-cols-4"
                    >
                        <button
                            className={
                                keysPress.d
                                    ? 'bg-black/40'
                                    : 'bg-black/50 border border-white/5 active:bg-black/40'
                            }
                        ></button>
                        <button
                            onClick={() => {}}
                            className={
                                keysPress.f
                                    ? 'bg-black/40'
                                    : 'bg-black/50 border border-white/5 active:bg-black/40'
                            }
                        ></button>
                        <button
                            onClick={() => {}}
                            className={
                                keysPress.j
                                    ? 'bg-black/40'
                                    : 'bg-black/50 border border-white/5 active:bg-black/40'
                            }
                        ></button>
                        <button
                            onClick={() => {}}
                            className={
                                keysPress.k
                                    ? 'bg-black/40'
                                    : 'bg-black/50 border border-white/5 active:bg-black/40'
                            }
                        ></button>
                    </div>

                    {/* column */}
                    <div className="z-20 absolute top-0 left-0 right-0 bottom-0 grid grid-cols-4">
                        <div className="border-2 border-[#1b1d29]"></div>
                        <div className="border-2 border-[#1b1d29]"></div>
                        <div className="border-2 border-[#1b1d29]"></div>
                        <div className="border-2 border-[#1b1d29]"></div>
                    </div>

                    {/* tile */}
                    <div
                        className={`z-10 absolute w-full left-0 right-0 ease-linear grid grid-cols-4`}
                        style={{
                            transitionDuration:
                                audioRef.current?.duration + 's',
                            bottom: start
                                ? -(
                                      audioRef.current?.duration *
                                      0.7 *
                                      tileHeight
                                  ) + height
                                : 144,
                            height:
                                audioRef.current?.duration * 0.7 * tileHeight,
                        }}
                    >
                        {/* track 1 */}
                        <div className="relative flex flex-col justify-end">
                            <div className="absolute top-0 h-20 w-20 bg-white">
                                start
                            </div>
                            <div className="absolute bottom-0 h-20 w-20 bg-white">
                                end
                            </div>
                            {SiiluedMhooKeys.filter(
                                (key) => key.track === 1
                            ).map((key, idx) => (
                                <Tile
                                    key={idx}
                                    position={key.position}
                                    hold={key.hold}
                                    range={key.range}
                                    track={1}
                                    tileOffset={400}
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
                                    tileOffset={400}
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
                                    tileOffset={400}
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
                                    tileOffset={400}
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
