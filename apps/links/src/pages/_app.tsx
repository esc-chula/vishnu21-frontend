import '../styles/globals.css';
// include styles from the ui package
import 'ui/styles.css';

import type { AppProps } from 'next/app';
import { LINKS_PRODUCTION } from 'env';

export default function MyApp({ Component, pageProps }: AppProps) {
    if (LINKS_PRODUCTION) {
        return (
            <main className="flex justify-center">
                <div
                    className={`relative overflow-hidden min-h-screen max-w-[500px] w-full bg-[#390686]`}
                >
                    <Component {...pageProps} />
                </div>
            </main>
        );
    } else {
        return <></>;
    }
}
