interface ScoreTableRowProps {
    header?: boolean;
    amount: string;
    note: string;
}

const ScoreTableRow: React.FC<ScoreTableRowProps> = ({
    header,
    amount,
    note,
}) => {
    return (
        <>
            <div
                className={`flex justify-between py-2 px-4 ${
                    header ? 'font-bold' : ''
                }`}
            >
                <div className="flex flex-grow w-32">{amount}</div>
                <div className="flex flex-grow items-center w-full">{note}</div>
            </div>
            {header ? <hr /> : null}
        </>
    );
};

export default ScoreTableRow;
