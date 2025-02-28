import OpenAI from "openai";
const openai = new OpenAI();

export const suggestProductWithChatGPT = async (aggregatedData, searchQuery) => {
  const prompt = `
I have aggregated Reddit results in JSON format about "${searchQuery}". Each item is an object with a "post" and a "comment". The "post" has properties such as "title" and either "selftext" or "content.text", and the "comment" has a "text" property.
Based on these suggestions for products, please analyze the data and recommend ONE product for someone interested in "${searchQuery}".
Return your answer as valid JSON in the following format:
{
  "product": "Product Name",
  "reason": "A brief explanation of why this product is recommended",
  "link_used": "give the ebay link to the product that is recommended",
  "link_new": "give a link to the company website"
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







