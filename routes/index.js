const express = require('express');

const router = express.Router();
router.post('/user', (req, res, next) => {
    if (!req.body.firstName){
        res.status(400).json('you need to pass a firsName');
        return;
    }
    res.sendStatus(201);
});

router.get('/user', function(req, res) {
    res.status(200).json({ firstName: 'john' });
});


module.exports = router;
