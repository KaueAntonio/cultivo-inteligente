const express = require('express');
const { ArduinoDataTemp } = require('./newserial');
const db = require('./database')
const router = express.Router();


router.get('/', (request, response, next) => {
    
    
    //let sum = ArduinoDataTemp.List.reduce((a, b) => a + b, 0);
    //let average = (sum / ArduinoDataTemp.List.length).toFixed(2);


    response.json({
        data: ArduinoDataTemp.List,
    });

    response.json(ArduinoDataTemp.List);


});

router.post('/sendData', (request, response) => {

    var umidade  =  ArduinoDataTemp.List[0].data;
    var temperatura  =  ArduinoDataTemp.List[1].data;
    var sql = "INSERT INTO dados (temp, umi, dia, mes, ano, hora) VALUES (?, ?, ?, ?, ? ,?);";
    let data2 = new Date();
    db.query(sql, [umidade[0], temperatura[0], data2.getDate(), data2.getMonth() + 1, data2.getFullYear(), data2.getHours()] , function(err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
      });
      
    
    response.sendStatus(200);
})

module.exports = router;