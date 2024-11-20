const datos = {
    1: {
        barras: [
            { x: 'A', y: 30 },
            { x: 'B', y: 20 },
            { x: 'C', y: 50 }
        ],
        donut: [30, 20, 50]
    },
    2: {
        barras: [
            { x: 'X', y: 15 },
            { x: 'Y', y: 45 },
            { x: 'Z', y: 25 }
        ],
        donut: [15, 45, 25]
    }
};


const opcionesBarras = {  //opciones de barras
    chart: {
        type: 'bar'
    },
    series: [{ data: datos[1].barras }],
    xaxis: {
        title: {
            text: 'categorias'
        }
    },
    title: {
        text: 'grafico de Barras'
    }
};


const opcionesDonut = { //opciones de donut
    chart: {
        type: 'donut'
    },
    series: datos[1].donut,
    labels: ['A', 'B', 'C'],
    title: {
        text: 'grafico Donut'
    }
};

const barras = new ApexCharts(document.querySelector("#barrasGrafico"), opcionesBarras);// Crear las instancias de los gráficos

const donut = new ApexCharts(document.querySelector("#donutGrafico"), opcionesDonut);


barras.render();// Renderizar los gráficos
donut.render();


document.getElementById("dataSelector").addEventListener("change", function (event) {// Cambiar los datos al seleccionar otra opción
    const selectedDataset = datos[event.target.value];

    barras.updateSeries([{ data: selectedDataset.barras }]); //actualiza barras y donut
    donut.updateSeries(selectedDataset.donut);
});
