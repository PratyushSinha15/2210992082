const axios = require('axios');

// 🔐 Access Token
const accessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ0NzA1MjA3LCJpYXQiOjE3NDQ3MDQ5MDcsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjNkNGRmZTRhLTllODktNGQwNS1iZWRmLWYwN2Q5MTFjYTA3OSIsInN1YiI6InByYXR5dXNoMjA4Mi5iZTIyQGNoaXRrYXJhLmVkdS5pbiJ9LCJlbWFpbCI6InByYXR5dXNoMjA4Mi5iZTIyQGNoaXRrYXJhLmVkdS5pbiIsIm5hbWUiOiJwcmF0eXVzaCBrdW1hciIsInJvbGxObyI6IjIyMTA5OTIwODIiLCJhY2Nlc3NDb2RlIjoiUHd6dWZHIiwiY2xpZW50SUQiOiIzZDRkZmU0YS05ZTg5LTRkMDUtYmVkZi1mMDdkOTExY2EwNzkiLCJjbGllbnRTZWNyZXQiOiJLeHdkZ1hhUGR4ZmdxbVlCIn0.z7x6BFvBKc-dZ0os2SH6UKcFwOQmU2Jzs2FZOhvg7QQ';

// 🌐 API Base URL
const baseUrl = 'http://20.244.56.144/evaluation-service';

// 🔄 Function to get /users
const fetchUsers = async () => {
  try {
    const response = await axios.get(`${baseUrl}/users`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    console.log('✅ Users Data:', response.data);
  } catch (err) {
    console.error('❌ Error fetching users:', err.message);
    if (err.response) {
      console.error('Status:', err.response.status);
      console.error('Details:', err.response.data);
    }
  }
};

fetchUsers();