'use client';
import React, { useEffect, useRef, useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ChartOptions,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function EmotionChart() {
    const chartRef = useRef(null);
    const [chartData, setChartData] = useState({
        labels: new Array(100).fill(''),
        datasets: [
            {
                data: new Array(100).fill(10),
                borderColor: 'rgb(75, 192, 192)',
                borderWidth: 2,
                pointRadius: 0,
                tension: 0.4,
            },
        ],
    });

    const targetValue = useRef(10);

    const getColor = (value: any) => {
        // Color palette from calm (low values) to intense (high values)
        const colors = [
            'rgb(255, 45, 85)', // Neon red
            'rgb(255, 126, 0)', // Neon orange
            'rgb(255, 220, 0)', // Neon yellow
            'rgb(50, 255, 126)', // Neon green
            'rgb(88, 186, 255)', // Neon blue
        ];
        const index = Math.min(Math.floor(value / 4), colors.length - 1);
        return colors[index];
    };

    const options: ChartOptions<'line'> = {
        responsive: true,
        animation: {
            duration: 0,
        },
        scales: {
            x: { display: false },
            y: {
                display: false,
                min: 0,
                max: 20,
            },
        },
        plugins: {
            legend: { display: false },
        },
        maintainAspectRatio: false,
    };

    useEffect(() => {
        const updateChart = () => {
            if (Math.random() < 0.05) {
                targetValue.current = Math.random() * 20;
            }

            setChartData((prevState: any) => {
                const newData = [...prevState.datasets[0].data];
                newData.push(
                    newData[newData.length - 1] * 0.9 +
                        targetValue.current * 0.1
                );
                newData.shift();

                return {
                    ...prevState,
                    datasets: [
                        {
                            ...prevState.datasets[0],
                            data: newData,
                            borderColor: newData.map(getColor),
                            segment: {
                                borderColor: (ctx: any) =>
                                    getColor(ctx.p1.parsed.y),
                            },
                        },
                    ],
                };
            });
        };

        const intervalId = setInterval(updateChart, 50);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={{ width: '100%', height: '300px' }}>
            <Line ref={chartRef} data={chartData} options={options} />
        </div>
    );
}

export default EmotionChart;
