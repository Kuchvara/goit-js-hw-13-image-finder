import axios from 'axios';

const url = 'https://pixabay.com/api/';
const key = '20453006-0e0077c0f95e4ae00473fdd9d';

export default {
  searchQuery: '',
  page: 1,
  perOnePage: 12,
  async fetchImages() {
    const { data } = await axios.get(
      `${url}?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perOnePage}&key=${key}`,
    );

    this.incrementPage();

    return data;
  },

  incrementPage() {
    this.page += 1;
  },

  resetPage() {
    this.page = 1;
  },

  get query() {
    return this.searchQuery;
  },

  set query(value) {
    this.searchQuery = value;
  },
};