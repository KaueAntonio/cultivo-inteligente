

function mudarcadastro() {
    tela_login.style.display = 'none';
    tela_cadastro.style.display = 'block';
}

function mudarlogin() {
    tela_login.style.display = 'block';
    tela_cadastro.style.display = 'none';
}




function inicial() {
    window.location.href = 'WeGrowffee.html';
}

function inicial1() {
    window.location.href = 'WeGrowffee1.html';
}


function deslogar() {
    alert('Desconectado com sucesso!');
}




function enviaremail() {
    var vemail = email.value;
    var vas = assunto.value;
    var vnome = nome.value;
    var vmsg = mensagem.value;
    
    if (vnome.length == 0) {
        alert('Nome incorreto');
    }

    if (vas.length < 10) {
        alert('Defina um assunto maior');
    }

    if (vmsg.length < 15) {
        alert('Mensagem muito pequena!');
    }

    if (vemail.indexOf('@') == -1 || vemail.length < 8 || vemail.indexOf('.') == -1) {
        alert('Email Inválido!');
    }

    if (nome.value.length > 0){
        if (assunto.value.length >= 10) {
            if (mensagem.value.length >= 15) {
                if (vemail.indexOf('@') != -1 && vemail.length >= 8 && vemail.indexOf('.') != -1) {
                    alert("Sua mensagem foi enviada com sucesso! A Wegrowffee agradece o contato!");
                    window.location.href = 'WeGrowffee.html';
                }
            }
        }
    }
   
}



function enviaremail1() {
    var vema = email.value;
    var vas = assunto.value;
    var vnome = nome.value;
    var vmsg = mensagem.value;
    
    if (vnome.length == 0) {
        alert('Nome incorreto');
    }

    if (vas.length < 10) {
        alert('Defina um assunto maior');
    }

    if (vmsg.length < 15) {
        alert('Mensagem muito pequena!');
    }

    if (vema.indexOf('@') == -1 || vema.length < 8 || vema.indexOf('.') == -1) {
        alert('Email Inválido!');
    }

    if (nome.value.length > 0){
        if (assunto.value.length >= 10) {
            if (mensagem.value.length >= 15) {
                if (vema.indexOf('@') != -1 && vema.length >= 8 && vema.indexOf('.') !=  -1) {
                    alert("Sua mensagem foi enviada com sucesso! A Wegrowffee agradece o contato!");
                    window.location.href = 'WeGrowffee1.html';
                }
            }
        }
    }
   
}




function lucro(){
    if (hectares.value <= 0){
        alert ('Digite um valor de hecare válido');
    }

    if (valor_cubico.value <= 0){
        alert ('Digite um valor de metro cúbico válido');
    }

    if (hectares.value > 0){
        if (valor_cubico.value > 0){
            lucro2();
        }else{
            alert('Ocorreu um erro, tente novamente!');
        }
    }
}




function lucro2() {
    var ax_qtd_plantas = hectares.value * 7000; // média de 7000 plantas por hectare

    var ax_vlr_agua1 = ax_qtd_plantas * 232.5; //quantidade de plantas vezes o consumo mensal SEM gotejamento (7,5L * 31 dias)
    var ax_agua1m3 = ax_vlr_agua1 / 1000; // litros transformados em volume (cúbico)
    var ax_vlr_total1 = ax_agua1m3 * valor_cubico.value; // volume vezes a taxa por m³

    var ax_vlr_agua2 = ax_qtd_plantas * 155; //quantidade de plantas vezes o consumo mensal COM gotejamento (5L * 31 dias)
    var ax_agua2m3 = ax_vlr_agua2 / 1000; // litros transformados em volume (cúbico)
    var ax_vlr_total2 = ax_agua2m3 * valor_cubico.value; //volume vezes a taxa por m³

    var ax_lucro_mes = ax_vlr_total1 - ax_vlr_total2; //diferença do valor gasto por mês sem/com gotejamento
    var ax_lucro_ano = ax_lucro_mes * 12; //diferença mensal transformada em diferença anual

    div_msg.style.display = 'block';

    div_msg.innerHTML = (
        `<br>Por <u>mês</u>, sua plantação consome ${ax_agua1m3.toFixed(2)}m³ o equivalente a <b>R$ ${ax_vlr_total1.toFixed(2)}</b><br><br>
        Usando <u>nosso sistema</u> você consome ${ax_agua2m3.toFixed(2)}m³ o equivalente a <b>R$ ${ax_vlr_total2.toFixed(2)}</b>
        <h3>Garantindo um lucro de <u>R$ ${ax_lucro_mes.toFixed(2)} por mês</u> em economia de água, sendo assim, você economiza <u>R$ ${ax_lucro_ano.toFixed(2)} por ano</u>.</h3>`);
};

function inicio(){
    window.location.href = 'WeGrowffee.html';
}

function inicio1(){
    window.location.href = 'WeGrowffee1.html';
}

