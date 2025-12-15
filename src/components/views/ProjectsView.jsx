import ProjectCard from '../ProjectCard';
import { Plus } from 'lucide-react';

const ProjectsView = ({ projects, onAdd, onEdit, onDelete }) => {
    return (
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <div>
                    <h1 style={{ fontSize: '32px', fontWeight: '700' }}>All Projects</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Manage your portfolio.</p>
                </div>
                <button
                    onClick={onAdd}
                    className="btn-apple primary"
                    style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
                >
                    <Plus size={16} /> New Project
                </button>
            </div>

            <div className="bento-grid">
                {projects.map(project => (
                    <ProjectCard
                        key={project.id}
                        project={project}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                ))}
            </div>
        </div>
    );
};

export default ProjectsView;
