    var usu = '&';
    var sen = '&';
    var ema = '&';
    var usu_geral = 'weegrowffee';
    var sen_geral = 'cafe123';



    function cadastrar() {
        usu = cadastro_usuario.value;
        sen = cadastro_senha.value;
        ema = cadastro_email.value;
        tela_login.style.display = 'block';
        tela_cadastro.style.display = 'none';
        alert('Cadastrado! Faça o login para continuar');
    }
    
    function mudarcadastro() {
        tela_login.style.display = 'none';
        tela_cadastro.style.display = 'block';
    }
    
    function mudarlogin() {
        tela_login.style.display = 'block';
        tela_cadastro.style.display = 'none';
    }
    
    
    function entrarlogin() {
        var x = login_usuario.value;
        var z = login_senha.value;
        if (usu == x && sen == z){
            alert("Logado com sucesso!");
            window.location.href = 'bancodedados.html';
        }else{
            if (usu_geral == x && sen_geral == z){
                alert("Logado com sucesso!");
                window.location.href = 'bancodedados.html';
            }else{
                alert('Usuário ou Senha Incorretos!');
            }
        }

    }

    