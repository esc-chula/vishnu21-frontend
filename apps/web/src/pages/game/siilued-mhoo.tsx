import Game from '@/components/game/siilued-mhoo/Game';
import AudioProvider from '@/contexts/game/siilued-mhoo/AudioContext';
import KeyPressProvider from '@/contexts/game/siilued-mhoo/KeyPressContext';
import ScoreProvider from '@/contexts/game/siilued-mhoo/ScoreContext';
import type { NextPage } from 'next';

const SiiluedMhoo: NextPage = () => {
    return (
        <AudioProvider>
            <ScoreProvider>
                <KeyPressProvider>
                    <Game />
                </KeyPressProvider>
            </ScoreProvider>
        </AudioProvider>
    );
};

export default SiiluedMhoo;
