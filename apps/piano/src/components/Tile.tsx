import { useContext, useEffect, useRef, useState } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';
import { KeyPressContext } from '@/contexts/KeyPressContext';
import { ScoreContext } from '@/contexts/ScoreContext';
import { AudioContext } from '@/contexts/AudioContext';

interface TileProps {
    track: 1 | 2 | 3 | 4;
    position: number;
    tileOffset?: number;
    hold?: boolean;
    range?: number;
}

const Tile: React.FC<TileProps> = ({
    track,
    position,
    tileOffset = 80,
    hold = false,
    range,
}) => {
    const { audioRef, durationToHeight } = useContext(AudioContext);
    const { setScore, setTotalMiss, setAccuracyHistory } =
        useContext(ScoreContext);
    const { keysPress } = useContext(KeyPressContext);
    const { height } = useWindowSize();

    const tileRef = useRef<HTMLDivElement>(null);

    const [scored, setScored] = useState<boolean>(false);
    const [missed, setMissed] = useState<boolean>(false);

    const detectorY = height - 144;

    const checkTap = () => {
        const { top, bottom } = tileRef.current!.getBoundingClientRect();

        if (scored) return;
        if (missed) return;

        if (track === 1) {
            if (!keysPress.d) return;
        } else if (track === 2) {
            if (!keysPress.f) return;
        } else if (track === 3) {
            if (!keysPress.j) return;
        } else if (track === 4) {
            if (!keysPress.k) return;
        }

        if (detectorY > top && detectorY < bottom) {
            setScored(true);

            const accuracy =
                100 - Math.abs((top + bottom) / 2 - detectorY) + 150;
            setScore((prev) => [...prev, Math.round(accuracy * 10)]);
            setAccuracyHistory((prev) => [...prev, accuracy]);

            console.log('time', position, audioRef.current.currentTime);
            // console.log('accuracy', accuracy);
        } else {
            if (detectorY < top) {
                setMissed(true);
                setTotalMiss((prev) => prev + 1);
                console.log('missed');
            }
        }
    };

    useEffect(() => checkTap(), [keysPress]);

    return (
        <div
            ref={tileRef}
            className={`absolute flex ${
                hold ? 'items-end' : 'items-end'
            } w-full`}
            style={{
                bottom: durationToHeight(position) - tileOffset / 2,
            }}
        >
            <div
                className={`w-full ${
                    missed
                        ? 'bg-white/20'
                        : scored
                        ? 'bg-white/20'
                        : 'bg-white/90'
                }`}
                style={{
                    height: hold ? durationToHeight(range) : '16px',
                    marginTop: tileOffset / 2,
                    marginBottom: tileOffset / 2,
                }}
            ></div>
        </div>
    );
};

export default Tile;
