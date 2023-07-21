interface MemberTableRowProps {
    header?: boolean;
    name: string;
    nickName: string;
    studentId: string;
    telNo: string;
    lineUsername: string;
}

const MemberTableRow: React.FC<MemberTableRowProps> = ({
    header,
    name,
    nickName,
    studentId,
    telNo,
    lineUsername,
}) => {
    return (
        <>
            <div
                className={`flex justify-between py-2 px-4 ${
                    header ? 'font-bold' : 'hover:bg-neutral-100 rounded-xl'
                }`}
            >
                <div className="flex">
                    <div className="flex w-72">{name}</div>
                    <div className="flex w-36">{nickName}</div>
                    <div className="flex w-36">{studentId}</div>
                    <div className="flex w-36">{telNo}</div>
                </div>
                <div className="flex">
                    <div className="flex">
                        {header ? lineUsername : lineUsername}
                    </div>
                </div>
            </div>
            {header ? <hr /> : null}
        </>
    );
};

export default MemberTableRow;
