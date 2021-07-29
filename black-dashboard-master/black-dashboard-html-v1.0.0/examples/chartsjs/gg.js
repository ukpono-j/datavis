// ========================= chart list ===========================
// var chartId1 = "piechart_followers_vs_non_followers"
// var chartId2 = "followers_vs_non_followers_butterfly_chart"
// var chartId3 = "overall_non_roadmap_student_histogram"
// var chartId4 = "overall_roadmap_student_histogram"
// var chartId5 = "roadmap_vs_nonRoadmap_followers_per_year_and_department_piechart"
// var chartId6 = "piechart_followers_vs_non_followers_per_department"
// var chartId7 = "student_count_following_roadmap_subject_histogram"
// var chartId8 = "student_count_not_following_roadmap_subject_histogram"
// var chartId9 = "student_following_roadmap_per_department_and_major_histogram"
// var chartId10 = "student_not_following_roadmap_per_department_and_major_histogram"
// var chartId11 = "association_analysis_frequent_itemset"
// var chartId12 = "association_analysis_frequent_rules"




// =========================== chart 1 =================
const chartData1 = getChartData1()


let chartEle1 = document.getElementById(chartId1).getContext ('2d');

let chart1 = new Chart (chartEle1, {
  type: 'doughnut',
  title: {
    text: 'Pie chart of follower vs non follower students',
  },
  data: {
    labels: chartData1.chart_labels,
    datasets: [
      {
        data: [chartData1.chart_seats[0]/(chartData1.chart_seats[0]+chartData1.chart_seats[1]),chartData1.chart_seats[1]/(chartData1.chart_seats[0]+chartData1.chart_seats[1])],
        backgroundColor: ['blue', 'orange'],
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        display: true,
        labels: {},
        position: 'bottom',
      },
      // title: {
      //   display: true,
      //   text: 'Custom Chart Title'
      // }
    },
  },
});

