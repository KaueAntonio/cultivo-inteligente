const express = require("express");
const app = express();
const handlebars = require("express-handlebars");
const bodyParser = require("body-parser");
const cadastro = require("./models/Cadastro");


app.engine('handlebars', handlebars({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Rotas
app.get('/cadastro', function(req, res){
    res.render('cadastro');
});

app.get('/cadastro', function(req, res){
    res.render('cadastro');
});

 app.post('/add-cadastro', function(req, res){
    cadastro.create({
        usuario: req.body.usuario,
        senha: req.body.senha,
        email: req.body.email
    }).then(function(){
        res.redirect('/cadastro')
        res.send("cadastro realizado com sucesso!")
    }).catch(function(erro){
        res.send("Erro: cadastro não foi realizado com sucesso!" + erro)
    })

}) 

app.listen(3000);