type TStatus = 'Admin' | 'Intania106' | 'Intania107' | 'Testing' | 'Unknown';

type TRoles = 'User' | 'Admin' | 'Activity' | 'Board' | 'IT' | 'HeadHouse';

export interface IUser {
    userId: string;
    name: string;
    nickname: string;
    studentId: string;
    telNo: string;
    instagram: string;
    profilePicture: string;
    lineIdToken: string;
    lineUsername: string;
    lineUserId: string;
    ticketToken: string;
    status: TStatus;
    roles: TRoles[];
    groupId: string;
}

export interface ILineProfile {
    userId: string;
    displayName: string;
    pictureUrl?: string;
    statusMessage?: string;
}
