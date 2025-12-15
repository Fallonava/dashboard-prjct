import { useState, useEffect } from 'react';
import './index.css';
import githubService from './services/github';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import BentoGrid from './components/BentoGrid';
// import Skeleton from './components/Skeleton'; // Unused in this version
import Background from './components/Background';
import { useProjects } from './hooks/useProjects';
import ProjectModal from './components/ProjectModal';
import { ActivityChart, LanguageChart } from './components/Charts';

function App() {
  const [username] = useState('alfai');
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  // Project Management Hooks
  const { projects, addProject, updateProject, deleteProject } = useProjects();

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

  useEffect(() => {
    document.body.classList.add('dark-mode');
  }, []);

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

  return (
    <div className="app-layout">
      {/* Background stays outside grid, fixed to viewport */}
      <Background />

      {/* Sidebar is now the first column of the grid */}
      <Sidebar />

      {/* Main Content is the second column */}
      <main className="main-content" style={{ padding: '2.5rem', minHeight: '100vh', position: 'relative', zIndex: 1, overflowX: 'hidden' }}>

        {loading ? (
          <div className="glass card" style={{ padding: '2.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '400px' }}>
            <span style={{ fontSize: '18px', color: 'var(--text-secondary)' }}>Loading Dashboard...</span>
          </div>
        ) : (
          <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
              <div style={{ gridColumn: 'span 2' }}>
                <Profile profile={profile} />
              </div>
              <div style={{ height: '320px' }}>
                <ActivityChart projects={projects} />
              </div>
              <div style={{ height: '320px' }}>
                <LanguageChart projects={projects} />
              </div>
            </div>

            <BentoGrid
              projects={projects}
              onAdd={handleAddNew}
              onEdit={handleEdit}
              onDelete={deleteProject}
            />
          </div>
        )}
      </main>

      {/* Modal overlays everything */}
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
