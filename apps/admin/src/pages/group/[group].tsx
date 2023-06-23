import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import Main from '@/layouts/Main';
import { NextPage } from 'next';

const Group: NextPage = () => {
    return (
        <>
            <Navigation />
            <Main>
                <section id="information" className="space-y-6">
                    <div className="space-y-3">
                        <h1 className="text-2xl font-bold">Group A</h1>
                        <h2 className="text-2xl font-semibold">
                            อาหร่อยจังเลย
                        </h2>
                    </div>
                </section>
                <section id="score" className="space-y-6">
                    <h2 className="text-xl font-bold">ประวัติคะแนน</h2>
                </section>
            </Main>
            <Footer />
        </>
    );
};

export default Group;
