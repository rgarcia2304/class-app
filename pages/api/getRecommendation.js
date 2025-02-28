import { getPostsWithComments } from './redditAPI';
import { suggestProductWithChatGPT } from './chatgptAPI';

export default async function handler(req, res) {
    try {
      //prevents blank querires
      const { query } = req.body;
      if (!query || query.trim() === "") {
        return res.status(400).json({ error: "Missing query in request body" });
      }
      const responseData = await getPostsWithComments(query);
      const productRecommendation = await suggestProductWithChatGPT(responseData, query);
      console.log(productRecommendation);
      return res.status(200).json(productRecommendation);
    } catch (error) {
      console.error("Error in getRecommendation API:", error);
    }
  }
