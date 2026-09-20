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

## Firebase setup (required before auth/data will work)

1. Create a project at [console.firebase.google.com](https://console.firebase.google.com)
2. **Build → Authentication → Get started → Email/Password → Enable**
3. **Build → Firestore Database → Create database → Start in test mode**
4. **Project settings → General → Your apps → Add app → Web** → copy the config values into `frontend/.env` (see `frontend/.env.example`)
5. **Project settings → Service accounts → Generate new private key** → save the downloaded JSON as `backend/serviceAccountKey.json` (already gitignored) and point `GOOGLE_APPLICATION_CREDENTIALS` at it in `backend/.env`

## Running locally

### Frontend
```
cd frontend
npm install
cp .env.example .env   # fill in your Firebase web config
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
