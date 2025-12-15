import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

const ActivityChart = ({ projects }) => {
    // Mock activity data logic for demo purposes (Apple Health Style)
    const data = [
        { name: 'Mon', activity: 4 },
        { name: 'Tue', activity: 3 },
        { name: 'Wed', activity: 7 },
        { name: 'Thu', activity: 2 },
        { name: 'Fri', activity: 6 },
        { name: 'Sat', activity: 8 },
        { name: 'Sun', activity: 5 },
    ];

    return (
        <div className="glass card" style={{ padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-secondary)' }}>ACTIVITY</h3>
            <div style={{ flex: 1, minHeight: '120px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                        <defs>
                            <linearGradient id="colorActivity" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="#0A84FF" stopOpacity={0.4} />
                                <stop offset="95%" stopColor="#0A84FF" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <XAxis dataKey="name" hide />
                        <Tooltip
                            contentStyle={{ background: 'rgba(28, 28, 30, 0.9)', border: 'none', borderRadius: '8px', fontSize: '12px' }}
                            itemStyle={{ color: '#fff' }}
                            cursor={{ stroke: 'rgba(255,255,255,0.1)' }}
                        />
                        <Area type="monotone" dataKey="activity" stroke="#0A84FF" strokeWidth={3} fillOpacity={1} fill="url(#colorActivity)" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

const LanguageChart = ({ projects }) => {
    // Simple distribution logic
    const localCount = projects.filter(p => p.type === 'local').length;
    const ghCount = projects.filter(p => p.type === 'github').length;

    const data = [
        { name: 'Local', value: localCount || 1, color: '#30D158' },
        { name: 'GitHub', value: ghCount || 1, color: '#0A84FF' }
    ];

    return (
        <div className="glass card" style={{ padding: '1.5rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '1rem', color: 'var(--text-secondary)' }}>DISTRIBUTION</h3>
            <div style={{ flex: 1, minHeight: '120px', position: 'relative' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            innerRadius={40}
                            outerRadius={60}
                            paddingAngle={5}
                            dataKey="value"
                            stroke="none"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                        </Pie>
                        <Tooltip
                            contentStyle={{ background: 'rgba(28, 28, 30, 0.9)', border: 'none', borderRadius: '8px', fontSize: '12px' }}
                        />
                    </PieChart>
                </ResponsiveContainer>
                {/* Center Label */}
                <div style={{
                    position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
                    textAlign: 'center', pointerEvents: 'none'
                }}>
                    <span style={{ fontSize: '20px', fontWeight: '700' }}>{projects.length}</span>
                </div>
            </div>
        </div>
    );
};

export { ActivityChart, LanguageChart };
