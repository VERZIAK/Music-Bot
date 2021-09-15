const express = require('express');
const app = express();
const port = 2323;
app.get('/', (req, res) => res.send('ZYJE!'));

app.listen(port, () => console.log(`Is listening to http://localhost:${port}`));