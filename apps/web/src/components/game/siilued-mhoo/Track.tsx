import SiiluedMhooKeys from '@/constants/siilued_mhoo.json';
import { AudioContext } from '@/contexts/game/siilued-mhoo/AudioContext';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useContext } from 'react';
import Tile from './Tile';

const Track: React.FC = () => {
    const { height } = useWindowSize();
    const { audioRef, start } = useContext(AudioContext);
    const tileHeight = height - 144;

    return (
        <div
            className={`z-10 absolute w-full left-0 right-0 ease-linear grid grid-cols-4`}
            style={{
                transitionDuration: audioRef.current?.duration + 's',
                bottom: start
                    ? -(audioRef.current?.duration * 0.7 * tileHeight) + height
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
    );
};

export default Track;
