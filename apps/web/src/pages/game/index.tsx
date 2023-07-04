import type { NextPage } from 'next';
import Hammer from 'react-hammerjs';

const Game: NextPage = () => {
    return (
        <div>
            <Hammer
                onTap={(e) => {
                    console.log(e);
                }}
            >
                <button>tap</button>
            </Hammer>
        </div>
    );
};

export default Game;
