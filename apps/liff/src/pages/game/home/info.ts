import { BsPersonFill, BsDropletFill } from 'react-icons/bs';
import { MdGroups } from 'react-icons/md';
import { BadgeProps } from './components/Badge';
import { GameCardProps } from './components/GameCard';

type ProfileInfo = {
    imageUrl: string;
    nickname: string;
    houseName: string;
};

export const profileInfo: ProfileInfo = {
    imageUrl: 'URL_IMAGE_PROFILE',
    nickname: 'น้องบอส',
    houseName: 'บ้านยูเลิฟ',
};

type Badge = {
    [key: string]: BadgeProps;
};

type Games = GameCardProps[];

export const badges: Badge = {
    group: {
        title: 'รายกรุ๊ป',
        color: 'primary-400',
        Icon: MdGroups,
    },
    individual: {
        title: 'รายคน',
        color: 'success-400',
        Icon: BsPersonFill,
    },
    firstblood: {
        title: 'Firstblood',
        color: 'error-600',
        Icon: BsDropletFill,
    },
};

export const games: Games = [
    {
        title: 'เกมทายคำจากสถานที่',
        description: `
            สวัสดีครับผมชื่อโอมผมมาจากนครสวรรค์
            ผมต้องการเงินไปทำแพลตฟอร์ม
            สอนหนังสือโอนเงินให้ผม 50 
            บาทแล้วผมจะส่งคอร์สเรียนคือนให้คุณ...`,
        badges: [badges.group],
        isDone: false,
    },
    {
        title: 'เกมทายคำจากสถานที่',
        description: `
            สวัสดีครับผมชื่อโอมผมมาจากนครสวรรค์
            ผมต้องการเงินไปทำแพลตฟอร์ม
            สอนหนังสือโอนเงินให้ผม 50 
            บาทแล้วผมจะส่งคอร์สเรียนคือนให้คุณ...`,
        badges: [badges.individual, badges.firstblood],
        isDone: true,
    },
    {
        title: 'เกมทายคำจากสถานที่',
        description: `
            สวัสดีครับผมชื่อโอมผมมาจากนครสวรรค์
            ผมต้องการเงินไปทำแพลตฟอร์ม
            สอนหนังสือโอนเงินให้ผม 50 
            บาทแล้วผมจะส่งคอร์สเรียนคือนให้คุณ...`,
        badges: [badges.group, badges.firstblood],
        isDone: false,
    },
    {
        title: 'เกมทายคำจากสถานที่',
        description: `
            สวัสดีครับผมชื่อโอมผมมาจากนครสวรรค์
            ผมต้องการเงินไปทำแพลตฟอร์ม
            สอนหนังสือโอนเงินให้ผม 50 
            บาทแล้วผมจะส่งคอร์สเรียนคือนให้คุณ...`,
        badges: [badges.group, badges.firstblood],
        isDone: true,
    },
    {
        title: 'เกมทายคำจากสถานที่',
        description: `
            สวัสดีครับผมชื่อโอมผมมาจากนครสวรรค์
            ผมต้องการเงินไปทำแพลตฟอร์ม
            สอนหนังสือโอนเงินให้ผม 50 
            บาทแล้วผมจะส่งคอร์สเรียนคือนให้คุณ...`,
        badges: [badges.individual, badges.firstblood],
        isDone: true,
    },
];

export const tabs = {
    canPlay: 'เล่นได้',
    canNotPlay: 'เล่นไม่ได้',
};
