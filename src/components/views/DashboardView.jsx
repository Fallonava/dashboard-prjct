import Profile from '../Profile';
import BentoGrid from '../BentoGrid';
import { ActivityChart, LanguageChart } from '../Charts';

const DashboardView = ({ profile, projects, onAdd, onEdit, onDelete }) => {
    return (
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                <div style={{ gridColumn: 'span 2' }}>
                    <Profile profile={profile} />
                </div>
                <div style={{ height: '320px' }}>
                    <ActivityChart projects={projects} />
                </div>
                <div style={{ height: '320px' }}>
                    <LanguageChart projects={projects} />
                </div>
            </div>

            <BentoGrid
                projects={projects}
                onAdd={onAdd}
                onEdit={onEdit}
                onDelete={onDelete}
            />
        </div>
    );
};

export default DashboardView;
