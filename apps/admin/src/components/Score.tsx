import axios from '@/utils/fetcher';

interface ScoreProps {
    groupId: string;
}

const Score: React.FC<ScoreProps> = ({ groupId }) => {
    const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const score = e.currentTarget.score.value;
        const info = e.currentTarget.info.value;

        if (!score || !info) return;

        const scoreBody = {
            groupId,
            score: score,
            info: info,
        };

        axios
            .post('/scores', scoreBody)
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    };

    return (
        <form
            onSubmit={submitHandler}
            className="flex flex-col md:flex-row md:items-end space-y-6 md:space-y-0 md:space-x-6"
        >
            <div className="flex flex-col space-y-2.5">
                <label className="text-sm md:text-base text-neutral-600">
                    จำนวน
                </label>
                <input
                    name="score"
                    type="number"
                    className="!outline-none w-32 rounded-lg border border-neutral-300 py-2 px-4 bg-transparent"
                />
            </div>
            <div className="flex flex-col space-y-2.5 w-full">
                <label className="text-sm md:text-base text-neutral-600">
                    หมายเหตุ
                </label>
                <input
                    name="info"
                    className="!outline-none rounded-lg border border-neutral-300 py-2 px-4 bg-transparent w-full"
                />
            </div>
            <div className="flex flex-col space-y-2.5">
                <button
                    type="submit"
                    className="!bg-neutral-800 !text-white font-medium rounded-lg px-6 py-2"
                >
                    บันทึก
                </button>
            </div>
        </form>
    );
};

export default Score;
