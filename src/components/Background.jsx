import React from 'react';

const Background = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>

            {/* Deep Space Base */}
            <div style={{ position: 'absolute', inset: 0, background: 'var(--bg-primary)' }}></div>

            {/* Vibrant Orbs - Neo Version */}
            <div className="aurora-orb" style={{
                top: '-10%', left: '-10%', width: '60vw', height: '60vw',
                background: 'radial-gradient(circle, rgba(10, 132, 255, 0.25) 0%, transparent 60%)', // Electric Blue
                filter: 'blur(100px)'
            }}></div>

            <div className="aurora-orb" style={{
                bottom: '-10%', right: '-10%', width: '50vw', height: '50vw',
                background: 'radial-gradient(circle, rgba(175, 82, 222, 0.2) 0%, transparent 60%)', // Neon Purple
                filter: 'blur(100px)',
                animationDelay: '-3s'
            }}></div>

            <div className="aurora-orb" style={{
                top: '40%', left: '30%', width: '40vw', height: '40vw',
                background: 'radial-gradient(circle, rgba(255, 45, 85, 0.15) 0%, transparent 60%)', // Hot Pink
                filter: 'blur(120px)',
                animationDelay: '-6s'
            }}></div>

            {/* Noise Texture for that 'Grainy' Modern Look */}
            <div className="noise-overlay" style={{ opacity: 0.04 }}></div>
        </div>
    );
};

export default Background;
