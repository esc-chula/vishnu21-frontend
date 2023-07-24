import { PiMagnifyingGlass } from 'react-icons/pi';
import useCrossword from '@/hooks/useCrossword';
import { useState } from 'react';

export default function Crossword() {
    const {
        data: crosswordData,
        query,
        handleQuerySubmit,
        handleQueryChange,
        foundWords,
    } = useCrossword();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const submitAnswerHandler = async () => {
        if (isLoading) return;

        if (foundWords.length !== 8) return;

        setIsLoading(true);
    };

    return (
        <section className="flex flex-col gap-8 w-[355px] mx-auto mt-24">
            <div className="text-center">
                <h1 className="font-bold text-3xl">Crossword</h1>
            </div>

            <div className="relative w-[355px] border bg-white/5 backdrop-blur-xl border-white/50 p-4 rounded-2xl">
                <div className="relative z-10 flex flex-col gap-4">
                    {crosswordData?.map((row, rowIndex) => {
                        return (
                            <div className="flex gap-4" key={rowIndex}>
                                {row.map((cell, cellIndex) => {
                                    return (
                                        <div className="flex-1" key={cellIndex}>
                                            <span className="font-mono text-lg">
                                                {cell}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>

                {foundWords.includes('VISHNU') && (
                    <div className="rounded-full bg-yellow-50/50 absolute top-[0.8rem] left-[6.68rem] w-8 h-[15.8rem]" />
                )}
                {foundWords.includes('PARABOLA') && (
                    <div className="rounded-full bg-yellow-50/50 absolute top-[0.8rem] right-[7.1rem] bottom-[0.8rem] w-8" />
                )}
                {foundWords.includes('MIDTERM') && (
                    <div className="rounded-full bg-yellow-50/50 absolute top-[0.8rem] right-[2.87rem] bottom-[3.5rem] w-8" />
                )}
                {foundWords.includes('INTANIA') && (
                    <div className="rounded-full bg-yellow-50/50 absolute top-[3.6rem] left-[6.7rem] right-[0.7rem] h-8" />
                )}
                {foundWords.includes('PYTHON') && (
                    <div className="rounded-full bg-yellow-50/50 absolute top-[9.1rem] left-[0.4rem] w-[12.6rem] h-8" />
                )}
                {foundWords.includes('CHULA') && (
                    <div className="rounded-full bg-yellow-50/50 absolute top-[14.6rem] left-[2.5rem] w-[10.5rem] h-8" />
                )}
                {foundWords.includes('LARNGEAR') && (
                    <div className="rounded-full bg-yellow-50/50 absolute bottom-[0.85rem] left-[0.4rem] w-[16.8rem] h-8" />
                )}
                {foundWords.includes('FRESHY') && (
                    <div className="rounded-full bg-yellow-50/50 absolute top-[5.9rem] right-[0.75rem] bottom-[0.8rem] w-8" />
                )}
            </div>

            <form onSubmit={handleQuerySubmit} className="flex relative gap-2">
                <input
                    type="text"
                    className="bg-neutral-50 shadow-faq rounded-2xl w-full px-5 py-3 duration-300 outline-none placeholder:text-neutral-400 text-neutral-700 font-semibold"
                    placeholder="ลองทายคำดูสิ !"
                    value={query}
                    onChange={handleQueryChange}
                />

                <button className="rounded-2xl bg-neutral-50 shadow-faq text-primary-600 px-4 py-3 ">
                    <PiMagnifyingGlass className="w-6 h-6" />
                </button>
            </form>

            <div className="relative border w-full bg-white/5 backdrop-blur-xl border-white/50 p-4 h-20 rounded-2xl">
                <div
                    className={`absolute z-10 top-0 left-0 right-0 bottom-0 p-3 ease-in duration-[1500ms] ${
                        foundWords.length !== 8 &&
                        'opacity-0 pointer-events-none'
                    }`}
                >
                    <button
                        disabled={isLoading}
                        onClick={submitAnswerHandler}
                        className="w-full h-full bg-primary-500 font-bold rounded-xl shadow-faq"
                    >
                        {isLoading ? 'กำลังส่งคำตอบ...' : 'ส่งคำตอบ'}
                    </button>
                </div>
                <span
                    className={`text-white text-sm ease-in duration-[1500ms] ${
                        foundWords.length === 8 && 'opacity-0'
                    }`}
                >
                    {foundWords.join(', ')}
                </span>
            </div>
        </section>
    );
}
