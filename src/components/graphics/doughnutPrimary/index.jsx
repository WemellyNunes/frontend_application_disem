import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({ data }) => {
    const chartData = {
        labels: ['Corretiva', 'Preventiva'],
        datasets: [
            {
                label: 'Manutenções',
                data: [300, 200], // Substitua esses valores pelos dados da API no futuro
                backgroundColor: ['#4bc0c0', '#003366'], // Cores para Corretiva e Preventiva
                hoverBackgroundColor: ['#4bc0c0', '#003366'],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        cutout: '60%', // Faz a parte interna maior, criando o efeito de rosca
        plugins: {
            legend: {
                position: 'right',
            },
            title: {
                display: true,
                text: 'Tipo de manutenções abertas em (mês)',
            },
        },
    };

    return <Doughnut data={chartData} options={options} />
        
};

export default DoughnutChart;