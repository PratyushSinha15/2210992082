const axios = require('axios');

// ✅ Access Token
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0NzA1MjA3LCJpYXQiOjE3NDQ3MDQ5MDcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjNkNGRmZTRhLTllODktNGQwNS1iZWRmLWYwN2Q5MTFjYTA3OSIsInN1YiI6InByYXR5dXNoMjA4Mi5iZTIyQGNoaXRrYXJhLmVkdS5pbiJ9LCJlbWFpbCI6InByYXR5dXNoMjA4Mi5iZTIyQGNoaXRrYXJhLmVkdS5pbiIsIm5hbWUiOiJwcmF0eXVzaCBrdW1hciIsInJvbGxObyI6IjIyMTA5OTIwODIiLCJhY2Nlc3NDb2RlIjoiUHd6dWZHIiwiY2xpZW50SUQiOiIzZDRkZmU0YS05ZTg5LTRkMDUtYmVkZi1mMDdkOTExY2EwNzkiLCJjbGllbnRTZWNyZXQiOiJLeHdkZ1hhUGR4ZmdxbVlCIn0.z7x6BFvBKc-dZ0os2SH6UKcFwOQmU2Jzs2FZOhvg7QQ'; 

// ✅ Base URL
const baseUrl = 'http://20.244.56.144/evaluation-service';

// ✅ Make request to /users/1/posts
const fetchUserPosts = async () => {
  try {
    const response = await axios.get(`${baseUrl}/users/1/posts`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    console.log('User 1 Posts:', response.data);
  } catch (error) {
    console.error(' Error fetching posts:', error.message);
    if (error.response) {
      console.error(`Status: ${error.response.status}`);
      console.error(`Data:`, error.response.data);
    }
  }
};

fetchUserPosts();