import { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const ProjectModal = ({ isOpen, onClose, onSave, projectToEdit }) => {
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        progress: 0,
        status: 'In Progress',
        tech: '',
        featured: false
    });

    useEffect(() => {
        if (projectToEdit) {
            setFormData({
                ...projectToEdit,
                tech: projectToEdit.tech ? projectToEdit.tech.join(', ') : ''
            });
        } else {
            setFormData({
                title: '',
                description: '',
                progress: 0,
                status: 'In Progress',
                tech: '',
                featured: false
            });
        }
    }, [projectToEdit, isOpen]);

    if (!isOpen) return null;

    const handleSubmit = (e) => {
        e.preventDefault();
        const techArray = formData.tech.split(',').map(t => t.trim()).filter(t => t);
        onSave({
            ...formData,
            tech: techArray
        });
        onClose();
    };

    return (
        <div style={{
            position: 'fixed', inset: 0, zIndex: 9999,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backdropFilter: 'blur(10px)', background: 'rgba(0,0,0,0.4)'
        }}>
            <div className="glass card" style={{ width: '100%', maxWidth: '500px', padding: '2rem', margin: '1rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '20px', fontWeight: '700' }}>{projectToEdit ? 'Edit Project' : 'New Project'}</h2>
                    <button onClick={onClose} style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer' }}>
                        <X size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <div>
                        <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Title</label>
                        <input
                            required
                            type="text"
                            value={formData.title}
                            onChange={e => setFormData({ ...formData, title: e.target.value })}
                            style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'white' }}
                        />
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Description</label>
                        <textarea
                            required
                            rows={3}
                            value={formData.description}
                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                            style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'white' }}
                        />
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        <div>
                            <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Progress (%)</label>
                            <input
                                type="number"
                                min="0" max="100"
                                value={formData.progress}
                                onChange={e => setFormData({ ...formData, progress: parseInt(e.target.value) })}
                                style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'white' }}
                            />
                        </div>
                        <div>
                            <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Status</label>
                            <select
                                value={formData.status}
                                onChange={e => setFormData({ ...formData, status: e.target.value })}
                                style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'white' }}
                            >
                                <option value="In Progress">In Progress</option>
                                <option value="Completed">Completed</option>
                                <option value="On Hold">On Hold</option>
                            </select>
                        </div>
                    </div>

                    <div>
                        <label style={{ display: 'block', fontSize: '13px', color: 'var(--text-secondary)', marginBottom: '4px' }}>Tech Stack (comma separated)</label>
                        <input
                            type="text"
                            placeholder="React, CSS, Node"
                            value={formData.tech}
                            onChange={e => setFormData({ ...formData, tech: e.target.value })}
                            style={{ width: '100%', padding: '10px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--border-color)', color: 'white' }}
                        />
                    </div>

                    <button type="submit" className="btn-apple primary" style={{ marginTop: '1rem' }}>
                        Save Project
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ProjectModal;
