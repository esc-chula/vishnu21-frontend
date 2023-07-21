import Main from '@/layouts/Main';
import { NextPage } from 'next';
import Head from 'next/head';

const Rule: NextPage = () => {
    return (
        <>
            <Head>
                <title>กฏค่ายวิษณุฯ</title>
            </Head>
            <Main foregroundImage="top1">
                <h1 className="font-bold text-xl">กฏค่ายวิษณุฯ</h1>
            </Main>
        </>
    );
};

export default Rule;
