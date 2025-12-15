import Profile from '../Profile';
import { ActivityChart, LanguageChart } from '../Charts';
import StatsRow from '../StatsRow';
import RecentActivityTable from '../RecentActivityTable';
import { motion } from 'framer-motion';

const DashboardView = ({ profile, projects }) => {
    return (
        <div style={{ maxWidth: '1600px', margin: '0 auto' }}>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                {/* Widget 1: Profile - Tall & Prominent */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="col-span-1 lg:col-span-1 lg:row-span-2"
                >
                    <Profile profile={profile} compact={true} />
                </motion.div>

                {/* Widget 2: Stats - Wide Strip */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="col-span-1 md:col-span-2 lg:col-span-3"
                >
                    <StatsRow projects={projects} compact={true} />
                </motion.div>

                {/* Widget 3: Activity Chart - Big Main Focus */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="col-span-1 md:col-span-2 lg:col-span-2"
                    style={{ minHeight: '340px' }}
                >
                    <ActivityChart projects={projects} />
                </motion.div>

                {/* Widget 4: Language Chart - Box */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="col-span-1"
                    style={{ minHeight: '340px' }}
                >
                    <LanguageChart projects={projects} />
                </motion.div>

                {/* Widget 5: Recent Activity - Tall List */}
                <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="col-span-1 md:col-span-2 lg:col-span-3 lg:row-span-2"
                >
                    <RecentActivityTable projects={projects} />
                </motion.div>

            </div>
        </div>
    );
};

export default DashboardView;
