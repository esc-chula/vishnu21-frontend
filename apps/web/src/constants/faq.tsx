import Schedule1 from '@/public/images/landing/schedule1.png';
import Schedule2 from '@/public/images/landing/schedule2.png';
import Schedule3 from '@/public/images/landing/schedule3.png';
import Schedule4 from '@/public/images/landing/schedule4.png';
import Image from 'next/image';

const FaqData = [
    {
        question: 'ตารางกิจกรรมเป็นอย่างไรบ้าง?',
        answer: (
            <div className="flex flex-col items-center space-y-6">
                <p className="text-left w-full">
                    น้อง ๆ สามารถเช็คตารางกิจกรรมผ่านรูปด้านล่างนี้เลย
                </p>

                <div className="max-w-sm w-full space-y-4">
                    <div className="relative aspect-square w-full">
                        <Image
                            src={Schedule1}
                            alt="Day 1 Schedule"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="relative aspect-square w-full">
                        <Image
                            src={Schedule2}
                            alt="Day 2 Schedule"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="relative aspect-square w-full">
                        <Image
                            src={Schedule3}
                            alt="Day 3 Schedule"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="relative aspect-square w-full">
                        <Image
                            src={Schedule4}
                            alt="Day 4 Schedule"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        ),
    },
    {
        question: 'จำเป็นต้องนอนค้างคืนหรือไม่?',
        answer: '',
    },
    {
        question: 'สามารถติดตามข่าวสารของค่ายได้ที่ไหน?',
        answer: '',
    },
    {
        question: 'ไลน์ OA ทำอะไรได้บ้าง?',
        answer: '',
    },
    {
        question: 'ถามมา',
        answer: '',
    },
    {
        question: 'ถามไป',
        answer: '',
    },
    {
        question: 'ฮัลโหล',
        answer: '',
    },
    {
        question: 'อะไรนะ',
        answer: '',
    },
    {
        question: 'IT ใช้ Stack อะไรคั้บ',
        answer: '',
    },
];

export default FaqData;
