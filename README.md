# RelaxMap

Веб-платформа для поиска и добавления мест отдыха с интерактивной картой, отзывами и личным профилем пользователя.

![Status](https://img.shields.io/badge/status-in%20development-3b82f6)
![Frontend](https://img.shields.io/badge/frontend-Next.js%2016-111827)
![Backend](https://img.shields.io/badge/backend-Express%205-065f46)
![Database](https://img.shields.io/badge/database-MongoDB-166534)

## О проекте

RelaxMap помогает пользователям находить интересные места, смотреть подробную информацию, оставлять отзывы и делиться собственными локациями.
Проект разделен на два независимых приложения:

- Frontend: Next.js + React + TypeScript
- Backend: Node.js + Express + MongoDB

## Основные возможности

- Регистрация и авторизация пользователей
- Автоматическое обновление сессии через refresh
- Просмотр списка локаций и карточек мест
- Добавление и редактирование локаций авторизованными пользователями
- Загрузка изображений для локаций
- Отзывы и рейтинги
- Интерактивные карты Google Maps
- Профиль пользователя и редактирование данных

## Технологии

Frontend:

- Next.js 16
- React 19
- TypeScript
- TanStack Query
- Zustand
- Axios
- Formik + Yup
- Google Maps API

Backend:

- Node.js
- Express 5
- MongoDB + Mongoose
- Celebrate для валидации
- Cookie Parser, CORS, Helmet
- Multer для загрузки файлов
- Cloudinary для хранения изображений

## Структура

RelaxMap
├── frontend
│ ├── app
│ ├── components
│ ├── lib
│ └── store
└── backend
├── src
│ ├── controllers
│ ├── services
│ ├── routes
│ ├── models
│ ├── middleware
│ └── validations
└── public

## Быстрый старт

1. Установите зависимости:

- перейти в backend и выполнить npm install
- перейти в frontend и выполнить npm install

2. Создайте переменные окружения.

Backend .env:

- PORT=5000
- MONGO_URL=ваша строка подключения MongoDB
- NODE_ENV=development
- CLOUDINARY_CLOUD_NAME=значение
- CLOUDINARY_API_KEY=значение
- CLOUDINARY_API_SECRET=значение

Frontend .env.local:

- API_URL=http://localhost:5000
- NEXT_PUBLIC_API_URL=http://localhost:5000
- NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=ваш ключ

3. Запустите проект в двух терминалах:

- backend: npm run dev
- frontend: npm run dev

После запуска:

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Скрипты

Frontend:

- npm run dev
- npm run build
- npm run start
- npm run lint

Backend:

- npm run dev
- npm start

## API (основные группы)

- Auth: register, login, refresh, logout
- Locations: список, детали, создание, редактирование
- Feedbacks: получение и создание отзывов
- Categories: регионы и типы локаций
- Users: текущий пользователь, профиль, локации пользователя

## Карты

В проекте реализованы:

- Ввод адреса с автодополнением через Google Places
- Выбор точки на интерактивной карте
- Отображение координат в карточке локации

## Планы развития

- Контейнеризация через Docker
- Автотесты для frontend и backend
- CI/CD pipeline
- Избранное и персональные подборки
- Роли и модерация контента

## Автор

Oleksandr Protchenko

## Лицензия

Проект используется в учебных и портфолио-целях.
