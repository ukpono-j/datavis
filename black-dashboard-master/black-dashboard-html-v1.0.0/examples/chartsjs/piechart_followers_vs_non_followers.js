
const display = async() => {
    let data = await fetch('./piechart_followers_vs_non_followers.json')
    data = await data.json()
    console.log(data)

  
  let chartEle1 = document.getElementById('piechart_followers_vs_non_followers').getContext("2d");
  let chart1 = new Chart(chartEle1, {
    type: "doughnut",
    title: {
      text: "Pie chart of follower vs non follower students",
    },
    data: {
      labels: data.chart_labels,
      datasets: [
        {
          data: data.chart_seats,
          backgroundColor: data.colors,
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
        // title: {
        //   display: true,
        //   text: 'Custom Chart Title'
        // }
      },
    },
  });
  }
  
  display()