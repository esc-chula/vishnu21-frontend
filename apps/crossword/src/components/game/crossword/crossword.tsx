import { PiMagnifyingGlass } from 'react-icons/pi';
import useCrossword from './useCrossword';

export default function Crossword() {
    const {
        data: crosswordData,
        query,
        handleQuerySubmit,
        handleQueryChange,
        foundWords,
    } = useCrossword();

    return (
        <section className="flex flex-col gap-8 w-[355px] mx-auto">
            <form onSubmit={handleQuerySubmit} className="flex relative gap-2">
                <input
                    type="text"
                    className="bg-white rounded-lg w-full shadow-md px-4 text-black ring-white/50 ring-2 py-3 duration-300 transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 hover:ring-4"
                    placeholder="ลองทายคำดูสิ !"
                    value={query}
                    onChange={handleQueryChange}
                />

                <button className="rounded-md bg-white text-primary-600 px-4 py-3 ring-white/50 ring-2  duration-300 transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 hover:ring-4">
                    <PiMagnifyingGlass className="w-6 h-6" />
                </button>
            </form>

            <div className="relative w-full w-[355px] border bg-white/5 backdrop-blur-xl border-white/50 p-4 rounded-2xl">
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

                {/* LARNGEAR */}
                {foundWords.includes('LARNGEAR') && (
                    <div className="rounded-full bg-yellow-50/50 absolute top-[9rem] left-[0.65rem] w-[16.5rem] h-8" />
                )}
                {/* AMAZON */}
                {foundWords.includes('AMAZON') && (
                    <div className="rounded-full bg-yellow-50/50 absolute top-[14.5rem] right-[0.7rem] w-[12.5rem] h-8" />
                )}
                {/* VISHNU */}
                {foundWords.includes('VISHNU') && (
                    <div className="rounded-full bg-yellow-50/50 absolute top-[3.25rem] right-[0.75rem] w-8 h-[16.5rem]" />
                )}
                {/* INTALAND */}
                {foundWords.includes('INTALAND') && (
                    <div className="rounded-full bg-yellow-50/50 absolute top-[0.8rem] right-[7rem] w-8 h-[21.5rem]" />
                )}
                {/* SINGHA */}
                {foundWords.includes('SINGHA') && (
                    <div className="rounded-full bg-yellow-50/50 absolute top-[0.8rem] left-[8.75rem] w-8 h-[15.5rem]" />
                )}
            </div>

            <div className="border w-full bg-white/5 backdrop-blur-xl border-white/50 p-4 rounded-2xl">
                <span className="text-white text-sm">
                    {foundWords.join(', ')}
                </span>
            </div>
        </section>
    );
}
