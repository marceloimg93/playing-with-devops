const express = require('express');

const app = new express();

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Hello World!!!! :)')
})

app.use('/', router);

app.listen(3000, () => {
    console.log('SERVER IS UP');
})