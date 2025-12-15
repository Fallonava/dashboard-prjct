import { useState, useEffect } from 'react';
import './index.css';
import githubService from './services/github';
import Sidebar from './components/Sidebar';
import Background from './components/Background';
import { useProjects } from './hooks/useProjects';
import ProjectModal from './components/ProjectModal';

// Views
import DashboardView from './components/views/DashboardView';
import ProjectsView from './components/views/ProjectsView';
import FavoritesView from './components/views/FavoritesView';
import SettingsView from './components/views/SettingsView';

function App() {
  const [username] = useState('Fallonava');
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Navigation State
  const [activeView, setActiveView] = useState('dashboard');

  // Theme State
  const [theme, setTheme] = useState('dark');

  // Add/Remove .dark class on theme change
  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Project Management Hooks
  const { projects, addProject, updateProject, deleteProject } = useProjects();

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const userProfile = await githubService.getUser(username);
        setProfile(userProfile);
      } catch (e) {
        console.error("Failed to fetch profile", e);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [username]);

  const handleSaveProject = (projectData) => {
    if (editingProject) {
      updateProject(editingProject.id, projectData);
    } else {
      addProject(projectData);
    }
  };

  const handleEdit = (project) => {
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleAddNew = () => {
    setEditingProject(null);
    setIsModalOpen(true);
  };

  // View Router
  const renderView = () => {
    switch (activeView) {
      case 'dashboard':
        return <DashboardView
          profile={profile}
          projects={projects}
          onAdd={handleAddNew}
          onEdit={handleEdit}
          onDelete={deleteProject}
        />;
      case 'projects':
        return <ProjectsView
          projects={projects}
          onAdd={handleAddNew}
          onEdit={handleEdit}
          onDelete={deleteProject}
        />;
      case 'favorites':
        return <FavoritesView
          projects={projects}
          onEdit={handleEdit}
          onDelete={deleteProject}
        />;
      case 'settings':
        return <SettingsView profile={profile} />;
      default:
        return <DashboardView profile={profile} projects={projects} />;
    }
  };

  return (
    <div className={`app-layout ${theme}`}>
      <Background />

      <Sidebar
        activeView={activeView}
        onNavigate={setActiveView}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="main-content">
        <div style={{ padding: '2.5rem', minHeight: '100%' }}>
          {loading ? (
            <div className="glass card" style={{ padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '400px' }}>
              <span style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>Loading Dashboard...</span>
            </div>
          ) : (
            renderView()
          )}
        </div>
      </main>

      <ProjectModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleSaveProject}
        projectToEdit={editingProject}
      />
    </div>
  );
}

export default App;
