const express = require('express');
const { ArduinoDataTemp } = require('./newserial')
const router = express.Router();

router.get('/', (request, response, next) => {

    

    response.json({
        data: ArduinoDataTemp.List,
    });

});

module.exports = router;