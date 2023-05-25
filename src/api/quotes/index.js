const API_URL = `https://quotes.rest/qod?language=en`;

export const getQuote = async () => {
  const response = await fetch(API_URL);
  const json = await response.json();
  const quote = json.contents.quotes[0];

  return {
    quote: quote.quote,
    author: quote.author,
  };
};

const quotesApi = {
  getQuote,
};

export default quotesApi;
