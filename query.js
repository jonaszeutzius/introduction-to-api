const axios = require('axios')

const endpoint = 'http://localhost:8080/v1/nfts?page_size=5';
const headers = {
  accept: 'application/json',
  'X-API-KEY': '2jhzbqIWanB8puiqySBIWJVf6Ovp7oPW',
};

axios.get(endpoint, { headers }).then(response => {
  console.log(response.data);
}).catch(error => {
  console.error(error);
});