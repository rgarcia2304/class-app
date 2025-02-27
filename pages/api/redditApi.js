import axios from 'axios';

const RAPIDAPI_KEY = "1c07cae170msha3fce8fd2d70dd2p1bc9bfjsnefe870ff982e";
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
//logic for fetching posts 
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
    console.error("Error fetching comments from RapidAPI:", error);
    throw error;
  }
};

export const getPostsWithComments = async (query) => {
  try {
    const postsData = await searchReddit(query);
    console.log("RapidAPI postsData:", postsData);
    
   
    if (!Array.isArray(postsData.data)) {
      console.error("Unexpected postsData structure:", postsData);
      throw new Error("Unexpected postsData structure");
    }
    const posts = postsData.data.slice(0, 5);

    const postsWithComments = await Promise.all(
      posts.map(async (post) => {
        if (!post.id) return { post, comments: [] };
        const commentsData = await getTopComments(post.id);
        let comments = [];
    
        if (commentsData && Array.isArray(commentsData.data)) {
          comments = commentsData.data.slice(0, 5);
        } else {
          console.error("Unexpected object", post.id, commentsData);
        }
        return { post, comments };
      })
    );
    return postsWithComments;
  } catch (error) {
    console.error("Error producing the comments and post:", error);
    throw error;
  }
};
