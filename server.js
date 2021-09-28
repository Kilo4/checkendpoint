const app = require('./app.js');

app.get('/', (req, res) => {
    res.status(200).json({ name: 'john' }).send();
});

