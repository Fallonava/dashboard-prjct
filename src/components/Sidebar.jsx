import { Home, Folder, Star, Settings, Command, Menu, X, Sun, Moon } from 'lucide-react';
import { useState, useEffect } from 'react';

const Sidebar = ({ activeView, onNavigate, theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const menuItems = [
        { id: 'dashboard', icon: <Home size={18} />, label: 'Dashboard', color: '#0A84FF' },
        { id: 'projects', icon: <Folder size={18} />, label: 'Projects', color: '#30D158' },
        { id: 'favorites', icon: <Star size={18} />, label: 'Favorites', color: '#FFD60A' },
        { id: 'settings', icon: <Settings size={18} />, label: 'Settings', color: '#8E8E93' },
    ];

    const handleNav = (viewId) => {
        onNavigate(viewId);
        setIsOpen(false);
    };

    const NavContent = () => (
        <>
            <div style={{ padding: '0 12px', marginBottom: '40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #0A84FF, #5E5CE6)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(10, 132, 255, 0.3)' }}>
                        <Command size={18} color="white" />
                    </div>
                    <span style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-0.5px' }}>Dashboard</span>
                </div>
            </div>

            <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-secondary)', padding: '0 12px 8px 12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Menu
                </div>
                {menuItems.map((item) => {
                    const isActive = activeView === item.id;
                    return (
                        <button
                            key={item.id}
                            onClick={() => handleNav(item.id)}
                            style={{
                                display: 'flex', alignItems: 'center', gap: '12px',
                                padding: '10px 12px',
                                borderRadius: '10px',
                                color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
                                background: isActive ? 'rgba(120, 120, 120, 0.1)' : 'transparent',
                                border: 'none',
                                width: '100%',
                                textAlign: 'left',
                                cursor: 'pointer',
                                fontSize: '14px',
                                fontWeight: isActive ? '600' : '500',
                                transition: 'all 0.2s ease',
                            }}
                        >
                            <div style={{
                                color: isActive ? item.color : 'inherit',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                filter: isActive ? `drop-shadow(0 0 8px ${item.color}80)` : 'none'
                            }}>
                                {item.icon}
                            </div>
                            {item.label}
                        </button>
                    );
                })}
            </nav>

            <div style={{ marginTop: 'auto', padding: '20px 12px', borderTop: '1px solid var(--border-color)' }}>

                {/* Theme Toggle */}
                <button
                    onClick={toggleTheme}
                    className="glass"
                    style={{
                        width: '100%', padding: '10px', borderRadius: '10px', marginBottom: '16px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                        color: 'var(--text-primary)', cursor: 'pointer'
                    }}
                >
                    {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
                    <span style={{ fontSize: '13px', fontWeight: '500' }}>
                        {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </span>
                </button>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#30D158', boxShadow: '0 0 8px rgba(48,209,88,0.5)' }}></div>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>System Operational</span>
                </div>
            </div>
        </>
    );

    // Mobile Drawer
    if (isMobile) {
        return (
            <>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="glass"
                    style={{
                        position: 'fixed', top: '16px', left: '16px',
                        zIndex: 100, padding: '8px 12px', borderRadius: '12px',
                        color: 'var(--text-primary)', border: '1px solid var(--border-color)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {isOpen && (
                    <div style={{ position: 'fixed', inset: 0, zIndex: 99, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)' }} onClick={() => setIsOpen(false)}></div>
                )}

                <aside className="floating-sidebar" style={{
                    position: 'fixed', top: 0, left: 0, bottom: 0,
                    zIndex: 101, transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
                }}>
                    <div style={{ flex: 1, padding: '24px', overflowY: 'auto' }}>
                        <NavContent />
                    </div>
                </aside>
            </>
        );
    }

    // Desktop
    return (
        <aside className="floating-sidebar">
            <div style={{ flex: 1, padding: '32px 20px', overflowY: 'auto' }}>
                <NavContent />
            </div>
        </aside>
    );
};

export default Sidebar;
