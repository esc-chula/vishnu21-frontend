import { IUser } from './user';

export type TGroup =
    | 'A'
    | 'B'
    | 'C'
    | 'Dog'
    | 'E'
    | 'F'
    | 'G'
    | 'H'
    | 'J'
    | 'K'
    | 'L'
    | 'M'
    | 'N'
    | 'P'
    | 'Q'
    | 'R'
    | 'S'
    | 'T';

export type THouse =
    | 'อามองอัส'
    | 'อาหารเผ็ด'
    | 'อนาคตใจ'
    | 'อาการไหน'
    | 'อารีย์'
    | 'อากาโตะ'
    | 'อากาศ'
    | 'อาคม'
    | 'Rคงที่'
    | 'อาการรัก'
    | 'อาหมวยหาย'
    | 'อาต้านทาน'
    | 'อาแฮงค์'
    | 'อาจารย์'
    | 'อาถรรพ์'
    | 'อาสา'
    | 'Rลาดิน'
    | 'Rโหเธอ';

interface IContact {
    name: string;
    phone: string;
}

interface IPost {}

interface IScoreHistory {}

export interface IGroup {
    groupId: string;
    houseName: string;
    shortName: string;
    group: TGroup;
    score: number;
    contacts: IContact[];
    members: IUser[];
    posts: IPost[];
}
