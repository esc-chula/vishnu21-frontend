import CrosswordLayout from '@/components/crossword/Layout';
// import CrosswordGame from '@/components/crossword';
import Main from '@/layouts/Main';
import { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const DynamicCrossword = dynamic(() => import('@/components/crossword'), {
    ssr: false,
});

const Crossword: NextPage = () => {
    return (
        <>
            <Head>
                <title>Crossword</title>
            </Head>
            {/* <Main foregroundImage="full2">
                <CrosswordGame />
            </Main> */}
            <div className="absolute top-0 left-0 right-0 bottom-0 z-50">
                <CrosswordLayout>
                    <DynamicCrossword />
                </CrosswordLayout>
            </div>
        </>
    );
};

export default Crossword;
