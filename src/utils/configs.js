export const today = new Date()
export const pastDay = new Date(today)
pastDay.setDate(pastDay.getDate() - 7)

const options = {
  month: 'long',
  day: 'numeric',
}

export const convertDate = (newsDate) => {
  const publishDate = new Date(newsDate);
  const convertDate = publishDate.toLocaleString('ru', options)
  const year = publishDate.getFullYear();
  const cardDate = `${convertDate}, ${year}`
  return cardDate
};

export const CONFLICT_ERROR = 'Пользователь с таким email уже существует';
export const UNAUTH_ERROR = 'Неправильная почта или пароль';

