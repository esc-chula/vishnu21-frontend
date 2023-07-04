import { KeyPressContext } from '@/contexts/game/siilued-mhoo/KeyPressContext';
import React, { useContext } from 'react';
import ReactHammer from 'react-hammerjs';

const TapButtons: React.FC = () => {
    const { keysPress, setKeysPress } = useContext(KeyPressContext);

    return (
        <div className="z-30 absolute bottom-0 left-0 right-0 border-t-[6px] border-white grid grid-cols-4">
            {['d', 'f', 'j', 'k'].map((key) => (
                <ReactHammer
                    key={key}
                    onTap={() => {
                        setKeysPress((prev) => ({
                            ...prev,
                            [key]: true,
                        }));
                        setTimeout(() => {
                            setKeysPress((prev) => ({
                                ...prev,
                                [key]: false,
                            }));
                        }, 100);
                    }}
                    onPress={() => {
                        setKeysPress((prev) => ({
                            ...prev,
                            [key]: true,
                        }));
                    }}
                    onPressUp={() => {
                        setKeysPress((prev) => ({
                            ...prev,
                            [key]: false,
                        }));
                    }}
                    onPan={() => {
                        setKeysPress((prev) => ({
                            ...prev,
                            [key]: true,
                        }));
                    }}
                    onPanCancel={() => {
                        setKeysPress((prev) => ({
                            ...prev,
                            [key]: false,
                        }));
                    }}
                    onPanEnd={() => {
                        setKeysPress((prev) => ({
                            ...prev,
                            [key]: false,
                        }));
                    }}
                    onPanStart={() => {
                        setKeysPress((prev) => ({
                            ...prev,
                            [key]: true,
                        }));
                    }}
                >
                    <button
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
                </ReactHammer>
            ))}
        </div>
    );
};

export default TapButtons;
