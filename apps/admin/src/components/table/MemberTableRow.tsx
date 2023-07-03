interface MemberTableRowProps {
    header?: boolean;
    firstName: string;
    lastName: string;
    nickName: string;
    gender: string;
    studentId: string;
    lineUserId: string;
}

const MemberTableRow: React.FC<MemberTableRowProps> = ({
    header,
    firstName,
    lastName,
    nickName,
    gender,
    studentId,
    lineUserId,
}) => {
    return (
        <>
            <div
                className={`flex justify-between py-2 px-4 ${
                    header ? 'font-bold' : ''
                }`}
            >
                <div className="flex">
                    <div className="flex w-36">{firstName}</div>
                    <div className="flex w-36">{lastName}</div>
                    <div className="flex w-36">{nickName}</div>
                    <div className="flex w-36">{gender}</div>
                    <div className="flex w-36">{studentId}</div>
                </div>
                <div className="flex">
                    <div className="flex">
                        {header
                            ? lineUserId
                            : lineUserId
                            ? 'ล็อกอินแล้ว'
                            : 'ใครวะ'}
                    </div>
                </div>
            </div>
            {header ? <hr /> : null}
        </>
    );
};

export default MemberTableRow;
