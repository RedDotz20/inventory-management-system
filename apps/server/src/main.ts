import app from './app';
import config from './config';
import createTables from './models/_index';
import userAuth from './services/userAuthService';

app.listen(config.server.port, async () => {
  await createTables()
    .then(() => userAuth.createAdmin(config.server.hostname))
    .catch((err) => console.error(err));
  console.log(
    `[ ready ] http://${config.server.hostname}:${config.server.port}`
  );
});

// import express from 'express';
// const host = process.env.HOST ?? 'localhost';
// const port = process.env.PORT ? Number(process.env.PORT) : 3000;
// const app = express();
