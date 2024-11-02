
   
        const dataSets = {
            1: [10, 20, 30, 40, 50],
            2: [25, 15, 35, 45, 55]
        };

        const barrasChartOptions = {
            chart: { type: 'bar', height: 350 },
            series: [{ name: 'Valores', data: dataSets[1] }],
            xaxis: { categories: ['A', 'B', 'C', 'D', 'E'] }
        };
        
        const donutChartOptions = {
            chart: { type: 'donut', height: 350 },
            series: dataSets[1],
            labels: ['A', 'B', 'C', 'D', 'E']
        };

    
        const barrasChart = new ApexCharts(document.querySelector("#barrasChart"), barrasChartOptions);
        const donutChart = new ApexCharts(document.querySelector("#donutChart"), donutChartOptions);
        barrasChart.render();
        donutChart.render();

     
        document.getElementById('dataSelector').addEventListener('change', (e) => {
            const selectedData = dataSets[e.target.value];
            barrasChart.updateSeries([{ data: selectedData }]);
            donutChart.updateSeries(selectedData);
        });
