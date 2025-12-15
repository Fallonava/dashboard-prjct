const Profile = ({ profile, compact }) => {
    if (!profile) return null;

    return (
        <div className="glass card h-full" style={{ padding: '2rem', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>

            {/* Mesh Gradient Background */}
            <div
                className="mesh-gradient-1 absolute inset-0 opacity-20"
            ></div>

            <div className="relative z-10 flex flex-col items-center gap-4">
                <div style={{ padding: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '50%', backdropFilter: 'blur(10px)' }}>
                    <img
                        src={profile.avatar_url}
                        alt="Profile"
                        style={{ width: compact ? '100px' : '120px', height: compact ? '100px' : '120px', borderRadius: '50%', objectFit: 'cover' }}
                    />
                </div>

                <div>
                    <h2 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '4px' }}>{profile.name}</h2>
                    <p style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>@{profile.login}</p>
                </div>

                <div style={{ display: 'flex', gap: '8px', marginTop: '1rem' }}>
                    <div className="badge" style={{ background: 'rgba(255,255,255,0.1)' }}>Frontend Dev</div>
                    <div className="badge" style={{ background: 'rgba(255,255,255,0.1)' }}>UI/UX</div>
                </div>

                <a href={profile.html_url} target="_blank" rel="noreferrer"
                    className="btn-apple primary"
                    style={{
                        marginTop: '1.5rem',
                        padding: '10px 24px',
                        width: '100%'
                    }}>
                    Follow on GitHub
                </a>
            </div>
        </div>
    );
};

export default Profile;
