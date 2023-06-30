import '../styles/globals.css';
// include styles from the ui package
import 'ui/styles.css';

import type { AppProps } from 'next/app';
import KeyPressProvider from '@/contexts/KeyPressContext';
import ScoreProvider from '@/contexts/ScoreContext';
import AudioProvider from '@/contexts/AudioContext';

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <AudioProvider>
            <ScoreProvider>
                <KeyPressProvider>
                    <Component {...pageProps} />
                </KeyPressProvider>
            </ScoreProvider>
        </AudioProvider>
    );
}
