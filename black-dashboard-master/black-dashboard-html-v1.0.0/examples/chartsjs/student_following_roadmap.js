const display = async() => {
    let data = await fetch('./student_following_roadmap_per_department_and_major_histogram.json')
    data = await data.json()
    data = data.data.slice(0,1000)
  
    let label = data.map((item, index)=> item[2])
    data = data.map((item, index)=> item[6])
    console.log({label, data})
  
    let color = new Array(data.length).fill(0)
    for(let i in color){
        i%2 ? color[i] = "#005440" : color[i] ="#c5b783"
    }
    console.log(color)
  
  // =========================== chart 1 =================
  
  let chartEle1 = document.getElementById('student_following_roadmap_per_department_and_major_histogram').getContext("2d");
  // console.log("this is the c--------------------------------------------" )
  // alert("this is ")
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