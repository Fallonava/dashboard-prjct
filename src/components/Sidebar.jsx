import { useState, useEffect } from 'react';
import { Home, Folder, Star, Settings, Command } from 'lucide-react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const menuItems = [
        { icon: <Home size={18} />, label: 'Dashboard', active: true },
        { icon: <Folder size={18} />, label: 'Projects' },
        { icon: <Star size={18} />, label: 'Favorites' },
        { icon: <Settings size={18} />, label: 'Settings' },
    ];

    // Mobile Drawer Toggle
    if (isMobile) {
        return (
            <>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="glass"
                    style={{
                        position: 'fixed', top: '16px', left: '16px',
                        zIndex: 100, padding: '8px 12px', borderRadius: '12px',
                        color: 'white', border: '1px solid var(--border-color)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                    }}
                >
                    {isOpen ? <X size={20} /> : <Menu size={20} />}
                </button>

                {isOpen && (
                    <div style={{ position: 'fixed', inset: 0, zIndex: 99, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(5px)' }} onClick={() => setIsOpen(false)}></div>
                )}

                <aside style={{
                    position: 'fixed', top: 0, left: 0, bottom: 0,
                    width: '260px', zIndex: 101,
                    background: 'var(--bg-secondary)',
                    borderRight: '1px solid var(--border-color)',
                    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
                    transition: 'transform 0.3s cubic-bezier(0.2, 0, 0, 1)',
                    padding: '24px', display: 'flex', flexDirection: 'column'
                }}>
                    <SidebarContent menuItems={menuItems} />
                </aside>
            </>
        );
    }

    // Desktop Sidebar (Static Grid Item)
    return (
        <aside style={{
            position: 'sticky', top: 0, height: '100vh',
            borderRight: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(30, 30, 30, 0.3)', // Very subtle glass
            backdropFilter: 'blur(40px)', // Heavy blur for "Frost" effect
            display: 'flex', flexDirection: 'column',
            padding: '32px 20px',
            overflowY: 'auto'
        }}>
            <SidebarContent menuItems={menuItems} />
        </aside>
    );
};

const SidebarContent = ({ menuItems }) => (
    <>
        <div style={{ padding: '0 12px', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'linear-gradient(135deg, #0A84FF, #5E5CE6)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Command size={18} color="white" />
            </div>
            <span style={{ fontSize: '18px', fontWeight: '700', letterSpacing: '-0.5px' }}>Dashboard</span>
        </div>

        <nav style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div style={{ fontSize: '11px', fontWeight: '600', color: 'var(--text-secondary)', padding: '0 12px 8px 12px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Menu
            </div>
            {menuItems.map((item, index) => (
                <a
                    key={index}
                    href="#"
                    style={{
                        display: 'flex', alignItems: 'center', gap: '12px',
                        padding: '10px 12px',
                        borderRadius: '10px',
                        color: item.active ? 'white' : 'var(--text-secondary)',
                        background: item.active ? 'rgba(10, 132, 255, 0.15)' : 'transparent',
                        textDecoration: 'none',
                        fontSize: '14px',
                        fontWeight: item.active ? '600' : '500',
                        transition: 'background 0.2s',
                    }}
                    onMouseEnter={(e) => {
                        if (!item.active) {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                            e.currentTarget.style.color = 'var(--text-primary)';
                        }
                    }}
                    onMouseLeave={(e) => {
                        if (!item.active) {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = 'var(--text-secondary)';
                        }
                    }}
                >
                    {item.icon}
                    {item.label}
                </a>
            ))}
        </nav>

        <div style={{ padding: '20px 12px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#30D158', boxShadow: '0 0 8px rgba(48,209,88,0.5)' }}></div>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>System Operational</span>
            </div>
        </div>
    </>
);

// Lucide icon imports
import { Menu, X } from 'lucide-react';

export default Sidebar;
