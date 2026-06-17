# RelaxMap

A web platform for discovering and adding leisure places with an interactive map, reviews, and a personal user profile.

![Status](https://img.shields.io/badge/status-in%20development-3b82f6)
![Frontend](https://img.shields.io/badge/frontend-Next.js%2016-111827)
![Backend](https://img.shields.io/badge/backend-Express%205-065f46)
![Database](https://img.shields.io/badge/database-MongoDB-166534)

## About The Project

RelaxMap helps users find interesting places, view detailed information, leave reviews, and share their own locations.
The project is split into two independent applications:

- Frontend: Next.js + React + TypeScript
- Backend: Node.js + Express + MongoDB

## Key Features

- User registration and authentication
- Automatic session refresh flow
- Browse locations list and detailed place pages
- Add and edit locations for authenticated users
- Image upload for locations
- Reviews and ratings
- Interactive Google Maps integration
- User profile and profile editing

## Tech Stack

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
- Celebrate for request validation
- Cookie Parser, CORS, Helmet
- Multer for file uploads
- Cloudinary for image storage

## Project Structure

```text
RelaxMap
|-- frontend
|   |-- app
|   |-- components
|   |-- lib
|   `-- store
`-- backend
	|-- src
	|   |-- controllers
	|   |-- services
	|   |-- routes
	|   |-- models
	|   |-- middleware
	|   `-- validations
	`-- public
```

## Quick Start

1. Install dependencies:

- go to backend and run npm install
- go to frontend and run npm install

2. Create environment variable files.

Backend .env:

- PORT=5000
- MONGO_URL=your MongoDB connection string
- NODE_ENV=development
- CLOUDINARY_CLOUD_NAME=value
- CLOUDINARY_API_KEY=value
- CLOUDINARY_API_SECRET=value

Frontend .env.local:

- API_URL=http://localhost:5000
- NEXT_PUBLIC_API_URL=http://localhost:5000
- NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your key

3. Run the project in two terminals:

- backend: npm run dev
- frontend: npm run dev

After startup:

- Frontend: http://localhost:3000
- Backend: http://localhost:5000

## Scripts

Frontend:

- npm run dev
- npm run build
- npm run start
- npm run lint

Backend:

- npm run dev
- npm start

## API (Main Groups)

- Auth: register, login, refresh, logout
- Locations: list, details, create, update
- Feedbacks: get and create reviews
- Categories: regions and location types
- Users: current user, profile, user locations

## Maps

Implemented in the project:

- Address input with Google Places autocomplete
- Point selection on an interactive map
- Coordinate rendering in location details

## Roadmap

- Docker containerization
- Automated tests for frontend and backend
- CI/CD pipeline
- Favorites and personalized collections
- Roles and content moderation

## Author

Oleksandr Protchenko

## License

This project is used for learning and portfolio purposes.
