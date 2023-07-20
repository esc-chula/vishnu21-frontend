import Main from '@/layouts/Main';
import { NextPage } from 'next';
import Head from 'next/head';

const FAQ: NextPage = () => {
    return (
        <>
            <Head>
                <title>FAQ</title>
            </Head>
            <Main foregroundImage="top1">
                <h1 className="font-bold text-xl">FAQ</h1>
            </Main>
        </>
    );
};

export default FAQ;
