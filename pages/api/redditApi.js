import axios from 'axios';

// Searches all of Reddit based on the given query.
export const searchReddit = async (query) => {
  try {
    const url = "https://www.reddit.com/search.json?q=" + query + "&sort=relevance&t=all&include_over_18=on";
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching search results:", error);
    throw error;
  }
};

// Fetches the top 5 comments for a specific post using its subreddit.
export const getTopComments = async (postId, subreddit) => {
  try {
    const url = "https://www.reddit.com/r/" + subreddit + "/comments/" + postId + ".json?limit=5&sort=confidence";
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching comments:", error);
    throw error;
  }
};

// Aggregates the top 10 posts with their top 5 comments.
export const getPostsWithComments = async (query) => {
  try {
    const searchData = await searchReddit(query);
    // Filter and select the top 10 posts.
    const posts = searchData.data.children
      .filter(child => child && child.data)
      .slice(0, 10)
      .map(child => child.data);

    // For each post, fetch its top 5 comments using its subreddit.
    const postsWithComments = await Promise.all(
      posts.map(async (post) => {
        const commentsData = await getTopComments(post.id, post.subreddit);
        let comments = [];
        if (
          commentsData &&
          commentsData[1] &&
          commentsData[1].data &&
          commentsData[1].data.children
        ) {
          comments = commentsData[1].data.children
            .filter(child => child && child.data)
            .slice(0, 5)
            .map(child => child.data);
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
