import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const SiteVisitsLast7Days = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartCanvas = chartRef.current;
    const ctx = chartCanvas.getContext('2d');

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
        datasets: [
          {
            label: 'Site Visits Last 7 Days',
            data: [100, 200, 150, 250, 300, 200, 350],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          title: {
            display: true,
            text: 'Site Visits Last 7 Days',
            font: {
              size: 24, // указываем размер шрифта
              weight: 'bold' // указываем жирность шрифта, если нужно
            },
            padding: {
              top: 10,
              bottom: 30
            },
            align: 'start'
          },
          legend: {
            display: false,
          },
        },
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default SiteVisitsLast7Days;
