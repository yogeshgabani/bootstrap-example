const { Chart } = SingleDivUI;

const options = {
  data: {
    labels: ['Sap-01', 'Sap-02', 'Sap-03', 'Sap-04', 'Sap-05', 'Sap-06', 'Sap-07', 'Sap-08'],
    series: {
      points: [240, 200, 280, 145, 175, 350, 212, 170]
    }
  },
};

new Chart('#chart2',  {
    type: 'bar',
    ...options
});


var ctx = document.getElementById("myChart").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Tokyo",	"Mumbai",	"Mexico City",	"Shanghai"],
        datasets: [{    
            data: [500,	50,	2424,	14040], // Specify the data values array
          
            borderColor: ['#2196f38c', '#f443368c', '#3f51b570', '#00968896'], // Add custom color border 
            backgroundColor: ['#2196f38c', '#f443368c', '#3f51b570', '#00968896'], // Add custom color background (Points and Fill)
            borderWidth: 1 // Specify bar border width
        }]},         
    options: {
      responsive: true, // Instruct chart js to respond nicely.
      maintainAspectRatio: false, // Add to prevent default behaviour of full-width/height 
    }
});




l̥ō
