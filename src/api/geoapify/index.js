const API_URL = `https://api.geoapify.com/v1/ipinfo?apiKey=${process.env.REACT_APP_API_GEOPIFY_API_KEY}`;

export const getCoords = async () => {
  const response = await fetch(`${API_URL}`);
  const json = await response.json();
  const data = {
    lat: json.location.latitude,
    lon: json.location.longitude,
  };
  return data;
};

const geopifyApi = {
  getCoords,
};

export default geopifyApi;
