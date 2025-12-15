import { useState, useMemo } from 'react';
import RepoCard from './RepoCard';

const RepoGrid = ({ repos }) => {
    const [search, setSearch] = useState('');

    const filteredRepos = useMemo(() => {
        return repos
            .filter(repo => repo.name.toLowerCase().includes(search.toLowerCase()))
            .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    }, [repos, search]);

    return (
        <section>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 style={{ fontSize: '20px', fontWeight: '600' }}>Repositories ({filteredRepos.length})</h3>

                <div className="glass" style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '8px 16px',
                    borderRadius: '12px',
                    width: '100%',
                    maxWidth: '300px',
                    background: 'var(--bg-card)'
                }}>
                    <span style={{ marginRight: '8px', color: 'var(--text-secondary)' }}>🔍</span>
                    <input
                        type="text"
                        placeholder="Find a repository..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{
                            border: 'none',
                            background: 'transparent',
                            outline: 'none',
                            width: '100%',
                            fontSize: '14px',
                            color: 'var(--text-primary)'
                        }}
                    />
                </div>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                gap: '1.5rem'
            }}>
                {filteredRepos.map(repo => (
                    <RepoCard key={repo.id} repo={repo} />
                ))}

                {filteredRepos.length === 0 && (
                    <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '4rem', color: 'var(--text-secondary)' }}>
                        <p>No repositories found matching "{search}"</p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default RepoGrid;
