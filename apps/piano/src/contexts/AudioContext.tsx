import { useWindowSize } from '@/hooks/useWindowSize';
import { createContext, useEffect, useRef, useState } from 'react';

interface AudioProviderProps {
    children: React.ReactNode;
}

interface AudioContextProps {
    audioRef: React.MutableRefObject<HTMLAudioElement>;
    start: boolean;
    setStart: React.Dispatch<React.SetStateAction<boolean>>;
    durationToHeight: (duration: number) => number;
}

export const AudioContext = createContext<AudioContextProps>(null);

const AudioProvider: React.FC<AudioProviderProps> = ({ children }) => {
    const { height } = useWindowSize();
    const tileHeight = height - 144;
    const videoRef = useRef<HTMLVideoElement>(null);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [start, setStart] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);

    useEffect(() => {
        audioRef.current?.addEventListener('timeupdate', () => {
            setCurrentTime(audioRef.current.currentTime);
        });
    });

    const startHandler = () => {
        setStart(true);
        audioRef.current.play();
        videoRef.current.play();
    };

    const durationToHeight = (duration: number) => {
        return (
            (audioRef.current?.duration * 0.7 * tileHeight * duration) /
            audioRef.current?.duration
        );
    };

    return (
        <AudioContext.Provider
            value={{ audioRef, start, setStart, durationToHeight }}
        >
            {start ? null : (
                <div className="fixed z-50 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-30 backdrop-blur-lg grid place-content-center">
                    <button
                        onClick={startHandler}
                        className="bg-white rounded-lg px-6 py-2"
                    >
                        Start
                    </button>
                </div>
            )}
            <div className="fixed text-white z-50 top-0 left-0 right-0 bottom-80 pointer-events-none grid place-content-center text-4xl font-bold">
                {currentTime.toFixed(0)}
            </div>

            {/* video bg */}
            <div className="z-0 absolute top-0 left-0 right-0 bottom-0 flex justify-center">
                <video
                    ref={videoRef}
                    src="/video/siilued_mhoo.webm"
                    className="object-cover object-center h-full"
                />
            </div>

            <audio ref={audioRef} src="/audio/siilued_mhoo.mp3"></audio>

            {children}
        </AudioContext.Provider>
    );
};

export default AudioProvider;
