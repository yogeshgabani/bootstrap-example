

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Jun", "Jul", "Aug", "Sep",  "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Income",
        data: [100, 90, 130, 100, 80, 125, 105, 118, 90, 142, 110, 122],
        backgroundColor: [
            '#623AA2F2'
        ],
        borderColor: [
          "#623AA2F2"
        ],
        borderWidth: 2,
      },
      {
        label: "Expances",
        data: [130, 95, 110, 80, 138, 95, 145, 94, 110, 92, 94, 110],
        backgroundColor: [
            '#F66B4E'
        ],
        borderColor: [
          "#F66B4E"
        ],
        borderWidth: 2,
      },
    ],
  };
  
  const config = {
    type: "line",
    data,
    options: {
      scales: {
        y: {
          brginAtZero: true,
        },
      },
    },
  };
  const myChart = new Chart(document.getElementById("myChart"), config);