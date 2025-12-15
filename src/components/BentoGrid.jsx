import ProjectCard from './ProjectCard';
import { Plus } from 'lucide-react';

const BentoGrid = ({ projects, onAdd, onEdit, onDelete }) => {
    return (
        <section>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ fontSize: '24px', fontWeight: '700' }}>Projects</h2>
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
        </section>
    );
};

export default BentoGrid;
