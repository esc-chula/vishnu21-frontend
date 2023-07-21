import Game from '@/components/game/siilued-mhoo';
import AudioProvider from '@/contexts/game/siilued-mhoo/AudioContext';
import KeyPressProvider from '@/contexts/game/siilued-mhoo/KeyPressContext';
import ScoreProvider from '@/contexts/game/siilued-mhoo/ScoreContext';
import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect } from 'react';

const SiiluedMhoo: NextPage = () => {
    useEffect(() => {
        document.addEventListener('gesturestart', function (e) {
            e.preventDefault();
            // @ts-ignore
            document.body.style.zoom = 0.99;
        });

        document.addEventListener('gesturechange', function (e) {
            e.preventDefault();
            // @ts-ignore
            document.body.style.zoom = 0.99;
        });
        document.addEventListener('gestureend', function (e) {
            e.preventDefault();
            // @ts-ignore
            document.body.style.zoom = 1;
        });
        document.addEventListener('touchmove', function (e) {
            e.preventDefault();
        });
    }, []);

    return (
        <>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                />
                <meta name="HandheldFriendly" content="true" />
            </Head>
            <main className="select-none">
                <AudioProvider>
                    <ScoreProvider>
                        <KeyPressProvider>
                            <Game />
                        </KeyPressProvider>
                    </ScoreProvider>
                </AudioProvider>
            </main>
        </>
    );
};

export default SiiluedMhoo;
