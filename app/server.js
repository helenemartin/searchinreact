const express = require('express');
const rp = require('request-promise');
const app = express();

app.get('/movies/', (req, res) => {
    const searchTerm = req.query.searchTerm;
    res.setHeader("Access-Control-Allow-Origin", "*");

    if (!searchTerm) {
        return res.status(500).json({"errorMessage": "Search string is empty or missing!"});
    }

    const requestUrl = `https://itunes.apple.com/search?entity=movie&term=${searchTerm}`;
    rp(requestUrl)
        .then(function (resultJson) {
            res.status(200).json(JSON.parse(resultJson))
        })
        .catch(function (err) {
            res.status(500).json({"errorMessage": err.reason || err})
        });
});

app.listen(8081, () => console.log('Server started on port 8081'));