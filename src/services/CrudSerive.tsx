import api from './ApiService';

export const getProducts = (productName: String) => {
  return api.get(`/search/v2?q=${productName}`);
};
