// import OpenAI from "npm:openai@4";

// const openai = new OpenAI({
//   apiKey: Deno.env.get("OPENAI_API_KEY")
// });

// Deno.serve(async (req: Request) => {
//   const completion = await openai.chat.completions.create({
//     model: "gpt-3.5-turbo",
//     messages: [{ role: "user", content: "Tell me a dad joke" }],
//   });
//   const joke = completion.choices[0].message.content;
//   return new Response(joke);
// });