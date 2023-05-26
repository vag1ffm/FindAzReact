import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const SalesLast30Days = () => {
  const chartRef = useRef(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const salesData = [
      250, 350, 450, 550, 600, 700, 800, 900, 1000, 1200,
      1400, 1600, 1800, 2000, 2200, 2400, 2600, 2800, 3000, 3200,
      3400, 3600, 3800, 4000, 4200, 4400, 4600, 4800, 5000, 5200
    ];

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: Array.from({ length: 30 }, (_, i) => i + 1),
        datasets: [{
          label: 'Sales in the last 30 days',
          data: salesData,
          borderColor: 'rgba(255, 99, 132, 1)',
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          tension: 0.2
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        },
        plugins: {
          title: {
            display: true,
            text: 'For 30 days',
            font: {
              size: 30, // указываем размер шрифта
              weight: 'bold' // указываем жирность шрифта, если нужно
            },
            padding: {
                top: 10,
                bottom: 30
            },
            align: 'start'
        },
          legend: {
            display: false
          }
        }
      }
    });

    return () => {
      chart.destroy();
    }
  }, []);

  return (
    <div className='col-9'>
      <canvas  ref={chartRef}></canvas>
    </div>
  );
};

export default SalesLast30Days