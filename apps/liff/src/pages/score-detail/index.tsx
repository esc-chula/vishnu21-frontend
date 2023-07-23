import type { NextPage } from 'next';
import Image from 'next/image';
import Decorate from '@/public/images/decorate.svg';
import GrainBackground from '@/public/images/grain-background.svg';

const data = Array.from({ length: 11 }, (_, i) => ({
    id: i,
    game: 'Lorem ipsum dolor',
    score: (i - 5) * 10 < 10 ? `${(i - 5) * 10}` : `+${(i - 5) * 10}`,
})).filter((_, i) => i !== 5);

const ScoreDetail: NextPage = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col items-center px-7 pt-16 pb-48">
            <div className="relative w-full px-5 py-2 flex justify-between rounded-3xl bg-secondary-50 shadow-details">
                <div>
                    <p className="text-base font-light">Total score</p>
                    <h1 className="text-primary-900 text-7xl font-bold ml-4">
                        80
                    </h1>
                </div>
                <div className="relative aspect-square h-20 rounded-full overflow-hidden">
                    <Image
                        src={GrainBackground}
                        alt="profile"
                        fill
                        loading="lazy"
                        className="object-contain"
                    />
                </div>
            </div>
            <ul className="flex flex-col gap-3 w-full mt-3">
                {data.map((item) => (
                    <li
                        key={item.id}
                        className={`${
                            parseInt(item.score) > 0
                                ? 'bg-success-300 text-success-900'
                                : 'bg-error-400 text-error-900'
                        } w-full px-6 flex justify-between items-center py-4 rounded-3xl shadow-details`}
                    >
                        <span className="text-xl font-bold">{item.game}</span>
                        <span className="text-2xl font-bold">{item.score}</span>
                    </li>
                ))}
            </ul>
            {/* Background and decorations */}
            <Image
                src={GrainBackground}
                alt="background"
                className="fixed top-0 left-0 -z-50 h-screen w-full object-cover"
                loading="lazy"
            />
            <div className="fixed top-0 left-0 bg-gradient-to-b from-transparent to-primary-900 w-screen h-screen -z-40" />
            <Image
                src={Decorate}
                alt="background"
                className="fixed bottom-0 left-0 w-full max-h-48 object-cover overflow-visible -z-30"
                priority
            />
        </div>
    );
};

export default ScoreDetail;
