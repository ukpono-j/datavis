
const display = async() => {
    let data = await fetch('./roadmap_vs_nonRoadmap_followers_per_year_and_department_piechart.json')
    data = await data.json()
    console.log(data)
    let color = new Array(data.length).fill(0)
    for(let i in color){
        i%2 ? color[i] = "#005440" : color[i] ="#c5b783"
    }
    console.log(color)
  
  // =========================== chart 1 =================

  
  let chartEle1 = document.getElementById('roadmap_vs_nonRoadmap_followers_per_year_and_department_piechart').getContext("2d");
  let chart1 = new Chart(chartEle1, {
    type: "doughnut",
    title: {
      text: "Pie chart of follower vs non follower students",
    },
    data: {
      labels: data.chart_labels,
      datasets: [
        {
          data: data.data,
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