import galleryTpl from '../templates/imageCard.hbs';
import { galleryRef } from './refs';

function createGallery(data) {
  const markup = galleryTpl(data);

  galleryRef.insertAdjacentHTML('beforeend', markup);
}

export default createGallery;