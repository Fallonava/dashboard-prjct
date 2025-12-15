const Profile = ({ profile }) => {
    if (!profile) return null;

    return (
        <div className="glass card" style={{ padding: '2.5rem', marginBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
            <div
                className="mesh-gradient-1"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '140px',
                    opacity: 0.25
                }}
            ></div>

            <div style={{ display: 'flex', gap: '2rem', position: 'relative', flexWrap: 'wrap' }}>
                <img
                    src={profile.avatar_url}
                    alt={profile.name}
                    style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        border: '4px solid var(--bg-secondary)',
                        boxShadow: 'var(--shadow-md)'
                    }}
                />

                <div style={{ flex: 1, minWidth: '200px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <h2 style={{ fontSize: '32px', fontWeight: '700', letterSpacing: '-0.5px' }}>
                        {profile.name}
                    </h2>
                    <a
                        href={profile.html_url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ color: 'var(--accent-color)', textDecoration: 'none', fontSize: '16px' }}
                    >
                        @{profile.login}
                    </a>
                    <p style={{ marginTop: '1rem', color: 'var(--text-secondary)', maxWidth: '600px', lineHeight: '1.6' }}>
                        {profile.bio}
                    </p>

                    <div style={{ display: 'flex', gap: '2rem', marginTop: '2rem' }}>
                        {[
                            { label: 'Repos', value: profile.public_repos },
                            { label: 'Followers', value: profile.followers },
                            { label: 'Following', value: profile.following }
                        ].map(stat => (
                            <div key={stat.label} style={{ textAlign: 'center' }}>
                                <span style={{ fontSize: '24px', fontWeight: '700', display: 'block' }}>{stat.value}</span>
                                <span style={{ fontSize: '13px', textTransform: 'uppercase', letterSpacing: '0.5px', color: 'var(--text-tertiary)' }}>{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center' }}>
                    <a href={profile.html_url} target="_blank" rel="noreferrer"
                        className="btn-apple primary"
                        style={{
                            textDecoration: 'none',
                            textAlign: 'center'
                        }}>
                        View GitHub
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Profile;
