# Student Attendance App

A full-stack mobile attendance management application built using React Native and Laravel.

---

# Features

- Teacher Login Screen
- Student Attendance Dashboard
- Mark Present / Absent
- Attendance History
- Search Students
- Live API Integration
- Cloud Database Support
- Mobile App using React Native + Expo

---

# Tech Stack

## Frontend
- React Native
- Expo
- Axios
- React Navigation

## Backend
- Laravel 13
- REST API

## Database
- MySQL

## Deployment
- Railway

## Tools
- VS Code
- Git
- GitHub

---

# API Base URL

```txt
https://student-attendance-app-production.up.railway.app/api
```

---

# API Endpoints

## Get Students

```http
GET /students
```

## Mark Attendance

```http
POST /attendance
```

## Get Attendance History

```http
GET /history
```

---

# Installation

## Backend

```bash
cd backend
composer install
php artisan migrate
php artisan db:seed
php artisan serve
```

## Mobile App

```bash
cd mobile
npm install
npx expo start
```

---

# Live Backend

```txt
https://student-attendance-app-production.up.railway.app/api/students
```

---

# Author

Surbhi Kandhway
