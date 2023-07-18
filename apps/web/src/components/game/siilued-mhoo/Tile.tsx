import { useContext, useEffect, useRef, useState } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';
import { KeyPressContext } from '@/contexts/game/siilued-mhoo/KeyPressContext';
import { ScoreContext } from '@/contexts/game/siilued-mhoo/ScoreContext';
import { AudioContext } from '@/contexts/game/siilued-mhoo/AudioContext';

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
    const { keysPress, setIsTapping } = useContext(KeyPressContext);
    const { height } = useWindowSize();

    const tileRef = useRef<HTMLDivElement>(null);
    const targetRef = useRef<HTMLDivElement>(null);

    const [scored, setScored] = useState<boolean>(false);
    const [missed, setMissed] = useState<boolean>(false);

    const detectorY = height - 144;

    const isTappingHandler = (boolean: boolean) => {
        if (track === 1) {
            setIsTapping((prev) => ({ ...prev, d: boolean }));
        } else if (track === 2) {
            setIsTapping((prev) => ({ ...prev, f: boolean }));
        } else if (track === 3) {
            setIsTapping((prev) => ({ ...prev, j: boolean }));
        } else if (track === 4) {
            setIsTapping((prev) => ({ ...prev, k: boolean }));
        }
        // console.log('isTapping', boolean);
    };

    const checkTap = () => {
        const { top: tileTop, bottom: tileBottom } =
            tileRef.current!.getBoundingClientRect();

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

        if (detectorY > tileTop && detectorY < tileBottom) {
            isTappingHandler(true);
            setScored(true);

            const accuracy =
                100 - Math.abs((tileTop + tileBottom) / 2 - detectorY) + 115;
            setScore((prev) => [...prev, Math.round(accuracy * 10)]);
            setAccuracyHistory((prev) => [...prev, accuracy]);

            console.log('time', position, audioRef.current.currentTime);
            // console.log('accuracy', accuracy);
        } else {
            if (detectorY < tileTop) {
                setMissed(true);
                setTotalMiss((prev) => prev + 1);
                console.log('missed');
            }
        }
    };

    useEffect(() => checkTap(), [keysPress]);
    useEffect(() => {
        if (scored) {
            setTimeout(
                () => {
                    isTappingHandler(false);
                },
                hold ? range * 1000 + 50 : 200
            );
        }
    }, [scored]);

    return (
        <>
            <div
                ref={tileRef}
                className={`absolute flex ${
                    hold ? 'items-end' : 'items-end'
                } w-full`}
                style={{
                    height: tileOffset,
                    bottom: durationToHeight(position) - tileOffset / 2,
                }}
            >
                <div
                    className={`absolute w-full shadow-lg ${
                        missed ? 'bg-white/10' : 'bg-white/90'
                    }`}
                    style={{
                        height: hold ? durationToHeight(range) : '16px',
                        marginTop: tileOffset / 2,
                        marginBottom: tileOffset / 2,
                    }}
                ></div>
            </div>
        </>
    );
};

export default Tile;
