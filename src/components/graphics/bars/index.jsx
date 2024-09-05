import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraphic = ({ data }) => {
    const chartData = {
        labels: ['Classe A', 'Classe B', 'Classe C'],
        datasets: [
            {
                label: 'Número de OS',
                data: [26, 35, 30], // Substitua esses dados pela API quando necessário
                backgroundColor: ['#ff6384', '#4bc0c0', '#36a2eb'],
                borderColor: ['#ff6384', '#4bc0c0', '#36a2eb'],
                borderWidth: 1, // Corrigido "Width"
            },
        ],
    };

    const options = {
        indexAxis: 'y', // Gráfico de barras horizontal
        responsive: true,
        plugins: {
            legend: {
                display: false, // Oculta a legenda
            },
            title: {
                display: true,
                text: 'Classificação das OS para atender em (mês)',
            },
        },
        scales: { // Corrigido: deve estar fora de "plugins"
            x: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10, // Define o intervalo de marcação no eixo X
                },
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default BarGraphic;