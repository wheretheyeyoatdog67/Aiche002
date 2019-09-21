const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {console.log(`Starting server  a at ${port}`);
});
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));
