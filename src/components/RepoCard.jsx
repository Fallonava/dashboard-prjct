const RepoCard = ({ repo }) => {
    const getLangColor = (lang) => {
        const colors = {
            JavaScript: '#f1e05a',
            TypeScript: '#2b7489',
            HTML: '#e34c26',
            CSS: '#563d7c',
            Python: '#3572A5',
            Java: '#b07219',
            Vue: '#41b883',
            React: '#61dafb'
        };
        return colors[lang] || '#cccccc';
    };

    return (
        <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="glass card"
            style={{
                padding: '1.5rem',
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                height: '100%',
                position: 'relative',
                transition: 'transform 0.2s var(--ease-spring), box-shadow 0.2s ease'
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', color: 'var(--text-primary)' }}>
                    {repo.name}
                </h3>
                <span style={{
                    fontSize: '12px',
                    padding: '4px 10px',
                    borderRadius: '20px',
                    background: 'rgba(0,0,0,0.05)',
                    border: '1px solid var(--border-color)',
                    fontWeight: '500'
                }}>
                    {repo.visibility}
                </span>
            </div>

            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', flex: 1, lineHeight: '1.5', marginBottom: '1.5rem' }}>
                {repo.description || 'No description available'}
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '12px', color: 'var(--text-secondary)' }}>
                {repo.language && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span style={{
                            width: '10px',
                            height: '10px',
                            borderRadius: '50%',
                            backgroundColor: getLangColor(repo.language)
                        }}></span>
                        {repo.language}
                    </div>
                )}
                <div style={{ marginLeft: 'auto' }}>
                    Updated {new Date(repo.updated_at).toLocaleDateString()}
                </div>
            </div>
        </a>
    );
};

export default RepoCard;
