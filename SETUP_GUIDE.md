# Bus Booking System - Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- MySQL Database
- npm or yarn

## Backend Setup

### 1. Install Dependencies
```bash
cd BACKEND
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the BACKEND folder:
```
DATABASE_URL="mysql://root:password@localhost:3306/bus_booking_system"
JWT_SECRET=your_secret_key_here
```

### 3. Setup Database
```bash
# Generate Prisma Client
npx prisma generate

# Run migrations
npx prisma migrate dev --name init

# (Optional) Seed database with sample data
npx prisma db seed
```

### 4. Start Backend Server
```bash
npm start
```
Server will run on `http://localhost:5000`

## Frontend Setup

### 1. Install Dependencies
```bash
cd FRONTEND/bus-booking-system
npm install
```

### 2. Configure Environment Variables
Create a `.env` file in the FRONTEND/bus-booking-system folder:
```
VITE_API_URL=http://localhost:5000/api
```

### 3. Start Development Server
```bash
npm run dev
```
Frontend will run on `http://localhost:3000`

## API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user

### Buses
- `GET /api/buses` - Get all available buses
- `GET /api/buses/:id` - Get specific bus details

### Bookings
- `POST /api/bookings` - Create a new booking
- `GET /api/bookings/:userId` - Get user bookings

## Database Schema

### User Model
- id (Primary Key)
- name
- email (Unique)
- password (hashed)
- role (default: passenger)

### Bus Model
- id (Primary Key)
- name
- route
- departure
- price

### Booking Model
- id (Primary Key)
- seatNumber
- status (default: booked)
- createdAt (timestamp)
- userId (Foreign Key)
- busId (Foreign Key)

## Troubleshooting

### 404 Errors
- Ensure backend server is running on port 5000
- Check that `VITE_API_URL` in frontend .env matches the backend URL
- Verify all API routes are properly configured

### Database Connection Errors
- Verify DATABASE_URL is correct
- Ensure MySQL service is running
- Check database credentials in .env

### CORS Issues
- CORS is enabled in backend - if issues persist, check backend server.js configuration

## Deployment

### Build Frontend
```bash
cd FRONTEND/bus-booking-system
npm run build
```
Output will be in `dist/` folder

### Deploy to GitHub
```bash
git add .
git commit -m "Your message"
git push origin main
```

## Notes
- The backend uses Prisma ORM for database management
- Frontend is built with React + Vite + Tailwind CSS
- Authentication uses JWT tokens
- All sensitive data should be in `.env` files (never commit them)
