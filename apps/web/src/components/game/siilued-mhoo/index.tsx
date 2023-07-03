import Slider from './Slider';
import TapButtons from './TapButtons';
import Track from './Track';
import TrackBorder from './TrackBorder';
import TapEffect from './TapEffect';

const Game: React.FC = () => {
    return (
        <main className="flex justify-center h-screen w-full bg-black overflow-hidden">
            <div className="max-w-screen-sm h-full w-full relative bg-black/20">
                <Slider />
                <TapEffect />
                <TapButtons />
                <TrackBorder />
                <Track />
            </div>
        </main>
    );
};

export default Game;
