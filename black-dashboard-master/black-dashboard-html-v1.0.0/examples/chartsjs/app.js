// =========================== chart 1 =================
const chartData1 = getChartData1();



let chartEle1 = document.getElementById(chartId1).getContext("2d");

let chart1 = new Chart(chartEle1, {
  type: "doughnut",
  title: {
    text: "Pie chart of follower vs non follower students",
  },
  data: {
    labels: chartData1.chart_labels,
    datasets: [
      {
        data: [
          chartData1.chart_seats[0] /
            (chartData1.chart_seats[0] + chartData1.chart_seats[1]),
          chartData1.chart_seats[1] /
            (chartData1.chart_seats[0] + chartData1.chart_seats[1]),
        ],
        backgroundColor: ["#005440", "#c5b783"],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        labels: {},
        position: "bottom",
      },
 
    },
  },
});

