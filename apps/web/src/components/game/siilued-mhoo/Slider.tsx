import { AudioContext } from '@/contexts/game/siilued-mhoo/AudioContext';
import { useContext } from 'react';

const Slider: React.FC = () => {
    const { audioRef } = useContext(AudioContext);

    return (
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
    );
};

export default Slider;
