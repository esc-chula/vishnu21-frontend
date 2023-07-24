import axios from '@/utils/fetcher';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import ScoreTableRow from './table/ScoreTableRow';

interface ScoreHistoryProps {
    scores: {
        id: string;
        info: string;
        score: string;
    }[];
}

const ScoreHistory: React.FC<ScoreHistoryProps> = ({ scores }) => {
    if (!scores) return <></>;
    return (
        <>
            {scores.map((score) => {
                return (
                    <ScoreTableRow
                        key={score.id}
                        id={score.id}
                        amount={score.score}
                        note={score.info}
                    />
                );
            })}
            {/* <ScoreTableRow header amount="จำนวน" note="หมายเหตุ" />
            <ScoreTableRow amount="10" note="ให้สักหน่อย" /> */}
        </>
    );
};

export default ScoreHistory;
