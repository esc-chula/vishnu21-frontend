import { useEffect, useRef } from 'react';

export const useKeyDown = (targetKey: string, callback: () => void): void => {
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent): void => {
            if (event.key === targetKey) {
                callback();
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [targetKey, callback]);
};

export const useKeyUp = (targetKey: string, callback: () => void): void => {
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent): void => {
            if (event.key === targetKey) {
                callback();
            }
        };

        window.addEventListener('keyup', handleKeyPress);

        return () => {
            window.removeEventListener('keyup', handleKeyPress);
        };
    }, [targetKey, callback]);
};

export const useKeyUpAndDown = (
    targetKey: string,
    callback: () => void
): void => {
    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent): void => {
            if (event.key === targetKey) {
                callback();
            }
        };

        window.addEventListener('keyup', handleKeyPress);
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keyup', handleKeyPress);
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [targetKey, callback]);
};

export const useKeyHold = (targetKey: string): boolean => {
    const isKeyPressed = useRef(false);

    const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === targetKey) {
            isKeyPressed.current = true;
        }
    };

    const handleKeyUp = (event: KeyboardEvent) => {
        if (event.key === targetKey) {
            isKeyPressed.current = false;
        }
    };

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);
        window.addEventListener('keyup', handleKeyUp);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
            window.removeEventListener('keyup', handleKeyUp);
        };
    }, []);

    return isKeyPressed.current;
};
