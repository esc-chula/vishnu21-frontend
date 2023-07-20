import '../styles/globals.css';
import type { AppProps } from 'next/app';
import type Liff from '@line/liff';
import { useState, useEffect } from 'react';
import { LIFF_PRODUCTION } from 'env';
import HouseProvider from '@/contexts/HouseContext';
import AuthProvider from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import Body from '@/components/Body';
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const whiteListedPaths = ['/', '/rule'];

    const [liffObject, setLiffObject] = useState<typeof Liff | null>(null);
    const [liffError, setLiffError] = useState<string | null>(null);

    // Execute liff.init() when the app is initialized
    useEffect(() => {
        // to avoid `window is not defined` error
        import('@line/liff')
            .then((liff) => liff.default)
            .then((liff) => {
                console.log('LIFF init...');
                liff.init({ liffId: process.env.NEXT_PUBLIC_VISHNU_LIFF_ID! })
                    .then(() => {
                        console.log('LIFF init succeeded.');
                        setLiffObject(liff);
                    })
                    .catch((error: Error) => {
                        console.log('LIFF init failed.');
                        setLiffError(error.toString());
                    });
            });
    }, []);

    // Provide `liff` object and `liffError` object
    // to page component as property
    pageProps.liff = liffObject;
    pageProps.liffError = liffError;

    if (LIFF_PRODUCTION) {
        return (
            <>
                {whiteListedPaths.includes(router.pathname) ? (
                    <Body>
                        <Component {...pageProps} />
                    </Body>
                ) : (
                    <AuthProvider {...pageProps}>
                        {router.pathname === '/login' ? (
                            <Body>
                                <Component {...pageProps} />
                            </Body>
                        ) : (
                            <HouseProvider>
                                <Body>
                                    <Component {...pageProps} />
                                </Body>
                            </HouseProvider>
                        )}
                    </AuthProvider>
                )}
                <Analytics />
            </>
        );
    } else {
        return <></>;
    }
}

export default MyApp;
