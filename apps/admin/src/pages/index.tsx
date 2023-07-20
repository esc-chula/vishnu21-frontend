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
import Links from '@/components/Links';
import { useAuth } from '@/contexts/AuthContext';
import Guard from '@/components/Guard';
import { TRoles } from 'types';
import { useRouter } from 'next/router';
import { useGroup } from '@/contexts/GroupContext';
import Loading from '@/components/Loading';

const Home: NextPage = () => {
    const router = useRouter();
    const { user } = useAuth();
    const { groupData } = useGroup();

    const userRoles: TRoles[] = user.roles;
    const houseRoles: TRoles[] = ['HeadHouse', 'RegistrationHouse'];

    if (!groupData) return <Loading />;

    if (userRoles.some((role) => houseRoles.includes(role))) {
        router.push(`/group/${groupData.group}`);
    }

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
                <Guard allowRoles={['Board', 'Activity', 'Registration']}>
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
                </Guard>
                <Guard allowRoles={['PR']}>
                    <Section id="messaging" title="ส่งข้อความ">
                        <SendMessage />
                    </Section>
                </Guard>
                <Guard allowRoles={['PR']}>
                    <Section id="faq" title="FAQ">
                        <Faq />
                    </Section>
                </Guard>
                <Guard allowRoles={['PR']}>
                    <Section id="links" title="Link Tree">
                        <Links />
                    </Section>
                </Guard>
            </Main>
            <Footer />
        </>
    );
};

export default Home;
