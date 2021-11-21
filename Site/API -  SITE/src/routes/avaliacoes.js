var express = require("express");
var router = express.Router();

var avaliacaoController = require("../controllers/avaliacaoController");

router.get("/listar", function(req, res) {
    avaliacaoController.listar(req, res);
});

module.exports = router;