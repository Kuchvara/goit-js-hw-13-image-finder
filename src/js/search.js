import { formRef, inputRef, galleryRef } from './refs';
import debounce from 'lodash/debounce';
import apiService from './apiService';
import createGallery from './galleryCreate';
import infinityScroll from './infinityScroll';
import alert from './Pnotify';

inputRef.addEventListener('input', debounce(searchFormInput, 1000));
formRef.addEventListener('submit', event => {
  event.preventDefault();
});

function searchFormInput(event) {
  apiService.query = event.target.value;

  if (apiService.query === '') {
    clearGallery();
    
    return alert({
      type: 'info',
      text: 'Type the request',
      delay: 2000,
      width: '300px',
      maxTextHeight: null,
    });
  }

  clearGallery();
  apiService.resetPage();
  fetchGallery();
}

async function fetchGallery() {

  try {
    const images = await apiService.fetchImages();

    if (images.total === 0) {
        return alert({
        type: 'notice',
        text: 'Not found',
        delay: 1000,
        width: '300px',
        maxTextHeight: null,
      });
    }

    createGallery(images);

    if (images.hits.length > 0) {
      infinityScroll(fetchGallery);
    }

  } catch (error) {
    console.log('Wrong  request');
  }
}

function clearGallery() {
  galleryRef.innerHTML = '';
}

console.log(galleryRef);