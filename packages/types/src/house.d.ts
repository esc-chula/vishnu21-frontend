import { IGroup, THouse } from './group';

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

export interface IHouse {
    altColor: string;
    bgColor: string;
    bgPosition: string;
    color: string;
    contacts: IContact[];
    group: TGroup;
    groupId: string;
    houseName: string;
    instagram: string;
    lineGroup: string;
    longName: string;
    members: IUser[];
    name: string;
    posts: IPost[];
    score: number;
    shortName: string;
    theme: 'dark' | 'light';
}
