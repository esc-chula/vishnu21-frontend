import type { NextPage } from 'next';
import { useState } from 'react';
import ReactHammer from 'react-hammerjs';

const Game: NextPage = () => {
    const [button1Pressed, setButton1Pressed] = useState(false);
    const [button2Pressed, setButton2Pressed] = useState(false);
    const [button3Pressed, setButton3Pressed] = useState(false);
    const [button4Pressed, setButton4Pressed] = useState(false);

    return (
        <div className="flex flex-col space-y-10">
            <ReactHammer
                onTap={() => {
                    setButton1Pressed(true);
                    setTimeout(() => {
                        setButton1Pressed(false);
                    }, 100);
                }}
            >
                <button
                    className={`w-40 h-40 ${
                        button1Pressed ? 'bg-green-500' : 'bg-red-500'
                    } text-white`}
                >
                    1
                </button>
            </ReactHammer>
            <ReactHammer
                onTap={() => {
                    setButton2Pressed(true);
                    setTimeout(() => {
                        setButton2Pressed(false);
                    }, 100);
                }}
            >
                <button
                    className={`w-40 h-40 ${
                        button2Pressed ? 'bg-green-500' : 'bg-red-500'
                    } text-white`}
                >
                    2
                </button>
            </ReactHammer>
            <ReactHammer
                onTap={() => {
                    setButton3Pressed(true);
                    setTimeout(() => {
                        setButton3Pressed(false);
                    }, 100);
                }}
            >
                <button
                    className={`w-40 h-40 ${
                        button3Pressed ? 'bg-green-500' : 'bg-red-500'
                    } text-white`}
                >
                    3
                </button>
            </ReactHammer>
        </div>
    );
};

export default Game;
