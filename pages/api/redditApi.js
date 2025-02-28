import axios from "axios";

const RAPIDAPI_KEY = process.env.RAPID_API_KEY
const RAPIDAPI_HOST = "reddit-scraper2.p.rapidapi.com";


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

// Fetches the top comments for the post
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

//logic to specify size of results
export const getPostsWithComments = async (query) => {
  try {
    const postsData = await searchReddit(query);
    console.log("RapidAPI postsData:", postsData);
    
    // Limit to top 2 posts.
    const posts = postsData.data.slice(0, 2);

    const postsWithComments = await Promise.all(
      posts.map(async (post) => {
        if (!post.id) return { post, comments: [] };
        const commentsData = await getTopComments(post.id);
        let comments = [];
        // Limit to top 3 comments.
        if (commentsData) {
          comments = commentsData.data.slice(0, 2);
           console.log(commentsData)
        } else {
          console.error("Unexpected error with comment data", post.id, commentsData);
        }
        return { post, comments };
      })
    );
    return postsWithComments;
  } catch (error) {
    console.error("Error getting the comments from the posts:", error);
    throw error;
  }
};
