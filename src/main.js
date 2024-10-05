import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchImages } from './js/pixabay-api.js';
import { refreshGallery, renderGallery } from './js/render-functions.js';

const form = document.querySelector('.search-form');
const userInput = document.querySelector('.search-form-input');
const loader = document.querySelector('.loader');

form.addEventListener('submit', async function (event) {
  event.preventDefault();
  const searchTerm = userInput.value.trim();

  if (searchTerm === '') {
    iziToast.error({
      title: 'Error',
      message: 'Please enter a search term.',
      position: 'topRight',
      backgroundColor: '#EF4040',
      messageColor: '#FFF',
      titleColor: '#FFF',
      iconColor: '#FFF',
      timeout: 5000,
    });
    return;
  }

  userInput.value = '';
  loader.style.display = 'block';

  refreshGallery();

  try {
    const images = await fetchImages(searchTerm);

    if (images.length === 0) {
      iziToast.info({
        title: 'Info',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        backgroundColor: '#EF4040',
        messageColor: '#FFF',
        titleColor: '#FFF',
        iconColor: '#FFF',
        timeout: 6000,
      });
    } else {
      renderGallery(images);
    }
  } catch (error) {
    loader.style.display = 'none';
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
      position: 'topRight',
      backgroundColor: '#EF4040',
      messageColor: '#FFF',
      titleColor: '#FFF',
      iconColor: '#FFF',
      timeout: 6000,
    });
    console.error('Error fetching images:', error);
  }
  loader.style.display = 'none';
});
