const accessKey = process.env.REACT_APP_API_NINJAS_KEY;
const API_URL = `https://api.api-ninjas.com/v1/quotes?limit=1`;

export const getQuote = async () => {
  const response = await fetch(API_URL, {
    method: "GET",
    headers: { "X-Api-Key": accessKey },
  });
  const json = await response.json();
  const quote = json[0];

  return {
    quote: quote.quote,
    author: quote.author,
  };
};

const quotesApi = {
  getQuote,
};

export default quotesApi;
