import express from 'express';
import fs from 'fs';
import path from 'path';
import https from 'https';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.route('/ping').get((req, res) => {
  return res.send("pong");
});

const httpsServer = https.createServer({
  passphrase: "password",
  pfx: fs.readFileSync(path.resolve(__dirname, '../certs/Cert.p12')),
}, app);

httpsServer
 .listen(3000, () => {
    console.log('Server listening on port 3000. URL: https://localhost:3000/ping');
  });
  