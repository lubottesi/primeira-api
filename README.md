# Primeira API

A minimal Express API with a single route: `GET /` returns the current date, time and a status message as JSON (formatted for pt-BR). It was my first API and the backend used in [api-com-frontend](https://github.com/lubottesi/api-com-frontend).

## Stack

- Node.js
- Express 5
- CORS

## Running locally

```bash
npm install
npm start
```

Then go to http://localhost:3001. Example response:

```json
{ "date": "23/09/2026", "time": "14:05:37", "status": "API funcionando!" }
```
