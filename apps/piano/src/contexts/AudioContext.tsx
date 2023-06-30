import { useWindowSize } from '@/hooks/useWindowSize';
import { createContext, useRef, useState } from 'react';

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
    const audioRef = useRef<HTMLAudioElement>(null);
    const [start, setStart] = useState<boolean>(false);

    const startHandler = () => {
        setStart(true);
        audioRef.current.play();
    };

    const durationToHeight = (duration: number) => {
        return (
            ((audioRef.current?.duration * 0.7 * height - height) * duration) /
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

            <audio ref={audioRef} src="/audio/siilued_mhoo.mp3"></audio>

            {children}
        </AudioContext.Provider>
    );
};

export default AudioProvider;
