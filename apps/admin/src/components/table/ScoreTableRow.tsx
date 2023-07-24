import axios from '@/utils/fetcher';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FiEdit, FiTrash2 } from 'react-icons/fi';

interface ScoreTableRowProps {
    header?: boolean;
    id: string;
    amount: string;
    note: string;
}

const ScoreTableRow: React.FC<ScoreTableRowProps> = ({
    header,
    id,
    amount,
    note,
}) => {
    const router = useRouter();

    const [isLoading, setIsLoading] = useState<boolean>(false);

    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (isLoading) return;

        setIsLoading(true);

        const score = e.currentTarget.score.value;
        const info = e.currentTarget.info.value;

        if (!score || !info) return;

        const scoreBody = {
            score: parseInt(score),
            info: info,
        };

        await axios
            .patch(`/scores/${id}`, scoreBody, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`,
                },
            })
            .then((res) => {
                console.log(res.data);
                setIsLoading(false);
                router.reload();
            })
            .catch((err) => {
                console.error(err);
                alert('Failed adding score');
                setIsLoading(false);
            });
    };

    return (
        <>
            <form
                onSubmit={submitHandler}
                className={`flex items-center relative hover:bg-neutral-50 rounded-2xl justify-between py-2 px-4 ${
                    header ? 'font-bold' : ''
                }`}
            >
                <input
                    name="score"
                    defaultValue={amount}
                    className={`flex flex-grow w-32 !outline-none bg-transparent`}
                />
                <input
                    name="info"
                    defaultValue={note}
                    className={`flex flex-grow items-center w-full !outline-none bg-transparent`}
                />
                <div
                    className={`absolute flex space-x-4 text-neutral-800 right-4`}
                >
                    <button type="submit">
                        <FiEdit />
                    </button>
                    <button
                        onClick={async () => {
                            if (isLoading) return;

                            setIsLoading(true);

                            if (window.confirm('ต้องการลบใช่หรือไม่'))
                                await axios
                                    .delete(`/scores/${id}`, {
                                        headers: {
                                            Authorization: `Bearer ${localStorage.getItem(
                                                'token'
                                            )}`,
                                        },
                                    })
                                    .then((res) => {
                                        console.log(res.data);
                                        setIsLoading(false);
                                        router.reload();
                                    })
                                    .catch((err) => {
                                        console.error(err);
                                        setIsLoading(false);
                                        alert('Failed deleting score');
                                    });
                        }}
                    >
                        <FiTrash2 />
                    </button>
                </div>
            </form>
            {header ? <hr /> : null}
        </>
    );
};

export default ScoreTableRow;
