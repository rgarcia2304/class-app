import OpenAI from "openai";
const openai = new OpenAI();

export const suggestProductWithChatGPT = async (aggregatedData, searchQuery) => {
  const prompt = `
I have aggregated Reddit results in JSON format about "${searchQuery}". Each item includes a "post" (with properties such as "title" and either "selftext" or "content.text") and a "comment" (with a "text" property).

Before processing, check if "${searchQuery}" explicitly indicates a search for a purchasable physical product. Look for clear product-related language (e.g., 'buy', 'purchase', specific product names, etc.). 

- If "${searchQuery}" clearly indicates a desire for a physical product, analyze the aggregated data and recommend ONE product with the following JSON structure:
{
  "product": "Product Name",
  "reason": "A brief explanation of why this product is recommended",
  "link_used": "an eBay link to the product",
  "link_new": "a link to the company website",
  "isProduct": "yes"
}

- If "${searchQuery}" does not clearly indicate a product (for example, if it’s a question like 'am I short', or a statement or inquiry about personal traits, experiences, services, vacations, etc.), then return the following JSON:
{
  "product": "N/A",
  "reason": "This query does not pertain to a physical product available for purchase.",
  "link_used": "",
  "link_new": "",
  "isProduct": "no"
}

Always verify that the recommended item is indeed a physical product and not a service or non-tangible item.
}
Data: ${JSON.stringify(aggregatedData)}
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
  return JSON.parse(output);
};






