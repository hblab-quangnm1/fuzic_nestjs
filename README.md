# fuzic-api

## Requirement

- NodeJS v20.7.0
- Mysql v8.2.0

## Getting started

## Step by step

### Run the app in terminal

1. Start a MySQL database server on your machine or in the cloud

2. Set the following environment variables in your .env file (see `.env.sample` for the full list)

```
# Database
DB_HOST=localhost
DB_PORT=3306
DB_USER=easy
DB_PASS='easy'
DB_NAME=fuzic

# JWT
JWT_SECRET=JWT_SECRET
JWT_EXPIRED_TIME=time

NODE_ENV=development
...
```

3. Run migrate

```
$ npx typeorm-ts-node-commonjs migration:run -d src/database/config.ts
```

4. Install packages and start the application server.

```
$ npm install
$ npm run dev
```

5. Default seed data

```
email: artist1@example.com
password: 123456aA@
role: artist
completeProfile: true

email: artist2@example.com
password: 123456aA@
role: artist
completeProfile: false

email: admin@example.com
password: 123456aA@
role: admin

email: creator@example.com
password: 123456aA@
role: creator
```
