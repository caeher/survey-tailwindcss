export function json(context) {
    return JSON.stringify(context);
}

export function link(...options) {
    options.pop();
    return options.join("/");
}

export function respuestas(respuestas) {
    return Object.fromEntries(respuestas.reduce((pre, current) => ((pre.set(current, pre.has(current) ? pre.get(current) + 1 : 1))), new Map));
}

export function chart(respuestas, type) {
    let labels = Object.keys(respuestas);
    let values = Object.values(respuestas);
    return {
        type: type,
        data: {
            labels: labels,
            datasets: [{
                label: 'Title',
                data: values,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        },
    }
}


export function random(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export function typeChart() {
    let val = ['bar', 'line', 'polarArea', 'radar'];
    return val[Math.floor(Math.random() * val.length)];
}

export function equalString(cad1, cad2) {
    return cad1 == cad2;
}