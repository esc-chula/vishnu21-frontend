import Layout from '@/components/Layout';
import { logo } from 'assets';
import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
    return (
        <Layout>
            <Image
                src={logo.firstdate}
                alt="Vishnu Logo"
                width={100}
                height={100}
            />
            <h1>hello world</h1>
        </Layout>
    );
};

export default Home;
