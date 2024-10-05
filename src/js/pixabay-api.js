const API_KEY = '46354087-8e1a6a8f4ead0e3d6b452e4d6';
const URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const url = `${URL}?key=${API_KEY}&q=${encodeURIComponent(
    query
  )}&image_type=photo&orientation=horizontal&safesearch=true`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response error');
    }
    const data = await response.json();
    return data.hits;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
