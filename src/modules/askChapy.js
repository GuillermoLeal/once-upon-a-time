const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = "https://api.openai.com/v1/chat/completions";
const MODEL = "gpt-3.5-turbo";
const MAX_TOKENS = 400;

const headers = {
  "content-type": "application/json",
  Authorization: `Bearer ${API_KEY}`
};

export const askChapy = async (prompt) => {
  const body = {
    messages: [{
      role: "user",
      content: prompt,
    }],
    model: MODEL,
    max_tokens: MAX_TOKENS,
    n: 1,
    stop: null
  };

  const options = {
    method: "POST",
    headers,
    body: JSON.stringify(body)
  };

  try {
    const res = await fetch(BASE_URL, options);
    const data = await res.json();
    const reply = data.choices[0].message.content;
    return reply;
  } catch (err) {
    console.log(err);
    return "Ocurrio un error con Chapy :c";
  }
};
