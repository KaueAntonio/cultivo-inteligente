var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function(req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function(req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function(req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function(req, res) {
    usuarioController.entrar(req, res);
});

router.post("/inserir_dados", function(req, res) {
    usuarioController.inserir_dados(req, res);
});
  
router.post("/inserir_dados_cultivo", function(req, res) {
    usuarioController.inserir_dados_cultivo(req, res);
});
module.exports = router;