import DashboardBlock from '@/components/DashboardBlock';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import TableRow from '@/components/TableRow';
import Main from '@/layouts/Main';
import GroupData from '@/mocks/group-data.json';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <>
            <Navigation />
            <Main>
                <section id="overview" className="space-y-6">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <div className="grid grid-cols-3 gap-10">
                        <DashboardBlock
                            title={'จำนวนน้องที่ Login แล้ว'}
                            value={'---'}
                            unit={'คน'}
                            description={
                                'จำนวนที่เพิ่มเพื่อน LINE แล้วและทำการเข้าสู่ระบบด้วย CUNET ภายใน LINE LIFF'
                            }
                        />
                        <DashboardBlock
                            title={'---'}
                            value={'---'}
                            unit={'--'}
                            description={'---'}
                        />
                        <DashboardBlock
                            title={'---'}
                            value={'---'}
                            unit={'--'}
                            description={'---'}
                        />
                    </div>
                </section>
                <section id="groups" className="space-y-6">
                    <h2 className="text-xl font-bold">Groups</h2>
                    <div className="border-neutral-200 border rounded-xl py-8 px-6 space-y-2">
                        <TableRow
                            header
                            group={'กรุ้ป'}
                            name={'ชื่อ'}
                            score={'คะแนน'}
                        />
                        {GroupData.map((group) => (
                            <TableRow
                                key={group.group}
                                group={group.group}
                                name={group.houseName}
                                score={group.score}
                            />
                        ))}
                    </div>
                </section>
            </Main>
            <Footer />
        </>
    );
};

export default Home;
