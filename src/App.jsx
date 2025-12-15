import { useState, useEffect } from 'react';
import './index.css';
import githubService from './services/github';
import Sidebar from './components/Sidebar';
import Profile from './components/Profile';
import BentoGrid from './components/BentoGrid';
import Skeleton from './components/Skeleton';
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
    <div className="app-container">
      <Background />
      <Sidebar />

      <main className="main-content" style={{ padding: '2rem', minHeight: '100vh', maxWidth: '1600px', position: 'relative', zIndex: 1 }}>

        {/* Mobile Header Spacer */}
        <div style={{ height: '60px', display: window.innerWidth < 768 ? 'block' : 'none' }}></div>

        {loading ? (
          <div className="glass card" style={{ padding: '2.5rem' }}>Loading...</div>
        ) : (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
              <div style={{ gridColumn: 'span 2' }}>
                <Profile profile={profile} />
              </div>
              <div style={{ height: '300px' }}>
                <ActivityChart projects={projects} />
              </div>
              <div style={{ height: '300px' }}>
                <LanguageChart projects={projects} />
              </div>
            </div>

            <BentoGrid
              projects={projects}
              onAdd={handleAddNew}
              onEdit={handleEdit}
              onDelete={deleteProject}
            />
          </>
        )}
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
