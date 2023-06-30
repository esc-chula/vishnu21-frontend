import { createContext, useState } from 'react';

interface ScoreProviderProps {
    children: React.ReactNode;
}

interface ScoreContextProps {
    totalScore: number;
    setTotalScore: React.Dispatch<React.SetStateAction<number>>;
    totalMiss: number;
    setTotalMiss: React.Dispatch<React.SetStateAction<number>>;
}

export const ScoreContext = createContext<ScoreContextProps>(null);

const ScoreProvider: React.FC<ScoreProviderProps> = ({ children }) => {
    const [totalScore, setTotalScore] = useState(0);
    const [totalMiss, setTotalMiss] = useState(0);

    console.log(totalMiss);

    return (
        <ScoreContext.Provider
            value={{ totalScore, setTotalScore, totalMiss, setTotalMiss }}
        >
            <div className="fixed text-white z-50 top-0 left-0 right-0 bottom-96 pointer-events-none grid place-content-center text-4xl font-bold">
                {totalScore}
            </div>
            {children}
        </ScoreContext.Provider>
    );
};

export default ScoreProvider;
