import type { NextPage } from 'next';
import Image from 'next/image';
import GrainBackground from '@/public/images/GrainBackground.svg';
import DecorateVector from '@/public/images/DecorateVector.svg';
import RuleItem from './rule';

const allRule = [
    {
        id: '1',
        content: 'อย่าไปไหนโดยไม่แจ้งพี่',
    },
    {
        id: '2',
        content: 'หากมีปัญหาอะไรด่วนให้รีบแจ้งพี่คนไหนก็ได้',
    },
    {
        id: '3',
        content:
            'หากต้องการออกจากบริเวณกิจกรรม มีเหตุสุดวิสัยหรือปัญหาต่าง ๆ ต้องแจ้งให้พี่ค่ายบริเวณนั้นทราบ',
    },
    {
        id: '4',
        content:
            'ให้ความร่วมมือ มีส่วนร่วมในทุกกิจกรรม และปฏิบัติตามคำแนะนำของพี่ค่าย',
    },
    {
        id: '5',
        content: 'รักษาของมีค่าของตัวเอง',
    },
    {
        id: '6',
        content:
            'ห้ามใช้คําพูด หรือแสดงกิริยาที่ไม่สุภาพ ล่อแหลม ดูหมิ่น หรือกระทบจิตใจของผู้อื่น เช่น คําหยาบคาย การกระทําหรือคําพูดที่แสดงออกถึงการคุกคามทางเพศ, body shaming, การชูนิ้วกลาง เป็นต้น',
    },
    {
        id: '7',
        content:
            'ขอความร่วมมือช่วยรักษาความสะอาดของพื้นที่ที่ใช้ในการทำกิจกรรมและพื้นที่อื่น ๆ',
    },
    {
        id: '8',
        content: 'ตรงต่อเวลา',
    },
    {
        id: '9',
        content: 'ห้ามส่งเสียงดังรบกวนผู้อื่น',
    },
    {
        id: '10',
        content: 'ห้ามสั่งอาหารเข้ามารับประทาน',
    },
    {
        id: '11',
        content:
            'ห้ามนำอาวุธ สิ่งของผิดกฏ ของมีคม และอบายมุขทุกชนิดเข้ามาภายในคณะ เช่น บุหรี่/บุหรี่ไฟฟ้า, เครื่องดื่มแอลกอฮอล์หรือของมึนเมาใดๆ',
    },
    {
        id: '12',
        content:
            'หลีกเลี่ยงการใช้อุปกรณ์อิเล็กทรอนิกส์ขณะเข้าร่วมกิจกรรม ยกเว้นกรณีจำเป็นหรือฉุกเฉิน เช่น ผู้ปกครองโทรมา',
    },
    {
        id: '13',
        content:
            'ห้ามก่อเหตุทะเลาะวิวาท สร้างความเดือดร้อน หรือความไม่สบายใจให้แก่ผู้อื่น',
    },
    {
        id: '14',
        content:
            'ห้ามกระทำ Sexual harassment หรือการแสดงออกถึงการแบ่งแยก, ดูถูก, เหยียดเพศตรงข้าม',
    },
    {
        id: '15',
        content:
            'ปฏิบัติตามมาตรการป้องกันโรค COVID-19 อย่างเคร่งครัด หากสงสัยว่าตัวเองเป็นโรคดังกล่าว ให้ติดต่อพี่พยาบาลประจำบ้าน',
    },
];

const Rules: NextPage = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col items-center px-7 py-16">
            <h1 className="font-bold text-white text-xl font-baijam shadow-lg drop-shadow-lg">
                กฎค่ายวิษณุครั้งที่ 21
            </h1>
            <ul className="w-full mt-10 flex items-center flex-col gap-5 font-ibm pb-32">
                {allRule.map((allRule) => (
                    <RuleItem key={allRule.id} content={allRule.content} />
                ))}
            </ul>
            <div className="fixed inset-x-0 bottom-0 z-20 h-40 bg-gradient-to-t from-black pointer-events-none" />
            <Image
                src={GrainBackground}
                alt="Background"
                className="fixed top-0 left-0 -z-50 h-screen w-full object-cover"
                loading="lazy"
            />
            <Image
                src={DecorateVector}
                alt=""
                className="fixed bottom-0 left-0 z-20 w-full pointer-events-none"
                loading="lazy"
            />
        </div>
    );
};

export default Rules;
