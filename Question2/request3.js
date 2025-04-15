
const axios = require('axios');

const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0NzA1MjA3LCJpYXQiOjE3NDQ3MDQ5MDcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjNkNGRmZTRhLTllODktNGQwNS1iZWRmLWYwN2Q5MTFjYTA3OSIsInN1YiI6InByYXR5dXNoMjA4Mi5iZTIyQGNoaXRrYXJhLmVkdS5pbiJ9LCJlbWFpbCI6InByYXR5dXNoMjA4Mi5iZTIyQGNoaXRrYXJhLmVkdS5pbiIsIm5hbWUiOiJwcmF0eXVzaCBrdW1hciIsInJvbGxObyI6IjIyMTA5OTIwODIiLCJhY2Nlc3NDb2RlIjoiUHd6dWZHIiwiY2xpZW50SUQiOiIzZDRkZmU0YS05ZTg5LTRkMDUtYmVkZi1mMDdkOTExY2EwNzkiLCJjbGllbnRTZWNyZXQiOiJLeHdkZ1hhUGR4ZmdxbVlCIn0.z7x6BFvBKc-dZ0os2SH6UKcFwOQmU2Jzs2FZOhvg7QQ'; 


const baseUrl = 'http://20.244.56.144/evaluation-service';


const fetchPostComments = async () => {
  try {
    const response = await axios.get(`${baseUrl}/posts/150/comments`, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    console.log('✅ Post 150 Comments:', response.data);
  } catch (error) {
    console.error('❌ Error fetching comments:', error.message);
    if (error.response) {
      console.error(`Status: ${error.response.status}`);
      console.error(`Data:`, error.response.data);
    }
  }
};

fetchPostComments();