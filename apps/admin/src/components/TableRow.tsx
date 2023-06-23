import { useRouter } from 'next/router';

interface TableRowProps {
    header?: boolean;
    group: string;
    name: string;
    longName?: string;
    score: string;
}

const TableRow: React.FC<TableRowProps> = ({
    header,
    group,
    name,
    longName,
    score,
}) => {
    const router = useRouter();

    return (
        <>
            <div
                className={`flex justify-between py-2 px-4 ${
                    header
                        ? 'font-bold'
                        : 'cursor-pointer select-none duration-100 border border-transparent hover:border hover:border-neutral-200 rounded-xl hover:shadow-sm'
                }`}
                onClick={() => {
                    if (!header) {
                        router.push(`/group/${group}`);
                    }
                }}
            >
                <div className="flex flex-grow w-32">{group}</div>
                <div className="flex flex-grow items-center w-48 space-x-1">
                    {name}
                </div>
                <div className="hidden md:flex flex-grow w-full text-gray-400 text-sm">
                    {longName}
                </div>
                <div className="flex flex-grow w-24">{score}</div>
            </div>
            {header ? <hr /> : null}
        </>
    );
};

export default TableRow;
