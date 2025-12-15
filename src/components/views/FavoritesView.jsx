import ProjectCard from '../ProjectCard';

const FavoritesView = ({ projects, onEdit, onDelete }) => {
    const favoriteProjects = projects.filter(p => p.featured); // Assuming favorites = featured for now

    return (
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#FFD60A' }}>Favorites</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Your featured collection.</p>
            </div>

            {favoriteProjects.length > 0 ? (
                <div className="bento-grid">
                    {favoriteProjects.map(project => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            ) : (
                <div className="glass card" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                    No favorite projects yet. Mark a project as "Featured" to see it here.
                </div>
            )}
        </div>
    );
};

export default FavoritesView;
