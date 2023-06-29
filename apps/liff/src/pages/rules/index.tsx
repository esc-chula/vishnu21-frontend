import type { NextPage } from 'next';
import Image from 'next/image';
import GrainBackground from 'images/GrainBackground.svg';
import DecorateVector from 'images/DecorateVector.svg';
import RuleItem from './rule';

const allRule = [
    {
        id: '1',
        topic: 'Lorem ipsum dolor sit amet consectetur?',
        detail: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
    {
        id: '2',
        topic: 'Lorem ipsum dolor sit amet consectetur?',
        detail: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
    {
        id: '3',
        topic: 'Lorem ipsum dolor sit amet consectetur?',
        detail: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
    {
        id: '4',
        topic: 'Lorem ipsum dolor sit amet consectetur?',
        detail: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
    {
        id: '5',
        topic: 'What is Lorem Ipsum?',
        detail: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
    {
        id: '6',
        topic: 'What is Lorem Ipsum?',
        detail: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
    {
        id: '7',
        topic: 'What is Lorem Ipsum?',
        detail: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
    {
        id: '8',
        topic: 'What is Lorem Ipsum?',
        detail: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
    {
        id: '9',
        topic: 'What is Lorem Ipsum?',
        detail: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
    {
        id: '10',
        topic: 'Lorem ipsum dolor sit amet consectetur?',
        detail: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
    {
        id: '11',
        topic: 'Lorem ipsum dolor sit amet consectetur?',
        detail: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
    {
        id: '12',
        topic: 'Lorem ipsum dolor sit amet consectetur?',
        detail: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
    {
        id: '13',
        topic: 'Lorem ipsum dolor sit amet consectetur?',
        detail: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
    {
        id: '14',
        topic: 'What is Lorem Ipsum?',
        detail: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
    {
        id: '15',
        topic: 'What is Lorem Ipsum?',
        detail: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
    {
        id: '16',
        topic: 'What is Lorem Ipsum?',
        detail: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
    {
        id: '17',
        topic: 'What is Lorem Ipsum?',
        detail: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
    {
        id: '18',
        topic: 'What is Lorem Ipsum?',
        detail: 'Lorem ipsum dolor sit amet consectetur. Amet quam id netus et lorem. Nibh et sit eleifend scelerisque duis convallis tristique. Nibh et sit eleifend scelerisque duis convallis tristique.',
    },
];

const Rules: NextPage = () => {
    return (
        <div className="w-screen min-h-screen flex flex-col items-center px-7 py-16">
            <h1 className="font-semibold text-white text-xl font-baijam">
                กฎค่ายวิษณุครั้งที่ 21
            </h1>
            <ul className="w-full mt-6 flex items-center flex-col gap-5 font-ibm pb-32">
                {allRule.map((allRule) => (
                    <RuleItem
                        key={allRule.id}
                        topic={allRule.topic}
                        detail={allRule.detail}
                    />
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
