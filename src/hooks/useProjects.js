import { useState, useEffect } from 'react';
import { projects as defaultProjects } from '../data/projects';

const STORAGE_KEY = 'alfai_dashboard_projects_v4';

export const useProjects = () => {
    const [projects, setProjects] = useState([]);

    // Load from LocalStorage or fallback to default
    useEffect(() => {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved) {
            try {
                setProjects(JSON.parse(saved));
            } catch (e) {
                console.error('Failed to parse projects', e);
                setProjects(defaultProjects);
            }
        } else {
            setProjects(defaultProjects);
        }
    }, []);

    // Sync to LocalStorage whenever projects change
    useEffect(() => {
        if (projects.length > 0) {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(projects));
        }
    }, [projects]);

    const addProject = (project) => {
        const newProject = {
            ...project,
            id: `local-${Date.now()}`,
            type: 'local', // Defaulting new adds to local for now
            featured: false
        };
        setProjects(prev => [newProject, ...prev]);
    };

    const updateProject = (id, updatedFields) => {
        setProjects(prev => prev.map(p => p.id === id ? { ...p, ...updatedFields } : p));
    };

    const deleteProject = (id) => {
        setProjects(prev => prev.filter(p => p.id !== id));
    };

    return { projects, addProject, updateProject, deleteProject };
};
