import { BsPersonFill, BsDropletFill } from 'react-icons/bs';
import { MdGroups } from 'react-icons/md';
import { TagProps } from './components/Tag';
import { GameCardProps } from './components/GameCard';

export type ProfileInfo = {
    imageUrl: string;
    nickname: string;
    houseName: string;
};

export const profileInfo: ProfileInfo = {
    imageUrl: 'URL_IMAGE_PROFILE',
    nickname: 'น้องบอส',
    houseName: 'บ้านยูเลิฟ',
};

export const games: GameCardProps[] = [
    {
        title: 'เกมทายคำจากสถานที่',
        description: `
            สวัสดีครับผมชื่อโอมผมมาจากนครสวรรค์
            ผมต้องการเงินไปทำแพลตฟอร์ม
            สอนหนังสือโอนเงินให้ผม 50 
            บาทแล้วผมจะส่งคอร์สเรียนคือนให้คุณ...`,
        tags: ['รายกรุ๊ป'],
        isDone: false,
    },
    {
        title: 'เกมทายคำจากสถานที่',
        description: `
            สวัสดีครับผมชื่อโอมผมมาจากนครสวรรค์
            ผมต้องการเงินไปทำแพลตฟอร์ม
            สอนหนังสือโอนเงินให้ผม 50 
            บาทแล้วผมจะส่งคอร์สเรียนคือนให้คุณ...`,
        tags: ['รายคน', 'Firstblood'],
        isDone: true,
    },
    {
        title: 'เกมทายคำจากสถานที่',
        description: `
            สวัสดีครับผมชื่อโอมผมมาจากนครสวรรค์
            ผมต้องการเงินไปทำแพลตฟอร์ม
            สอนหนังสือโอนเงินให้ผม 50 
            บาทแล้วผมจะส่งคอร์สเรียนคือนให้คุณ...`,
        tags: ['รายกรุ๊ป', 'Firstblood'],
        isDone: false,
    },
    {
        title: 'เกมทายคำจากสถานที่',
        description: `
            สวัสดีครับผมชื่อโอมผมมาจากนครสวรรค์
            ผมต้องการเงินไปทำแพลตฟอร์ม
            สอนหนังสือโอนเงินให้ผม 50 
            บาทแล้วผมจะส่งคอร์สเรียนคือนให้คุณ...`,
        tags: ['รายกรุ๊ป', 'Firstblood'],
        isDone: true,
    },
    {
        title: 'เกมทายคำจากสถานที่',
        description: `
            สวัสดีครับผมชื่อโอมผมมาจากนครสวรรค์
            ผมต้องการเงินไปทำแพลตฟอร์ม
            สอนหนังสือโอนเงินให้ผม 50 
            บาทแล้วผมจะส่งคอร์สเรียนคือนให้คุณ...`,
        tags: ['รายคน', 'Firstblood'],
        isDone: true,
    },
];

export const tabs = {
    canPlay: 'เล่นได้',
    canNotPlay: 'เล่นไม่ได้',
};
