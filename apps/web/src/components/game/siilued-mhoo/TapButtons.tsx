import { KeyPressContext } from '@/contexts/game/siilued-mhoo/KeyPressContext';
import React, { useContext } from 'react';

const TapButtons: React.FC = () => {
    const { keysPress, setKeysPress } = useContext(KeyPressContext);

    return (
        <div className="z-30 absolute bottom-0 left-0 right-0 border-t-[6px] border-white grid grid-cols-4">
            {['d', 'f', 'j', 'k'].map((key) => (
                <button
                    key={key}
                    onMouseDown={() => {
                        setKeysPress((prev) => ({
                            ...prev,
                            [key]: true,
                        }));
                    }}
                    onMouseUp={() => {
                        setKeysPress((prev) => ({
                            ...prev,
                            [key]: false,
                        }));
                    }}
                    onMouseLeave={() => {
                        setKeysPress((prev) => ({
                            ...prev,
                            [key]: false,
                        }));
                    }}
                    className={`${
                        keysPress[key]
                            ? 'bg-black/[35%]'
                            : `bg-black/50 active:bg-black/[35%]`
                    } relative h-36 border border-white/5 group backdrop-blur-md`}
                >
                    <div
                        className={`${
                            keysPress[key] ? 'h-80' : 'group-active:h-80'
                        } absolute bottom-[150px] w-full bg-gradient-to-t from-white/40 to-transparent`}
                    ></div>
                </button>
            ))}
        </div>
    );
};

export default TapButtons;
