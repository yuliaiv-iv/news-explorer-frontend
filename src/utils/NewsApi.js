import { today, pastDay } from '../utils/configs';

const pageSize = 100;
const apiKey = '430c64bcf2844fd7baf88c23a335f5a4';
const baseURL = 'https://nomoreparties.co/news/v2/';

export const searchArticles = (keyword) => {
  return fetch(`${baseURL}everything?q=${keyword}&from=${today.toISOString()}&to=${pastDay.toISOString()}&pageSize=${pageSize}&apiKey=${apiKey}`)
    .then((res) => {
      if (res.ok) {
        return res.json()
      }
      return Promise.reject(`Что-то пошло не так: ${res.status}`);
    })
    .then((data) => {
      return data.articles
    })
}

// 1d4fbc859c2e4366b37f69d873101c1f