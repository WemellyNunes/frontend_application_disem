import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutSystem = ({ data }) => {
    const chartData = {
        labels: ['Civil', 'Estrutural', 'Sanitário', 'Pluvial', 'Hidráulico', 'Elétrico'],
        datasets: [
            {
                label: 'Manutenções',
                data: [10, 15, 20, 25, 30, 40], // Substitiyir esses valores pelos dados da API no futuro
                backgroundColor: [
                    '#667eea', // Civil
                    '#2b6cb0', // Estrutural
                    '#3182ce', // Sanitário
                    '#4299e1', // Pluvial
                    '#63b3ed', // Hidráulico
                    '#2a4365', // Elétrico
                ],
                hoverBackgroundColor: [
                    '#667eea',
                    '#2b6cb0',
                    '#3182ce',
                    '#4299e1',
                    '#63b3ed',
                    '#2a4365',
                ],
                borderWidth: 2,
            },
        ],
    };

    const options = {
        responsive: true,
        cutout: '70%', // Faz o efeito de rosca mais pronunciado
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Manutenções abertas por tipo de sistema',
            },
            tooltip: {
                callbacks: {
                    label: (tooltipItem) => {
                        return `${tooltipItem.label}: ${tooltipItem.raw}%`; // Exibe % no tooltip
                    },
                },
            },
        },
    };

    return <Doughnut data={chartData} options={options} />
    
};

export default DoughnutSystem;