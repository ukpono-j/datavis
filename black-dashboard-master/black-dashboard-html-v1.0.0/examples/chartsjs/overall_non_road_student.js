const display = async() => {
  let data = await fetch('./overall_non_roadmap_student_histogram.json')
  data = await data.json()

  let label = data.data.map((item, index)=> item[5])
  data = data.data.map((item, index)=> item[6])
  console.log({label, data})

  let color = new Array(data.length).fill(0)
  for(let i in color){
      i%2 ? color[i] = "#005440" : color[i] ="#c5b783"
  }
  console.log(color)

// =========================== chart 1 =================

let chartEle1 = document.getElementById('overall_non_roadmap_student_histogram').getContext("2d");

let chart1 = new Chart(chartEle1, {
  type: "bar",
  title: {
    text: "Pie chart of follower vs non follower students",
  },
  data: {
    labels: label,
    datasets: [
      {
        data: data,
        backgroundColor: color,
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