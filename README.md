# GETTING STARTED WITH BLOCKSPAN API: A BEGINNER’S GUIDE TO QUERYING NFT DATA

In the rapidly evolving world of digital assets, NFTs or Non-fungible Tokens have taken center stage. As an enthusiast, developer, or someone who's just curious, you might be wondering how to get your hands on all the rich data that surrounds NFTs. Look no further! Blockspan API is your gateway to the NFT universe. In this beginner’s guide, we will walk you through the process of setting up your development environment, authenticating with the API, and making your first API calls to fetch basic information about NFTs.

## WHAT IS BLOCKSPAN API?

Blockspan API is a powerful tool that lets developers query a myriad of information about NFTs, including ownership history, metadata, and sales data. It aims to make the process of interacting with blockchain data as seamless as possible.

## SETTING UP YOUR DEVELOPMENT ENVIRONMENT

Before we dive into querying the API, let’s ensure you have the right tools and environment ready.

### PREREQUISITES:

- A modern web browser
- A text editor (e.g., Visual Studio Code, Atom, Sublime Text)
- Basic understanding of JavaScript
- A Blockspan API account

### STEP 1: SIGN UP FOR A BLOCKSPAN ACCOUNT
Head over to the Blockspan website and sign up for an account. This will give you access to the API key, which is essential for making authenticated requests to the API.

### STEP 2: SET UP YOUR TEXT EDITOR
Ensure your text editor is set up and ready to go. For this guide, we’ll use JavaScript, so make sure your editor supports it.

### STEP 3: INSTALL NODE.JS
We will use Node.js for this tutorial. Head over to Node.js website and download the latest stable version. Installation is straightforward, just follow the prompts.

## AUTHENTICATING WITH THE API

Now that your environment is set up, let’s authenticate with the Blockspan API.

### STEP 1: RETRIEVE YOUR API KEY
Log in to your Blockspan account and head to the API section to retrieve your API key.

### STEP 2: SET UP AUTHENTICATION IN YOUR CODE
Create a new JavaScript directory `introduction-to-api`. Within this directory, create a file called `query.js`. In the terminal, cd into this directory and run the command `npm install axios`. This will install a library that can run api calls. Now open your query.js file, and start by importing this module:

```
const axios = require('axios');
```

## MAKING YOUR FIRST API CALL

Let's get to the exciting part - making your first API call!

### STEP 1: SET UP THE API ENDPOINT
In your JavaScript file, specify the endpoint you want to query. In this example, let's just fetch 5 recent NFTs:

```
const endpoint = 'https://api.blockspan.com/v1/nfts?page_size=5';
```

Notice how we included the query parameter page_size in the endpoint

### STEP 2: MAKE THE API CALL
Use axios to make a GET request to the API endpoint, and print the response to the console:

```
const headers = {
  accept: 'application/json',
  'X-API-KEY': 'YOUR_BLOCKSPAN_API_KEY',
};

axios.get(endpoint, { headers }).then(response => {
  console.log(response.data);
}).catch(error => {
  console.error(error);
});
```

Remember to replace `YOUR_BLOCKSPAN_API_KEY` with your actual key!

### STEP 3: RUN YOUR SCRIPT
Run your script using Node.js. In your introduction-to-api directory, execute `node query.js` in the terminal. You should see 5 nft objects and their information print to the terminal!

## CONCLUSION

Congratulations! You've made your first steps into the world of NFT data querying with Blockspan API. As you get more comfortable,explore the different endpoints and options available in the API documentation to perform more complex queries and analyses. Blockspan API offers a plethora of possibilities, including tracking ownership changes, analyzing market trends, and much more. The world of NFTs is vast and exciting, and with tools like Blockspan API, you are well-equipped to dive in headfirst.
Don't forget to follow best practices, such as keeping your API key secure and handling errors gracefully in your code. As you grow more proficient, consider contributing to the community by sharing your projects or even developing tools that leverage Blockspan API for the betterment of the NFT ecosystem.
Happy coding, and may your journey through the NFT data universe be enlightening and rewarding! 🚀🌌








