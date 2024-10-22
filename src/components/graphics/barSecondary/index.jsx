import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const LocationBarChart = ({ data }) => {
    const chartData = {
        labels: [
            'Campus Marabá',
            'Campus Santana do Araguaia',
            'Campus Xinguara',
            'Campus São Felix do Xingu',
            'Campus Rondon do Pará'
        ],
        datasets: [
            {
                label: 'OS Abertas',
                data: [50, 30, 20, 40, 25], // Substitua esses valores pelos dados da API futuramente
                backgroundColor: ['#2F4858', '#33658A', '#86BBD8', '#F6AE2D', '#F26419'],
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
                text: 'OS abertas por localidade',
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

export default LocationBarChart;