const express = require('express');
const router = express.Router();
const nodecache = require('node-cache');

const cache = new nodecache({stdTTL: 60})

const Countries = require('./../../models/countries')

router.get('/', function (req, res) {

    const key = 'countries';
    if (cache.has(key)) {
        console.log('Fetching data from the Node Cache');
        res.json(cache.get(key));
    }else {
        console.log('Fetching external countries');
        return Countries.getCountries((error, items) => {
            if (error) {
                return res.status(500).json({ code: 'UE', message: 'Unknown Error!'}) 
            }
            const response = { code: 'OK', message: 'Successful', data: items};
            cache.set( key, response)
            res.json(response);
        })
    }
});

module.exports = router;