import OpenAI from "openai";
const openai = new OpenAI();

export const suggestProductWithChatGPT = async (responseData, searchQuery) => {
  const prompt = `
You are acting as a savvy online shopper scouring Reddit for the best product recommendations, ensuring you focus only on relevant and appropriate content. Imagine you’re reading through various posts and comments for the query "${searchQuery}" and taking detailed notes on what people say—including upvotes, common opinions, and overall sentiment—while deliberately filtering out any irrelevant or NSFW content. For example, ignore posts or comments that include explicit sexual content, graphic violence, or any imagery or language that is not pertinent to product reviews. Similarly, disregard irrelevant details such as off-topic memes, personal rants, or unrelated jokes.

You are provided with Reddit response data in JSON format. Each item contains a "post" (with properties such as "title" and either "selftext" or "content.text") and a "comment" (with a "text" property).

Follow these steps to analyze the input:

    Determine the Query Type:
    Check if the query "${searchQuery}" is asking for a recommendation for a tangible, purchasable product. Treat it as a product query if it includes terms like "recommendation", "buy", "purchase", or mentions specific product types (e.g., "oxford shoe", "smartphone", etc.). For example, "high quality oxford shoe recommendation" should be recognized as a product query.

    If the Query is a Product Query:
        Read through all the provided Reddit posts and comments, ignoring any content that is off-topic, irrelevant, or NSFW.
        Examples:
            Skip posts with explicit sexual language or graphic descriptions unrelated to the product.
            Exclude comments that are mere memes, jokes, or personal rants not contributing to product evaluations.
        Analyze the remaining data by taking into account upvote counts, recurring opinions, and overall sentiment.
        Identify ONE physical product suggestion that stands out as the best choice based on the overall discussion.
        Ensure the recommended product is tangible (not a service, digital item, or experience).
        Generate two links for the recommended product:
            A "used" link: an eBay URL where the product is available.
            ALWAYS send and eBAY url in 
            Always send an ebay url with the product
            Always send an ebay url with the product 
            Always send an an ebay url with the product
            A "new" link: the official company website for the product.
        Return the following JSON object exactly in this format:

    { "product": "Product Name", "reason": "A brief explanation of why this product is recommended based on the Reddit discussions.", "link_used": "an eBay link to the product", "link_new": "a link to the company website for the product", "isProduct": "yes" }

    If the Query is NOT a Product Query:
        Return the following JSON object exactly in this format:

    { "product": "N/A", "reason": "This query does not pertain to a physical product available for purchase.", "link_used": "", "link_new": "", "isProduct": "no" }

IMPORTANT: Output ONLY the JSON object exactly as specified above with no additional text or commentary.

Data: ${JSON.stringify(responseData)}
  `;

  // Construct the parameters object as shown in the documentation:
  const parameters = {
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are an expert product recommender." },
      { role: "user", content: prompt }
    ],
    temperature: 0.2,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  };

  const completion = await openai.chat.completions.create(parameters);
  const output = completion.choices[0].message.content;
  console.log(output);
  
  //rework the Json if its in format from before
  const regex = /```json\s*([\s\S]*?)\s*```/;
  const match = output.match(regex);
  
  let jsonStr;
  if (match && match[1]) {
    jsonStr = match[1];
  } else {
    
    //if it outputs correctly
    jsonStr = output;
  }
  
  try {
    
    return JSON.parse(jsonStr);
  } catch (err) {
    throw new Error("JSON parse error: " + err.message);
  }
};






