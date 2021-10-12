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

    
    function inicial(){
        window.location.href = 'quemsomos.html';
    }
    
    function inicial1(){
        window.location.href = 'quemsomos1.html';
    }

    function enviaremail() {
        alert("Sua mensagem foi enviada com sucesso!");
    }
    function deslogar(){
        alert('Desconectado com sucesso!');
    }



    function lucro() {
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
        <h3>Garantindo um lucro de <u>R$ ${ax_lucro_mes.toFixed(2)} por mês</u> em economia de água, sendo assim, você economiza <u>R$ ${ax_lucro_ano.toFixed(2) } por ano</u>.</h3>`);
    };


    var context = document.getElementById("chart").getContext("2d");
    context.canvas.width = 1000;
    context.canvas.height = 300;

    var configuration = {
        type: 'line',
        data: {
            datasets: [{
                label: "Umidade (%)",
                type: 'line',
                borderColor: ['#eb3a34'],
                backgroundColor: ['#eb3a3400']
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    distribution: 'series',
                    ticks: {
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Umidade (%)'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            animation: {
                duration: 0
            }
        }
    };

    var chart = new Chart(context, configuration);
    this.lastIndexTemp = 0;
    this.time = 0;

    function get_data() {

        var http = new XMLHttpRequest();
        http.open('GET', 'http://localhost:3000/api', false);
        http.send(null);

        var obj = JSON.parse(http.responseText);
        if (obj.data.length == 0) {
            return;
        }

        

        var _lastIndexTemp = this.lastIndexTemp;
        this.lastIndexTemp = obj.data.length;
        listTemp = obj.data.slice(_lastIndexTemp);

        listTemp.forEach(data => {
            if (chart.data.labels.length == 10 && chart.data.datasets[0].data.length == 10) {
                chart.data.labels.shift();
                chart.data.datasets[0].data.shift();
            }

            chart.data.labels.push(this.time++);
            chart.data.datasets[0].data.push(parseFloat(data[0]));
            chart.update();
        });

        document.getElementById('average').textContent = obj.average;

        
        listTemp.forEach(data => {
            if (chart2.data.labels.length == 10 && chart2.data.datasets[0].data.length == 10) {
                chart2.data.labels.shift();
                chart2.data.datasets[0].data.shift();
            }

            chart2.data.labels.push(this.time++);
            chart2.data.datasets[0].data.push(parseFloat(data[1]));
            chart2.update();
            
        });

        document.getElementById('average2').textContent = obj.average2;
    }

    setInterval(() => {
        get_data();
    }, 1000);


    var context2 = document.getElementById("chart2").getContext("2d");
    context2.canvas.width = 1000;
    context2.canvas.height = 300;

    var configuration2 = {
        type: 'line',
        data: {
            datasets: [{
                label: "Temperatura (°C)",
                type: 'line',
                borderColor: ['#34baeb'],
                backgroundColor: ['#34baeb00']
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    distribution: 'series',
                    ticks: {
                        beginAtZero: true
                    }
                }],
                yAxes: [{
                    scaleLabel: {
                        display: true,
                        labelString: 'Temperatura (°C)'
                    },
                    ticks: {
                        beginAtZero: true
                    }
                }]
            },
            animation: {
                duration: 0
            }
        }
    };

    var chart2 = new Chart(context2, configuration2);
