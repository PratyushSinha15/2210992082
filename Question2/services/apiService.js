const axios = require('axios');
const { apiToken } = require('../config/config');

async function fetchData(endpoint) {
  try {
    const response = await axios.get(endpoint, {
      headers: {
        Authorization: `Bearer ${apiToken}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(`Error fetching data from ${endpoint}:`, error.message);
    return null;
  }
}

module.exports = { fetchData };
