const ctx = document.getElementById('myChart').getContext('2d');
ctx.canvas.parentNode.style.width = "250px";
ctx.canvas.parentNode.style.height = "250px";
const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['18-24', '25-34', '35-44', '45-54', '55+'],
    datasets: [
      {
        label: 'Hommes',
        data: [20, 30, 25, 15, 10],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1
      },
      {
        label: 'Femmes',
        data: [15, 25, 20, 10, 5],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
          stacked: true,
          ticks: {
              color: 'red', 
              font: {
                  size: 14,
                  style: 'italic',
              }
          }
      },
      y: {
          stacked: true,
          beginAtZero: true,
          ticks: {
              color: 'blue', 
              font: {
                  size: 14,
                  style: 'italic',
              }
          }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'green',  
            font: {
              size: 14,
              style: 'bold',
          }
        }
      }
    }
  }
});

const resistanceCtx = document.getElementById('resistanceChart').getContext('2d');
const resistanceChart = new Chart(resistanceCtx, {
  type: 'line',
  data: {
    labels: ['0 min','1-5 min', '5-10 min', '10-15 min', '15-20 min', '20+ min'],
    datasets: [
      {
        label: "Résistance physique en l'air", 
        data: [17, 28, 50, 70, 50, 40],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
          stacked: true,
          ticks: {
              color: 'red',  
              font: {
                  size: 14,
                  style: 'italic',
              }
          }
      },
      y: {
          stacked: true,
          beginAtZero: true,
          ticks: {
              color: 'blue', 
              font: {
                  size: 14,
                  style: 'italic',
              }
          }
      }
    },
    plugins: {
      legend: {
        labels: {
          color: 'green',  
            font: {
              size: 14,
              style: 'bold',
          }
        }
      }
    }
  }
});