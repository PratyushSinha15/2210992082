const { getUsers, getUserPosts, getPostComments } = require('./userService');

async function getTopUsers() {
  const users = await getUsers();
  const userCommentsCount = {};

  for (let userId in users) {
    const posts = await getUserPosts(userId);
    let totalComments = 0;

    for (let post of posts) {
      const comments = await getPostComments(post.id);
      totalComments += comments.length;
    }

    userCommentsCount[userId] = totalComments;
  }

  const sortedUsers = Object.keys(userCommentsCount)
    .sort((a, b) => userCommentsCount[b] - userCommentsCount[a])
    .slice(0, 5);

  return sortedUsers.map(userId => ({
    userId,
    userName: users[userId],
    commentCount: userCommentsCount[userId]
  }));
}

async function getPosts(type) {
  const users = await getUsers();
  const posts = [];

  for (let userId in users) {
    const userPosts = await getUserPosts(userId);
    for (let post of userPosts) {
      const comments = await getPostComments(post.id);
      posts.push({
        postId: post.id,
        userId: post.userid,
        content: post.content,
        commentCount: comments.length,
        createdAt: new Date(),
      });
    }
  }

  if (type === 'popular') {
    posts.sort((a, b) => b.commentCount - a.commentCount);
    const maxComments = posts[0].commentCount;
    return posts.filter(post => post.commentCount === maxComments);
  } else if (type === 'latest') {
    posts.sort((a, b) => b.createdAt - a.createdAt);
    return posts.slice(0, 5);
  } else {
    return [];
  }
}

module.exports = { getTopUsers, getPosts };
