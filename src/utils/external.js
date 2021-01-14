import { FaceBook, GitHub } from '../images';

export const external = [
  {
    id: 1,
    source: 'Главная',
    link: '/',
    external: false,
    social: false
  },
  {
    id: 2,
    source: 'Яндекс.Практикум',
    link: 'https://praktikum.yandex.ru',
    external: true,
    social: false
  },
  {
    id: 3,
    source: <GitHub />,
    link: 'https://github.com/yuliaiv-iv',
    external: true,
    social: true
  },
  {
    id: 4,
    source: <FaceBook />,
    link: 'https://praktikum.yandex.ru',
    external: true,
    social: true
  },
]