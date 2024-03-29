import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { LIFF_PRODUCTION } from 'env';
import HouseProvider from '@/contexts/HouseContext';
import AuthProvider from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import Body from '@/components/Body';
import { Analytics } from '@vercel/analytics/react';
import LiffProvider from '@/contexts/LiffContext';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    const whiteListedPaths = [
        '/',
        '/rules',
        '/faq',
        '/faq/cufirstdate',
        '/faq/vishnu21',
        '/faq/[event]',
        '/club',
        '/club/qr',
        '/club/[id]',
        '/schedule',
        '/contact',
        '/map',
        '/scores',
    ];

    if (LIFF_PRODUCTION) {
        return (
            <LiffProvider>
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
            </LiffProvider>
        );
    } else {
        return <></>;
    }
}

export default MyApp;
