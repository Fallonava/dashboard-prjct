import { motion } from 'framer-motion';

const RecentActivityTable = ({ projects }) => {
    // Mock activity derived from projects
    const activities = projects.slice(0, 5).map((p, i) => ({
        id: i,
        project: p.title || p.repo,
        action: p.status === 'Completed' ? 'Completed Project' : 'Updated Status',
        time: `${i + 2} hours ago`
    }));

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="glass card"
            style={{ padding: '2rem', flex: 1 }}
        >
            <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '1.5rem' }}>Recent Activity</h3>

            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                        <th style={{ textAlign: 'left', padding: '12px', color: 'var(--text-secondary)', fontSize: '12px', fontWeight: '600' }}>PROJECT</th>
                        <th style={{ textAlign: 'left', padding: '12px', color: 'var(--text-secondary)', fontSize: '12px', fontWeight: '600' }}>ACTION</th>
                        <th style={{ textAlign: 'right', padding: '12px', color: 'var(--text-secondary)', fontSize: '12px', fontWeight: '600' }}>TIME</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map((act, i) => (
                        <tr key={i} style={{ borderBottom: i < activities.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                            <td style={{ padding: '16px 12px', fontWeight: '500' }}>{act.project}</td>
                            <td style={{ padding: '16px 12px' }}>
                                <span style={{
                                    padding: '4px 10px',
                                    borderRadius: '12px',
                                    fontSize: '12px',
                                    background: 'rgba(255,255,255,0.05)',
                                    color: 'var(--text-secondary)'
                                }}>
                                    {act.action}
                                </span>
                            </td>
                            <td style={{ padding: '16px 12px', textAlign: 'right', color: 'var(--text-tertiary)', fontSize: '13px' }}>{act.time}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </motion.div>
    );
};

export default RecentActivityTable;
