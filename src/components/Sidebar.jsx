import { useState, useEffect } from 'react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) setIsOpen(false);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const navItems = [
        { label: 'Overview', icon: '📊', active: true },
        { label: 'Projects', icon: '📁', active: false },
        { label: 'Activity', icon: '📈', active: false },
    ];

    return (
        <>
            <button
                className="glass"
                style={{
                    position: 'fixed',
                    top: '1rem',
                    right: '1rem',
                    zIndex: 100,
                    padding: '0.5rem',
                    borderRadius: '50%',
                    display: isMobile ? 'flex' : 'none',
                    border: 'none',
                    cursor: 'pointer'
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span style={{ fontSize: '24px', color: 'var(--text-primary)' }}>{isOpen ? '✕' : '☰'}</span>
            </button>

            <aside className="glass" style={{
                position: 'fixed',
                left: 0,
                top: 0,
                bottom: 0,
                width: isOpen || !isMobile ? '280px' : '0',
                padding: isOpen || !isMobile ? '2rem' : '0',
                transform: isMobile && !isOpen ? 'translateX(-100%)' : 'translateX(0)',
                transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                overflow: 'hidden',
                zIndex: 90,
                display: 'flex',
                flexDirection: 'column',
                borderRight: '1px solid var(--border-color)',
                background: isMobile ? 'var(--bg-secondary)' : 'rgba(255, 255, 255, 0.05)'
            }}>
                <div style={{ marginBottom: '3rem', display: 'flex', alignItems: 'center', gap: '1rem', paddingLeft: '0.5rem' }}>
                    <div style={{
                        width: '36px', height: '36px', borderRadius: '10px',
                        background: 'linear-gradient(135deg, var(--accent-color), #bc13fe)',
                        display: 'grid', placeItems: 'center', color: 'white', fontWeight: 'bold', fontSize: '18px',
                        boxShadow: '0 4px 12px rgba(10, 132, 255, 0.3)'
                    }}>
                        A
                    </div>
                    <h1 style={{ fontSize: '18px', fontWeight: '600', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>Alfai Dash</h1>
                </div>

                <nav style={{ flex: 1 }}>
                    <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                        {navItems.map(item => (
                            <li key={item.label}>
                                <a href="#" style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    padding: '12px 16px',
                                    borderRadius: '12px',
                                    textDecoration: 'none',
                                    color: item.active ? '#ffffff' : 'var(--text-secondary)',
                                    background: item.active ? 'var(--accent-color)' : 'transparent',
                                    fontWeight: item.active ? '600' : '500',
                                    transition: 'all 0.2s ease',
                                    boxShadow: item.active ? '0 4px 12px rgba(10, 132, 255, 0.25)' : 'none'
                                }}>
                                    <span>{item.icon}</span>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Removed Toggle Button */}
                <div style={{ marginTop: 'auto', textAlign: 'center', fontSize: '12px', color: 'var(--text-tertiary)' }}>
                    v2.1 • Dark Mode
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
