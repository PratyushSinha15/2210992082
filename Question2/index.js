const express = require('express');
const api = require('./request');
const app = express();


app.get('/users', async (req, res) => {
  try {
    const { data: userData } = await api.get('/users');
    const users = userData.users;

    const commentCounts = [];

    for (const [userId, userName] of Object.entries(users)) {
      const { data: postData } = await api.get(`/users/${userId}/posts`);
      const posts = postData.posts;

      let totalComments = 0;
      posts.forEach(post => {
        totalComments += post.comments.length;
      });

      commentCounts.push({ userId, name: userName, totalComments });
    }

    const topUsers = commentCounts
      .sort((a, b) => b.totalComments - a.totalComments)
      .slice(0, 5);

    res.json({ topUsers });
  } catch (error) {
    console.error('Error fetching users:', error.message);
    res.status(500).json({ error: 'Failed to fetch top users' });
  }
});

// 🔹 Get latest or most popular posts
app.get('/posts', async (req, res) => {
  const type = req.query.type;

  if (!['popular', 'latest'].includes(type)) {
    return res.status(400).json({ error: 'Invalid type. Use "popular" or "latest".' });
  }

  try {
    const { data: userData } = await api.get('/users');
    const users = userData.users;

    let allPosts = [];

    for (const userId of Object.keys(users)) {
      const { data: postData } = await api.get(`/users/${userId}/posts`);
      allPosts.push(...postData.posts);
    }

    if (type === 'popular') {
      let maxComments = 0;
      const popularPosts = [];

      allPosts.forEach(post => {
        const commentCount = post.comments.length;
        if (commentCount > maxComments) {
          maxComments = commentCount;
          popularPosts.length = 0;
          popularPosts.push(post);
        } else if (commentCount === maxComments) {
          popularPosts.push(post);
        }
      });

      return res.json({ posts: popularPosts });
    }

    if (type === 'latest') {
      allPosts.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      return res.json({ posts: allPosts.slice(0, 5) });
    }
  } catch (error) {
    console.error('Error fetching posts:', error.message);
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Microservice running on http://localhost:${PORT}`);
});