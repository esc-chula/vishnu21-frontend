import DashboardBlock from '@/components/DashboardBlock';
import Faq from '@/components/Faq';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';
import GroupTableRow from '@/components/table/GroupTableRow';
import SendMessage from '@/components/SendMessage';
import Main from '@/layouts/Main';
import Section from '@/layouts/Section';
import GroupData from '@/mocks/group-data.json';
import type { NextPage } from 'next';

const Home: NextPage = () => {
    return (
        <>
            <Navigation />
            <Main>
                <section id="overview" className="space-y-6">
                    <h1 className="text-2xl font-bold">Dashboard</h1>
                    <div className="grid md:grid-cols-3 gap-10">
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
                <Section id="groups" title="คะแนนกรุ้ป">
                    <GroupTableRow
                        header
                        group={'กรุ้ป'}
                        name={'ชื่อ'}
                        score={'คะแนน'}
                    />
                    {GroupData.map((group) => (
                        <GroupTableRow
                            key={group.group}
                            group={group.group}
                            name={group.name}
                            longName={group.longName}
                            score={group.score}
                        />
                    ))}
                </Section>
                <Section id="messaging" title="ส่งข้อความ">
                    <SendMessage />
                </Section>
                <Section id="faq" title="FAQ">
                    <Faq />
                </Section>
            </Main>
            <Footer />
        </>
    );
};

export default Home;
