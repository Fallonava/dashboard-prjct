import { useState, useEffect } from 'react';
import githubService from '../services/github';
import { MoreHorizontal, Edit, Trash2 } from 'lucide-react';

const ProjectCard = ({ project, onEdit, onDelete }) => {
    const [ghData, setGhData] = useState(null);
    const [isHovered, setIsHovered] = useState(false);
    const isGithub = project.type === 'github';

    useEffect(() => {
        if (isGithub && project.repo) {
            githubService.getRepo(project.repo).then(data => {
                if (data) setGhData(data);
            });
        }
    }, [isGithub, project.repo]);

    // Determine content based on type
    const title = isGithub ? (project.customTitle || ghData?.name || project.repo) : project.title;
    const description = isGithub ? ghData?.description : project.description;
    const url = isGithub ? ghData?.html_url : '#';
    const progress = isGithub ? 100 : project.progress;
    const status = isGithub ? 'Live' : project.status;

    const gridClasses = project.featured ? 'col-span-2 row-span-2' : '';

    return (
        <div
            className={`glass card ${gridClasses}`}
            style={{
                position: 'relative',
                overflow: 'hidden',
                minHeight: project.featured ? '320px' : '200px',
                display: 'flex',
                flexDirection: 'column'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Actions Menu (Only for Local Projects for now) */}
            {!isGithub && isHovered && (
                <div style={{ position: 'absolute', top: '16px', right: '16px', display: 'flex', gap: '8px', zIndex: 10 }}>
                    <button
                        onClick={(e) => { e.stopPropagation(); onEdit(project); }}
                        className="glass"
                        style={{ padding: '6px', borderRadius: '8px', border: 'none', cursor: 'pointer', color: 'white' }}
                    >
                        <Edit size={14} />
                    </button>
                    <button
                        onClick={(e) => { e.stopPropagation(); onDelete(project.id); }}
                        className="glass"
                        style={{ padding: '6px', borderRadius: '8px', border: 'none', cursor: 'pointer', color: '#ff453a' }}
                    >
                        <Trash2 size={14} />
                    </button>
                </div>
            )}

            {/* Mesh Gradient Background for Local Projects */}
            {!isGithub && (
                <div className={`absolute inset-0 ${project.id === 'local-1' ? 'mesh-gradient-1' : 'mesh-gradient-2'}`}
                    style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, opacity: 0.15, zIndex: -1 }}
                />
            )}

            {/* Clickable Area Wrapper */}
            <a
                href={url}
                target={isGithub ? "_blank" : "_self"}
                rel="noreferrer"
                style={{ textDecoration: 'none', color: 'inherit', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '1.5rem' }}
            >
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                        <div className={`badge ${status === 'Completed' || status === 'Live' ? 'badge-completed' : 'badge-progress'}`}>
                            {status}
                        </div>
                        {isGithub && (
                            <span style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
                                ⭐ {ghData?.stargazers_count || 0}
                            </span>
                        )}
                    </div>

                    <h3 style={{
                        fontSize: project.featured ? '28px' : '20px',
                        fontWeight: '700',
                        marginBottom: '0.5rem',
                        lineHeight: '1.2'
                    }}>
                        {title}
                    </h3>

                    <p style={{
                        fontSize: project.featured ? '16px' : '14px',
                        color: 'var(--text-secondary)',
                        lineHeight: '1.5',
                        display: '-webkit-box',
                        WebkitLineClamp: project.featured ? 4 : 3,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}>
                        {description || 'Loading details...'}
                    </p>
                </div>

                <div style={{ marginTop: '2rem' }}>
                    {project.tech && (
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                            {project.tech.map(t => (
                                <span key={t} style={{ fontSize: '12px', padding: '2px 8px', borderRadius: '4px', background: 'rgba(255,255,255,0.1)' }}>
                                    {t}
                                </span>
                            ))}
                        </div>
                    )}

                    {!isGithub && (
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div className="progress-bar" style={{ flex: 1 }}>
                                <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                            </div>
                            <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--text-secondary)' }}>{progress}%</span>
                        </div>
                    )}

                    {isGithub && ghData?.language && (
                        <div style={{ fontSize: '12px', color: 'var(--text-tertiary)' }}>
                            {ghData.language}
                        </div>
                    )}
                </div>
            </a>
        </div>
    );
};

export default ProjectCard;
