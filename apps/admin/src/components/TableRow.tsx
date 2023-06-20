interface TableRowProps {
    header?: boolean;
    group: string;
    name: string;
    score: string;
}

const TableRow: React.FC<TableRowProps> = ({ header, group, name, score }) => {
    return (
        <>
            <div
                className={`flex justify-between py-2 px-4 ${
                    header
                        ? 'font-bold'
                        : 'cursor-pointer duration-100 border border-transparent hover:border hover:border-neutral-200 rounded-xl hover:shadow-sm'
                }`}
            >
                <div className="flex flex-grow w-32">{group}</div>
                <div className="flex flex-grow w-full">{name}</div>
                <div className="flex flex-grow w-24">{score}</div>
            </div>
            {header ? <hr /> : null}
        </>
    );
};

export default TableRow;
