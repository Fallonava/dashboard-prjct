import { motion } from 'framer-motion';
import { Layers, Star, CheckCircle, Clock } from 'lucide-react';

const StatsRow = ({ projects }) => {
    const totalProjects = projects.length;
    const totalCompleted = projects.filter(p => p.status === 'Completed' || p.status === 'Live').length;
    const totalStars = projects.reduce((acc, p) => acc + (Math.floor(Math.random() * 100)), 0); // Mock stars for now
    const pending = totalProjects - totalCompleted;

    const stats = [
        { label: 'Total Projects', value: totalProjects, icon: <Layers size={20} color="#0A84FF" />, delay: 0.1 },
        { label: 'Completed', value: totalCompleted, icon: <CheckCircle size={20} color="#30D158" />, delay: 0.2 },
        { label: 'In Progress', value: pending, icon: <Clock size={20} color="#FF9F0A" />, delay: 0.3 },
        { label: 'Total Stars', value: totalStars, icon: <Star size={20} color="#FFD60A" />, delay: 0.4 },
    ];

    return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
            {stats.map((stat, i) => (
                <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: stat.delay }}
                    className="glass card"
                    style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}
                >
                    <div style={{ padding: '12px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)' }}>
                        {stat.icon}
                    </div>
                    <div>
                        <div style={{ fontSize: '24px', fontWeight: '700' }}>{stat.value}</div>
                        <div style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>{stat.label}</div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
};

export default StatsRow;
