import type { NextPage } from 'next';
import { vol1 } from 'assets';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';

const Home: NextPage = () => {
    const audioRef = useRef<HTMLAudioElement>(null);

    const { height, width } = useWindowSize();

    const [start, setStart] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);

    useEffect(() => {
        audioRef.current?.addEventListener('timeupdate', (e) => {
            setCurrentTime(audioRef.current?.currentTime);
        });
    }, [audioRef.current?.currentTime]);

    const startHandler = () => {
        setStart(true);
        audioRef.current.play();
        console.log(audioRef.current.duration);
    };

    console.log(audioRef.current?.currentTime);
    // console.log(height - audioRef.current?.currentTime * height);

    // console.log(height - audioRef.current?.currentTime * height);

    return (
        <>
            {/* start modal */}
            {start ? null : (
                <div className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-black/80 grid place-content-center">
                    <button
                        onClick={startHandler}
                        className="bg-white rounded-lg px-6 py-2"
                    >
                        Start
                    </button>
                </div>
            )}

            <audio ref={audioRef} src="/song.mp3"></audio>

            {/* body */}
            <main className="flex justify-center h-screen w-full bg-black">
                <div className="max-w-screen-sm h-full w-full relative">
                    {/* button */}
                    <div className="z-20 absolute bottom-0 left-0 right-0 h-36 border-t-8 border-white grid grid-cols-4">
                        <button
                            onClick={() => {}}
                            className="bg-black/50 active:bg-white/20"
                        ></button>
                        <button
                            onClick={() => {}}
                            className="bg-black/50 active:bg-white/20"
                        ></button>
                        <button
                            onClick={() => {}}
                            className="bg-black/50 active:bg-white/20"
                        ></button>
                        <button
                            onClick={() => {}}
                            className="bg-black/50 active:bg-white/20"
                        ></button>
                    </div>

                    {/* column */}
                    <div className="z-10 absolute top-0 left-0 right-0 bottom-0 grid grid-cols-4">
                        <div className="border border-gray-500"></div>
                        <div className="border border-gray-500"></div>
                        <div className="border border-gray-500"></div>
                        <div className="border border-gray-500"></div>
                    </div>

                    {/* tile */}
                    <div
                        className={`z-0 bg-white absolute w-full left-0 right-0 flex flex-col justify-between ease-linear`}
                        style={{
                            backgroundColor: '#e5e5f7',
                            opacity: 0.8,
                            backgroundImage:
                                'linear-gradient(135deg, #444cf7 25%, transparent 25%), linear-gradient(225deg, #444cf7 25%, transparent 25%), linear-gradient(45deg, #444cf7 25%, transparent 25%), linear-gradient(315deg, #444cf7 25%, #e5e5f7 25%)',
                            backgroundPosition: '100px 0, 100px 0, 0 0, 0 0',
                            backgroundSize: '100px 100px',
                            backgroundRepeat: 'repeat',

                            transitionDuration: '201.632s',

                            bottom: start
                                ? -(audioRef.current?.duration * 0.7 * height) +
                                  height * 2
                                : 0,
                            // bottom: start
                            //     ? -(
                            //           audioRef.current?.duration * height -
                            //           height
                            //       ) * 0.7
                            //     : 0,
                            height:
                                audioRef.current?.duration * 0.7 * height -
                                height,
                        }}
                    >
                        <span className="bg-red-500">end</span>
                        <span className="bg-green-500">start</span>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Home;
