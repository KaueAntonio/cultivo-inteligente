const express = require('express');
const { ArduinoDataTemp } = require('./newserial')
const router = express.Router();


router.get('/', (request, response, next) => {

    let sum = ArduinoDataTemp.List.reduce((a, b) => a + b);
    let total = ArduinoDataTemp.List.length;
    let average = (sum / total).toFixed(2);

    response.json({
        data: ArduinoDataTemp.List,
        total: ArduinoDataTemp.List.length,
        average: isNaN(average) ? 0 : average,
    });

});

module.exports = router;