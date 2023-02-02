import axios from 'axios';

const newParams = new URLSearchParams({
  key: '32552516-7a8b8b8a438842b22faf37c20',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});
const getImages = axios.create({
  baseURL: 'https://pixabay.com/api/',
  params: newParams,
});

// axios.defaults.baseURL = 'https://pixabay.com/api/';

export const getPhotos = async (searchQuery, page) => {
  const { data } = await getImages.get(`?q=${searchQuery}&page=${page}`);
  return data;
};
