import OpenAI from "openai";
const openai = new OpenAI();

export const suggestProductWithChatGPT = async (responseData, searchQuery) => {
  const prompt = `
You are provided with response reddit data in JSON format for the query "${searchQuery}". 
Each item contains a "post" (with properties like "title" and either "selftext" or "content.text") and a "comment" (with a "text" property).

Follow these steps to properly analyze the input:

 Determine if the query "${searchQuery}" is intended to obtain a recommendation for a tangible, purchasable product.
  Treat it as a product query if the text includes terms such as 
  "recommendation", "buy", "purchase", or mentions specific product types (e.g., "oxford shoe", "smartphone", etc.). 
  For example, a query like "high quality oxford shoe recommendation" should be recognized as product-related.

 Case for if "${searchQuery}" is a product query:
    Analyze the response data and select ONE product suggestion that is a physical item available for purchase.
    Make sure the recommendation encompasses varied perspectives and do analyses based on all the different suggestions talked
    about in the different posts not just what one user said. Also take note of the upvote count of posts etc.. MAKE AN WELL ROUNDED REVIEW
    encompassing sentiment and tangibles.
    Ensure the recommended product is tangible (not a service, experience, or digital item).
    Return this EXACT following JSON object in this format:
   
   {
     "product": "Product Name",
     "reason": "A brief explanation of why this product is recommended based on the response data.",
     "link_used": "an eBay link to the product",
     "link_new": "a link to the company website for the product",
     "isProduct": "yes"
   }

   Case for if "${searchQuery}" does not indicate a product query (for example, if it pertains to personal traits, experiences, or non-tangible subjects):
   - Return this EXACT following JSON object in this format:
   {
     "product": "N/A",
     "reason": "This query does not pertain to a physical product available for purchase.",
     "link_used": "",
     "link_new": "",
     "isProduct": "no"
   }

    SUPER IMPORTANT TO Output ONLY the JSON object exactly in the format specified above with no additional text or commentary.


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
  //need to get rid of the tics for JSON
  const myArray= output.split('```json\n')[1]?.split('\n```')[0]?.trim();
  console.log(myArray);
  return JSON.parse(myArray);
};






