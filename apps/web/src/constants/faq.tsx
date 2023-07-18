import Packing1 from '@/public/images/landing/packing1.png';
import Packing2 from '@/public/images/landing/packing2.png';
import Packing3 from '@/public/images/landing/packing3.png';
import Packing4 from '@/public/images/landing/packing4.png';
import Schedule1 from '@/public/images/landing/schedule1.png';
import Schedule2 from '@/public/images/landing/schedule2.png';
import Schedule3 from '@/public/images/landing/schedule3.png';
import Schedule4 from '@/public/images/landing/schedule4.png';
import Image from 'next/image';

const FaqData = [
    {
        question: 'เฟิร์สเดต/ค่ายวิษณุฯ คืออะไร ต้องไปทุกคนไหม ไปแล้วได้อะไร',
        answer: 'ทั้งสองงานเป็นงานที่พี่ ๆ ตั้งใจจัดขึ้นมาให้น้องได้รู้จักคณะ การเรียนในมหาลัย ได้รู้จักพี่ ๆ และเพื่อน ๆ ให้ได้มาสนุกสนานก่อนเปิดเทอม ทั้งสองงานไม่ใช่งานบังคับ แต่พี่ ๆ อยากให้น้อง ๆ มากันเยอะ ๆ นะฮ้าฟฟู่~',
    },
    {
        question: 'วันเฟิร์สเดตกับวันค่ายวิษณุฯจัดช่วงไหนนะ',
        answer: 'CU First Date 2023 จัดในวันเสาร์ที่ 22 กรกฎาคม 2566 และค่ายวิษณุกรรมบุตรครั้งที่ 21 จัดในวันจันทร์ที่ 24 กรกฎาคม 2566 ถึง วันพฤหัสบดีที่ 27 กรกฎาคม 2566 สำหรับใครที่ลังเลอยู่ว่าจะมาดีไหม อยากจะบอกว่าพี่ ๆ ทุกคนเตรียมกิจกรรมสนุก ๆ ไว้รอพวกเราอยู่เพียบเลย🥹 มาจอยกันเยอะ ๆ น้า🥳💥',
    },
    {
        question: 'ตารางกิจกรรมของค่ายเป็นอย่างไรบ้าง',
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
        question: 'จำเป็นต้องนอนค้างคืนหรือไม่',
        answer: (
            <div>
                <p>
                    ค่ายวิษณุกรรมบุตรนั้นไม่ได้เป็นค่ายที่บังคับให้น้อง ๆ
                    ค้างคืน
                    แต่เราก็เปิดให้สามารถนอนค้างคืนภายในคณะได้โดยขึ้นอยู่กับความสะดวกของน้อง
                    ๆ เลย และถ้าหากน้อง ๆ
                    ตัดสินใจที่จะนอนก็อย่าลืมกรอกแบบฟอร์มหนังสือยินยอมเข้าร่วม
                    และสำรองที่พักของค่ายด้วยนะ
                </p>
                <br />
                <a
                    className="underline font-bold"
                    href="https://docs.google.com/forms/d/e/1FAIpQLSdVO93boldq1KLjDd8qEko_znWaMUTXE1Psjw9R2V_d83FOMQ/viewform"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    ลิงก์ฟอร์มหนังสือยินยอมเข้าร่วม และสำรองที่พักของค่าย
                </a>
            </div>
        ),
    },
    {
        question: 'สามารถติดตามข่าวสารของค่ายได้ช่องทางไหนบ้าง',
        answer: (
            <div>
                <p>
                    น้อง ๆ สามารถติดตามผ่าน LINE OA และช่องทางอื่น ๆ
                    ผ่านลิงก์นี้เลย
                </p>
                <br />
                <a
                    className="underline font-bold"
                    href="/links"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Vishnu21st Links
                </a>
            </div>
        ),
    },
    {
        question: 'จำเป็นต้องแอด LINE OA หรือเปล่า?',
        answer: 'ต้องบอกก่อนเลยว่าจะเป็นมาก ๆ เพราะ LINE OA ของเราจะมีการประกาศบ้านของน้อง ๆ เกมที่สามารถเล่นเพื่อเก็บคะแนนและข้อมูลสำคัญอีกมากมายรอน้อง ๆ อยู่นะ',
    },
    {
        question: 'ต้องเตรียมอะไรไปค่ายวิษณุฯ บ้าง',
        answer: (
            <div className="flex flex-col items-center space-y-6">
                <p className="text-left w-full">
                    น้อง ๆ สามารถเช็คตารางกิจกรรมผ่านรูปด้านล่างนี้เลย
                </p>

                <div className="max-w-sm w-full space-y-4">
                    <div className="relative aspect-square w-full">
                        <Image
                            src={Packing1}
                            alt="Day 1 Schedule"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="relative aspect-square w-full">
                        <Image
                            src={Packing2}
                            alt="Day 2 Schedule"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="relative aspect-square w-full">
                        <Image
                            src={Packing3}
                            alt="Day 3 Schedule"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="relative aspect-square w-full">
                        <Image
                            src={Packing4}
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
        question: 'สามารถพกโทรศัพท์มือถือไปได้ไหม',
        answer: 'สามารถนำมาได้ครับ จริง ๆ แล้วพี่ ๆ เองก็ได้เตรียมกิจกรรมสนุก ๆ ให้น้อง ๆ ตลอดทุกวันในค่ายเลยนะ!!',
    },
];

export default FaqData;
