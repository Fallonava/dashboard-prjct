export const projects = [
    {
        id: 'local-1',
        type: 'local',
        title: 'Alfai Dashboard',
        description: 'A premium, client-side dashboard for tracking project progress. Built with React + Vite.',
        progress: 90,
        status: 'In Progress', // In Progress, Completed, On Hold
        tech: ['React', 'Vite', 'CSS'],
        featured: true // Takes up 2x2 space in bento
    },
    {
        id: 'gh-1',
        type: 'github',
        repo: 'facebook/react', // Example for demo (replace with your actual repo)
        customTitle: 'React Core', // Optional override
        featured: true
    },
    {
        id: 'local-2',
        type: 'local',
        title: 'E-Commerce API',
        description: 'Backend REST API built with Express and MongoDB for a shoe store.',
        progress: 100,
        status: 'Completed',
        tech: ['Node.js', 'Express', 'MongoDB'],
        featured: false
    },
    {
        id: 'gh-2',
        type: 'github',
        repo: 'vitejs/vite', // Example for demo
        featured: false
    },
    {
        id: 'local-3',
        type: 'local',
        title: 'Personal Finance App',
        description: 'Mobile app to track daily expenses and monthly budget.',
        progress: 35,
        status: 'In Progress',
        tech: ['Flutter', 'Firebase'],
        featured: false
    },
    {
        id: 'local-4',
        type: 'local',
        title: 'Portfolio v1',
        description: 'Old portfolio site built with pure HTML/SCSS.',
        progress: 100,
        status: 'Completed',
        tech: ['HTML', 'SCSS'],
        featured: false
    }
];
