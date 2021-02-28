import { galleryRef } from './refs';

export default function infinityScroll(data) {
  const onEntry = entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        data();
        observer.unobserve(galleryRef.lastElementChild);
      }
    });
  };

  const observer = new IntersectionObserver(onEntry, {
    rootMargin: '100px',
  });

  observer.observe(galleryRef.lastElementChild);
}