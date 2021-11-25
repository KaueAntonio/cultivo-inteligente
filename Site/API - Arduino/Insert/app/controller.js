const express = require("express");
const { ArduinoDataTemp } = require("./newserial");
const db = require("./database");
const router = express.Router();

router.get("/", (request, response, next) => {
  //let sum = ArduinoDataTemp.List.reduce((a, b) => a + b, 0);
  //let average = (sum / ArduinoDataTemp.List.length).toFixed(2);

  response.json({
    data: ArduinoDataTemp.List,
  });

  response.json(ArduinoDataTemp.List);
});

router.post("/sendData", (request, response) => {
  var fk = 1000;
  var umidade = ArduinoDataTemp.List[0].data;
  var temperaturadht = ArduinoDataTemp.List[1].data;
  var sql =
    "INSERT INTO dadosSensor (umi, temp, dia, mes, ano, hora, fkSensor) VALUES (?, ?, ?, ?, ? , ?, ?);";
  let data2 = new Date();
  db.query(
    sql,
    [
      umidade[umidade.length - 1],
      temperaturadht[temperaturadht.length - 1],
      data2.getDate(),
      data2.getMonth() + 1,
      data2.getFullYear(),
      data2.getHours(),
      fk,
    ],
    function (err, result) {
      if (err) throw err;
      console.log(
        "DADOS INSERIDOS COM SUCESSO -- LINHAS AFETADAS: " + result.affectedRows
      );
    }
  );

  response.sendStatus(200);
});

module.exports = router;
