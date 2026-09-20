# FitFlow Redesign

Redesigned fitness tracking app: AI-powered personalized workout plans, private social circles, and camera-based nutrition tracking.

## Stack

| Layer | Technology |
|---|---|
| Frontend (mobile) | React Native (Expo) + TypeScript |
| Backend (API gateway) | Node.js + Express + TypeScript |
| AI microservice | Python + FastAPI |
| Database / Auth / Realtime | Firebase (Firestore + Auth) |

## Structure

```
frontend/    Expo React Native app
backend/     Express API gateway (talks to Firestore + proxies to ai-service)
ai-service/  FastAPI service for workout plan generation & nutrition image recognition
```

## Running locally

### Frontend
```
cd frontend
npm install
npx expo start
```

### Backend
```
cd backend
npm install
npm run dev
```

### AI service
```
cd ai-service
python -m venv .venv
.venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload --port 8000
```
