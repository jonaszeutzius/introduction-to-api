const axios = require('axios')

const endpoint = 'https://api.blockspan.com/v1/nfts?page_size=5';
const headers = {
  accept: 'application/json',
  'X-API-KEY': 'YOUR_BLOCKSPAN_API_KEY',
};

axios.get(endpoint, { headers }).then(response => {
  console.log(response.data);
}).catch(error => {
  console.error(error);
});