import liff from '@line/liff';
import { createContext, useContext, useEffect, useState } from 'react';

interface LiffContextProps {
    liffObject: typeof liff | null;
}

export const LiffContext = createContext<LiffContextProps>(null);

const LiffProvider: React.FC<{
    children: React.ReactNode;
}> = ({ children }) => {
    const [liffObject, setLiffObject] = useState<typeof liff | null>(null);
    const [liffError, setLiffError] = useState<string | null>(null);

    // Execute liff.init() when the app is initialized
    useEffect(() => {
        // to avoid `window is not defined` error
        import('@line/liff')
            .then((liff) => liff.default)
            .then((liff) => {
                console.log('LIFF init...');
                liff.init({
                    liffId: process.env.NEXT_PUBLIC_VISHNU_LIFF_ID!,
                    withLoginOnExternalBrowser: true,
                })
                    .then(() => {
                        console.log('LIFF init succeeded.');
                        setLiffObject(liff);
                    })
                    .catch((error: Error) => {
                        console.log('LIFF init failed.');
                        console.log(error);
                        setLiffError(error.toString());
                    });
            });
    }, []);

    return (
        <LiffContext.Provider value={{ liffObject }}>
            {children}
        </LiffContext.Provider>
    );
};

export default LiffProvider;

export const useLiff = () => {
    const context = useContext(LiffContext).liffObject;
    if (context === undefined) {
        throw new Error('useLiff must be used within a LiffProvider');
    }
    return context;
};
