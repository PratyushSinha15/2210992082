const { fetchData } = require('./apiService');

async function getUsers() {
  const usersData = await fetchData(`${apiBaseUrl}/users`);
  return usersData ? usersData.users : {};
}

async function getUserPosts(userId) {
  const postsData = await fetchData(`${apiBaseUrl}/users/${userId}/posts`);
  return postsData ? postsData.posts : [];
}

async function getPostComments(postId) {
  const commentsData = await fetchData(`${apiBaseUrl}/posts/${postId}/comments`);
  return commentsData ? commentsData.comments : [];
}

module.exports = { getUsers, getUserPosts, getPostComments };
