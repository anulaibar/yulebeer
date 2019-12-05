# Yule Beer

A web app for beer ratings

### Install

Create db and install deps:
```
createdb yule_beer
npm i
```

### Quickstart

Start express:
```
npm start
```

Start dev server:
```
npm run dev
```

Start in production mode:
```
heroku local
```

### Scrape

Scrape systembolaget.se and populate local db:
```
npm run scrape
```

Populate production db:
```
NODE_ENV=production DATABASE_URL=$(heroku config:get DATABASE_URL) node scrape.js
```

### Db

Connect to local db:
```
psql yule_beer
```
