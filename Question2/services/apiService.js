const axios = require('axios');
const { apiBaseUrl } = require('../config/config');

async function fetchData(url) {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

module.exports = { fetchData };
