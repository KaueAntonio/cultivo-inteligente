
    function deslogar() {
        alert('Desconectado com sucesso!');
    }

    var context = document.getElementById("chart").getContext("2d");
    context.canvas.width = 1000;
    context.canvas.height = 300;

    var configuration = {
        type: 'line',
        data: {
            datasets: [{
                label: "Umidade",
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
                        labelString: 'Umidade'
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

    //setInterval(() => {
   //     get_data();
    //}, 1000);


    var context2 = document.getElementById("chart2").getContext("2d");
    context2.canvas.width = 1000;
    context2.canvas.height = 300;

    var configuration2 = {
        type: 'line',
        data: {
            datasets: [{
                label: "Temperatura",
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
                        labelString: 'Temperatura'
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
