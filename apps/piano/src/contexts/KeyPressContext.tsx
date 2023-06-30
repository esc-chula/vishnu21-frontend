import { useKeyDown, useKeyUp } from '@/hooks/useKeyPress';
import { createContext, useEffect, useState } from 'react';

interface KeyPressProviderProps {
    children: React.ReactNode;
}

export const KeyPressContext = createContext({
    keysPress: {
        d: false,
        f: false,
        j: false,
        k: false,
    },
    setKeysPress: (keyPress: {
        d: boolean;
        f: boolean;
        j: boolean;
        k: boolean;
    }) => {},
});

const KeyPressProvider: React.FC<KeyPressProviderProps> = ({ children }) => {
    const [keysPress, setKeysPress] = useState({
        d: false,
        f: false,
        j: false,
        k: false,
    });

    const handleDDown = () => setKeysPress((prev) => ({ ...prev, d: true }));
    const handleFDown = () => setKeysPress((prev) => ({ ...prev, f: true }));
    const handleJDown = () => setKeysPress((prev) => ({ ...prev, j: true }));
    const handleKDown = () => setKeysPress((prev) => ({ ...prev, k: true }));
    const handleDUp = () => setKeysPress((prev) => ({ ...prev, d: false }));
    const handleFUp = () => setKeysPress((prev) => ({ ...prev, f: false }));
    const handleJUp = () => setKeysPress((prev) => ({ ...prev, j: false }));
    const handleKUp = () => setKeysPress((prev) => ({ ...prev, k: false }));

    useKeyDown('d', handleDDown);
    useKeyDown('f', handleFDown);
    useKeyDown('j', handleJDown);
    useKeyDown('k', handleKDown);
    useKeyUp('d', handleDUp);
    useKeyUp('f', handleFUp);
    useKeyUp('j', handleJUp);
    useKeyUp('k', handleKUp);

    return (
        <KeyPressContext.Provider value={{ keysPress, setKeysPress }}>
            {children}
        </KeyPressContext.Provider>
    );
};

export default KeyPressProvider;
