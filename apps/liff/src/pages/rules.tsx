import type { NextPage } from 'next';
import Image from 'next/image';
import GrainBackground from '@/public/images/GrainBackground.svg';
import DecorateVector from '@/public/images/DecorateVector.svg';
import Head from 'next/head';
import Main from '@/layouts/Main';
import Link from 'next/link';
import SponsorFooter from '@/components/SponsorFooter';

type Rules = {
    content: string;
};

const RuleItem: React.FC<Rules> = ({ content }) => {
    return (
        <li className="w-full rounded-2xl p-2 shadow-details bg-gray-300 bg-opacity-30 text-white z-10 text-center">
            <p
                className={
                    'px-3 py-2 overflow-hidden transition-all duration-300 ease-in-out text-xs leading-5 font-normal'
                }
            >
                {content}
            </p>
        </li>
    );
};

const rules = [
    {
        id: '1',
        content: 'หากน้องต้องการไปที่ไหน ๆ ให้แจ้งพี่ค่ายทราบก่อน',
    },
    {
        id: '2',
        content: 'หากว่ามีปัญหาเร่งด่วนให้รีบแจ้งพี่คนไหนก็ได้',
    },
    {
        id: '3',
        content:
            'หากต้องการออกจากบริเวณกิจกรรม มีเหตุสุดวิสัยหรือปัญหาต่าง ๆ ต้องแจ้งให้พี่ค่ายบริเวณนั้นทราบ',
    },
    {
        id: '4',
        content:
            'ขอความร่วมมือให้น้อง ๆ ทุกคนมีส่วนร่วมในทุกกิจกรรม และปฏิบัติตามคำแนะนำของพี่ค่าย',
    },
    {
        id: '5',
        content: 'อย่าลืมรักษาของมีค่าของตัวเองนะ',
    },
    {
        id: '6',
        content:
            'ห้ามใช้คําพูด หรือแสดงกิริยาที่ไม่สุภาพ ล่อแหลม ดูหมิ่น หรือกระทบจิตใจของผู้อื่น เช่น คําหยาบคาย การกระทําหรือคําพูดที่แสดงออกถึงการคุกคามทางเพศ, Body Shaming, การชูนิ้วกลาง เป็นต้น',
    },
    {
        id: '7',
        content:
            'ขอความร่วมมือช่วยรักษาความสะอาดของพื้นที่ที่ใช้ในการทำกิจกรรมและพื้นที่อื่น ๆ ภายในคณะและโดยรอบคณะ',
    },
    {
        id: '8',
        content:
            'ขอให้น้อง ๆ ทุกคนตรงต่อเวลาตามเวลานัดหมายของพี่ค่ายและกำหนดการ',
    },
    {
        id: '9',
        content: 'ห้ามส่งเสียงดังรบกวนผู้อื่นในเวลาที่ไม่เหมาะสม',
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
            'ห้ามกระทำ Sexual Harassment หรือการแสดงออกถึงการแบ่งแยก, ดูถูก, เหยียดเพศตรงข้าม',
    },
    {
        id: '15',
        content:
            'ปฏิบัติตามมาตรการป้องกันโรค COVID-19 อย่างเคร่งครัด หากสงสัยว่าตัวเองเป็นโรคดังกล่าว ให้ติดต่อพี่พยาบาลประจำบ้านได้เลย',
    },
];

const Rules: NextPage = () => {
    return (
        <>
            <Head>
                <title>กฏค่าย</title>
            </Head>
            <Main foregroundImage="top1">
                <h1 className="font-bold text-2xl mt-12">กฏค่าย</h1>
                <div className="w-full h-full mt-8">
                    <div className="overflow-y-auto w-full h-full space-y-4 px-6 pb-60">
                        {rules.map((rule, index) => (
                            <div
                                key={index}
                                className="bg-neutral-50 shadow-button rounded-2xl text-neutral-800 p-4 font-medium leading-loose text-sm"
                            >
                                {rule.content}
                            </div>
                        ))}
                        <div className="pt-8">
                            <SponsorFooter />
                        </div>
                    </div>
                </div>
            </Main>
            <div className="fixed z-50 bottom-6 left-4 right-4 h-[72px] bg-neutral-50 rounded-2xl shadow-faq flex items-center px-5 py-3 space-x-2">
                <Link
                    href="/faq"
                    className="text-primary-500 px-4 py-1.5 w-full flex justify-center items-center font-bold rounded-xl h-full"
                >
                    FAQ
                </Link>
                <Link
                    href="/rules"
                    className="bg-primary-500 text-white px-4 py-1.5 w-full flex justify-center items-center font-bold rounded-xl h-full"
                >
                    กฏค่าย
                </Link>
            </div>
        </>
    );

    return (
        <div className="w-screen min-h-screen flex flex-col items-center px-7 py-16">
            <h1 className="font-bold text-white text-xl font-baijam shadow-lg drop-shadow-lg">
                กฎค่ายวิษณุครั้งที่ 21
            </h1>
            <ul className="w-full mt-10 flex items-center flex-col gap-5 font-ibm pb-32">
                {rules.map((allRule) => (
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
