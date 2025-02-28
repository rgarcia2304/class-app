import { getPostsWithComments } from './redditAPI';
import { suggestProductWithChatGPT } from './chatgptAPI';

export default async function handler(req, res) {
    if (req.method !== "POST") {
      res.setHeader("Allow", ["POST"]);
      return res.status(405).json({ error: `Method ${req.method} not allowed` });
    }
    try {
      const { query } = req.body;
      if (!query || query.trim() === "") {
        return res.status(400).json({ error: "Missing query in request body" });
      }
      const aggregatedData = await getPostsWithComments(query);
      const productRecommendation = await suggestProductWithChatGPT(aggregatedData, query);
      return res.status(200).json(productRecommendation);
    } catch (error) {
      console.error("Error in getRecommendation API:", error);
      return res.status(500).json({ error: error.message });
    }
  }
