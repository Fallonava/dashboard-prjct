
const Background = () => {
    return (
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1, background: '#000' }}>
            <div className="aurora-orb orb-1"></div>
            <div className="aurora-orb orb-2"></div>
            <div className="aurora-orb orb-3"></div>
            <div className="noise-overlay"></div>
        </div>
    );
};

export default Background;
