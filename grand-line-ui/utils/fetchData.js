export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'af2afe6764mshdf36744e5058163p1bcb75jsn92a988eb2841',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  },
};

export const youtubeOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': 'f0021db587msh781fb1cbef39856p11c183jsn45521d5d1c85',
  },
};

export const fetchData = async (url, options) => {
  const res = await fetch(url, options);
  const data = await res.json();

  return data;
};
