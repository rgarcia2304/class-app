import { getPostsWithComments } from "./rapid";
import { suggestProductWithChatGPT } from "./chatgptAPI";

export default async function handler(req, res) {
    try {
      const { query } = req.body;
      const responseData = await getPostsWithComments(query);
      const productRecommendation = await suggestProductWithChatGPT(responseData, query);
      console.log(productRecommendation);
      return res.status(200).json(productRecommendation);
    } catch (error) {
      console.error("Error in getRecommendation API:", error);
    }
  }
