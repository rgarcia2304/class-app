// api/redditApi.js
import axios from 'axios';

// Searches the BIFL subreddit based on the given query
export const searchBIFLSubreddit = async (query) => {
  try {
    const url = `https://www.reddit.com/r/BuyItForLife/search.json?q=${encodeURIComponent(query)}&restrict_sr=1&sort=relevance`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching search results:', error);
    throw error;
  }
};

// Fetches the comments for a specific post and limits the result to the top 5 comments
export const getTopComments = async (postId) => {
  try {
    const url = `https://www.reddit.com/r/BuyItForLife/comments/${postId}.json?limit=5&sort=confidence`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching comments:', error);
    throw error;
  }
};
