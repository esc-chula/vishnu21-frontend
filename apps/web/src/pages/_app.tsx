import '../styles/globals.css';
// include styles from the ui package
import 'ui/styles.css';

import type { AppProps } from 'next/app';
import { WEB_PRODUCTION } from 'env';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
    if (WEB_PRODUCTION) {
        return (
            <>
                <Head>
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                    />
                    <meta name="HandheldFriendly" content="true" />
                </Head>
                <Component {...pageProps} />
            </>
        );
    } else {
        return <></>;
    }
}
