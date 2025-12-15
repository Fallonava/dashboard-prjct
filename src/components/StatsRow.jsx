import { motion } from 'framer-motion';
import { Layers, Star, CheckCircle, Clock } from 'lucide-react';

const StatsRow = ({ projects }) => {
    const totalProjects = projects.length;
    const totalCompleted = projects.filter(p => p.status === 'Completed' || p.status === 'Live').length;
    const totalStars = projects.reduce((acc, p) => acc + (Math.floor(Math.random() * 100)), 0);
    const pending = totalProjects - totalCompleted;

    const stats = [
        { label: 'Total Projects', value: totalProjects, icon: <Layers size={20} color="#0A84FF" />, delay: 0.1 },
        { label: 'Completed', value: totalCompleted, icon: <CheckCircle size={20} color="#30D158" />, delay: 0.2 },
        { label: 'In Progress', value: pending, icon: <Clock size={20} color="#FF9F0A" />, delay: 0.3 },
        { label: 'Total Stars', value: totalStars, icon: <Star size={20} color="#FFD60A" />, delay: 0.4 },
    ];

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5rem', height: '100%' }}>
            {stats.map((stat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: stat.delay }}
                    className="glass card"
                    style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}
                >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)' }}>
                            {stat.icon}
                        </div>
                        {/* Sparkline placeholder */}
                        <div style={{ width: '40px', height: '20px', background: 'rgba(255,255,255,0.05)', borderRadius: '4px' }}></div>
                    </div>

                    <div style={{ marginTop: '1rem' }}>
                        <div style={{ fontSize: '28px', fontWeight: '700' }}>{stat.value}</div>
                        <div style={{ fontSize: '13px', color: 'var(--text-secondary)', fontWeight: '500' }}>{stat.label}</div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default StatsRow;
