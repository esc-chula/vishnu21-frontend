import CrosswordGame from '@/components/game/crossword/game';
import { useState } from 'react';
import { LinksLoadingContext } from '../links';

export default function CrossWord() {
    const [vignetteLoaded, setVignetteLoaded] = useState<boolean>(false);

    return (
        <LinksLoadingContext.Provider
            value={{ vignetteLoaded, setVignetteLoaded }}
        >
            <main className="">
                <CrosswordGame />
            </main>
        </LinksLoadingContext.Provider>
    );
}
