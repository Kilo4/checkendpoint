const app = require('./app.js');
const https = require("https");

app.get('/', (req, res) => {
    res.status(200).json({ name: 'john' });
});

app.listen(8080, () => console.log('server listening on port 8080'));
