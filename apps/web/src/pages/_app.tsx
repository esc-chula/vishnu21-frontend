import '../styles/globals.css';
// include styles from the ui package
import 'ui/styles.css';

import type { AppProps } from 'next/app';
import { WEB_PRODUCTION } from 'env';
import { Analytics } from '@vercel/analytics/react';

export default function MyApp({ Component, pageProps }: AppProps) {
    if (WEB_PRODUCTION) {
        return (
            <>
                <Component {...pageProps} />;
                <Analytics />
            </>
        );
    } else {
        return <></>;
    }
}
