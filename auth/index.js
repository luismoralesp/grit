require('dotenv').config();
const app = require('./src/app')({
  config: { databaseURI: process.env.DATABASE_URL }
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
