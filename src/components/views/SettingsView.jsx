
const SettingsView = ({ profile }) => {
    return (
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ fontSize: '32px', fontWeight: '700', marginBottom: '2rem' }}>Settings</h1>

            <div className="glass card" style={{ padding: '2rem', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Profile</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                    <img
                        src={profile?.avatar_url || 'https://github.com/github.png'}
                        alt="Avatar"
                        style={{ width: '80px', height: '80px', borderRadius: '50%' }}
                    />
                    <div>
                        <div style={{ fontSize: '18px', fontWeight: '700' }}>{profile?.name || 'User'}</div>
                        <div style={{ color: 'var(--text-secondary)' }}>@{profile?.login}</div>
                    </div>
                </div>
            </div>

            <div className="glass card" style={{ padding: '2rem' }}>
                <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Data Management</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                    This is a client-side application. Your data is stored in your browser's Local Storage.
                </p>
                <button
                    className="glass"
                    style={{
                        padding: '10px 20px',
                        borderRadius: '8px',
                        border: '1px solid #ff453a',
                        color: '#ff453a',
                        cursor: 'pointer',
                        background: 'rgba(255, 69, 58, 0.1)'
                    }}
                    onClick={() => {
                        if (confirm('Are you sure you want to clear all local data? This cannot be undone.')) {
                            localStorage.clear();
                            window.location.reload();
                        }
                    }}
                >
                    Clear Local Data
                </button>
            </div>
        </div>
    );
};

export default SettingsView;
