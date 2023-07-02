import '../styles/globals.css';
// include styles from the ui package
import 'ui/styles.css';

import type { AppProps } from 'next/app';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <main className="flex justify-center">
            <div
                className={`relative overflow-hidden min-h-screen max-w-screen-sm w-full bg-white`}
            >
                <Component {...pageProps} />
            </div>
        </main>
    );
}
