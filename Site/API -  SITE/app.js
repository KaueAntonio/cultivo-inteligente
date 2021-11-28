process.env.AMBIENTE_PROCESSO = "producao";
var express = require("express");
var cors = require("cors");
var path = require("path");
var PORTA = 3025;

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var avisosRouter = require("./src/routes/avisos");
var medidasRouter = require("./src/routes/medidas");
var avaliacaoRouter = require("./src/routes/avaliacoes");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/avisos", avisosRouter);
app.use("/medidas", medidasRouter)
app.use("/avaliacoes", avaliacaoRouter)

app.listen(PORTA, function() {
    console.log(`Servidor Aberto! Porta ${PORTA}`);
});