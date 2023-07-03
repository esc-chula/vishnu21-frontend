import '../styles/globals.css';
// include styles from the ui package
import 'ui/styles.css';

import type { AppProps } from 'next/app';
import { ADMIN_PRODUCTION } from 'env';

export default function MyApp({ Component, pageProps }: AppProps) {
    if (ADMIN_PRODUCTION) {
        return <Component {...pageProps} />;
    } else {
        return <></>;
    }
}
