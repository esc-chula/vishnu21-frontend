import axios from '@/utils/fetcher';
import { useEffect, useState } from 'react';
import ScoreTableRow from './table/ScoreTableRow';

interface ScoreHistoryProps {
    houseName: string;
}

const ScoreHistory: React.FC<ScoreHistoryProps> = ({ houseName }) => {
    const [scores, setScores] = useState([]);

    useEffect(() => {
        const fetchScore = async () => {
            await axios
                .get(`/scores/${houseName}`)
                .then((res) => {
                    setScores(res.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        };

        fetchScore();
    }, []);

    return (
        <>
            <ScoreTableRow header amount="จำนวน" note="หมายเหตุ" />
            <ScoreTableRow amount="10" note="ให้สักหน่อย" />
        </>
    );
};

export default ScoreHistory;
