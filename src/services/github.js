export default {
  getUser: async (username) => {
    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error('User not found');
      return await response.json();
    } catch (error) {
      console.error('Error fetching user:', error);
      return null;
    }
  },

  getRepos: async (username) => {
    try {
      // Fetch specifically sorted by updated to match logic requirements
      const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12&type=public`);
      if (!response.ok) throw new Error('Repos not found');
      return await response.json();
    } catch (error) {
      console.error('Error fetching repos:', error);
      return [];
    }
  },

  getRepo: async (repoFullName) => {
    try {
      const response = await fetch(`https://api.github.com/repos/${repoFullName}`);
      if (!response.ok) throw new Error('Repo not found');
      return await response.json();
    } catch (error) {
      console.error(`Error fetching repo ${repoFullName}:`, error);
      return null;
    }
  }
};
