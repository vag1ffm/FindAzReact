import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const SalesLast7Days = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');

      chartInstance.current = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
          datasets: [
            {
              label: 'Sales last 7 days',
              data: [12, 50, 3, 5, 30, 3, 7],
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
              text: 'For 7 days',
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
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return   (   
      <>
      <div className='col-9'>
        <canvas  ref={chartContainer}/>
      </div>
      </>
   
    ) 
};

export default SalesLast7Days;
