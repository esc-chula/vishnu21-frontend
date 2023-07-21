import UserData from '@/mocks/user-data.json';
import { useState } from 'react';
import MemberTableRow from './table/MemberTableRow';
import { IUser } from 'types';

interface GroupMembersProps {
    members: IUser[];
}

const GroupMembers: React.FC<GroupMembersProps> = ({ members }) => {
    return (
        <div className="space-y-4">
            <div>
                <MemberTableRow
                    header
                    name="ชื่อ"
                    nickName="ชื่อเล่น"
                    studentId="เลขนิสิต"
                    telNo="เบอร์โทรศัพท์"
                    lineUsername="LINE"
                />
                {members
                    .filter((member) => member.roles.includes('User'))
                    .map((member) => (
                        <MemberTableRow
                            key={member.userId}
                            name={member.name}
                            nickName={member.nickname}
                            studentId={member.studentId}
                            telNo={member.telNo}
                            lineUsername={member.lineUsername}
                        />
                    ))}
            </div>
        </div>
    );
};

export default GroupMembers;
