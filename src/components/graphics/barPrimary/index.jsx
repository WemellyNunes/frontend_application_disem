import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarGraphic = ({ data }) => {
    const chartData = {
        labels: ['Classe A', 'Classe B', 'Classe C'],
        datasets: [
            {
                label: 'Número de OS',
                data: [26, 35, 30], 
                backgroundColor: ['#667eea', '#4bc0c0', '#36a2eb'],
                borderWidth: 0, 
            },
        ],
    };

    const options = {
        indexAxis: 'y', 
        responsive: true,
        plugins: {
            legend: {
                display: false, 
            },
            title: {
                display: true,
                text: 'Classificação das OS para atender em (mês)',
            },
        },
        scales: { 
            x: {
                beginAtZero: true,
                ticks: {
                    stepSize: 10, 
                },
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default BarGraphic;