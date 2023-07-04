import Game from '@/components/game/siilued-mhoo';
import AudioProvider from '@/contexts/game/siilued-mhoo/AudioContext';
import KeyPressProvider from '@/contexts/game/siilued-mhoo/KeyPressContext';
import ScoreProvider from '@/contexts/game/siilued-mhoo/ScoreContext';
import type { NextPage } from 'next';

const SiiluedMhoo: NextPage = () => {
    return (
        <main className="select-none">
            <AudioProvider>
                <ScoreProvider>
                    <KeyPressProvider>
                        <Game />
                    </KeyPressProvider>
                </ScoreProvider>
            </AudioProvider>
        </main>
    );
};

export default SiiluedMhoo;
