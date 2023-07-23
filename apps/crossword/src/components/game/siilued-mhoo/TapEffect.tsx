import { KeyPressContext } from '@/contexts/game/siilued-mhoo/KeyPressContext';
import { useContext } from 'react';

const TapEffect: React.FC = () => {
    const { keysPress, isTapping } = useContext(KeyPressContext);

    return (
        <div className="z-40 absolute bottom-[150px] left-0 right-0 grid grid-cols-4 text-white text-2xl">
            {['d', 'f', 'j', 'k'].map((key) => (
                <div
                    key={key}
                    className={
                        isTapping[key] && keysPress[key]
                            ? 'w-full h-40 bg-gradient-to-t from-red-800/50 to-transparent'
                            : 'opacity-0'
                    }
                >
                    {/* {isTapping[key] && keysPress[key] ? '⚙️' : ''} */}
                </div>
            ))}
        </div>
    );
};

export default TapEffect;
