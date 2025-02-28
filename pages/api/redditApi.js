import axios from "axios";

const RAPIDAPI_KEY = "1c07cae170msha3fce8fd2d70dd2p1bc9bfjsnefe870ff982e";
const RAPIDAPI_HOST = "reddit-scraper2.p.rapidapi.com";

const makeRequest = async (options) => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 429) {
      const retryAfter = error.response.headers['retry-after'] || 1; // default to 1 second if missing
      console.warn(`Rate limit exceeded. Retrying after ${retryAfter} seconds...`);
      await new Promise((resolve) => setTimeout(resolve, retryAfter * 1000));
      // Retry the request once
      const response = await axios.request(options);
      return response.data;
    }
    throw error;
  }
};

// Searches all of Reddit for posts based on the given query.
export const searchReddit = async (query) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://reddit-scraper2.p.rapidapi.com/search_posts',
      params: {
        query: query,
        sort: 'RELEVANCE',
        time: 'all',
        nsfw: '0'
      },
      headers: {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': RAPIDAPI_HOST
      }
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching posts from RapidAPI:", error);
    throw error;
  }
};

// Fetches the top comments for a specific post.
export const getTopComments = async (post_id) => {
  try {
    const options = {
      method: 'GET',
      url: 'https://reddit-scraper2.p.rapidapi.com/post_comments',
      params: {
        post_id: post_id,
        sort: 'TOP'
      },
      headers: {
        'x-rapidapi-key': RAPIDAPI_KEY,
        'x-rapidapi-host': RAPIDAPI_HOST
      }
    };
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments from RapidAPI for post", post_id, ":", error);
    throw error;
  }
};

// Aggregates the top 2 posts with their top 3 comments each.
export const getPostsWithComments = async (query) => {
  try {
    const postsData = await searchReddit(query);
    console.log("RapidAPI postsData:", postsData);
    
    // Ensure postsData.data is an array.
    if (!Array.isArray(postsData.data)) {
      console.error("Unexpected postsData structure:", postsData);
      throw new Error("Unexpected postsData structure");
    }
    // Limit to top 2 posts.
    const posts = postsData.data.slice(0, 1);

    const postsWithComments = await Promise.all(
      posts.map(async (post) => {
        if (!post.id) return { post, comments: [] };
        const commentsData = await getTopComments(post.id);
        let comments = [];
        // Limit to top 3 comments.
        if (commentsData && Array.isArray(commentsData.data)) {
          comments = commentsData.data.slice(0, 1);
        } else {
          console.error("Unexpected commentsData structure for post", post.id, commentsData);
        }
        return { post, comments };
      })
    );
    return postsWithComments;
  } catch (error) {
    console.error("Error aggregating posts and comments:", error);
    throw error;
  }
};
