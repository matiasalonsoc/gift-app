export const getGifs = async (category) => {
  const API = "0pt9aSanrii60B5JHG7nSvTA2koBpneH";
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API}&q=${category}&limit=10`;

  const resp = await fetch(url);

  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized.url,
  }));

  return gifs;
};
