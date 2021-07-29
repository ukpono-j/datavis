var chartId1 = "piechart_followers_vs_non_followers"
var chartId2 = "followers_vs_non_followers_butterfly_chart"
var chartId3 = "overall_non_roadmap_student_histogram"
var chartId4 = "overall_roadmap_student_histogram"
var chartId5 = "roadmap_vs_nonRoadmap_followers_per_year_and_department_piechart"
var chartId6 = "piechart_followers_vs_non_followers_per_department"
var chartId7 = "student_count_following_roadmap_subject_histogram"
var chartId8 = "student_count_not_following_roadmap_subject_histogram"
var chartId9 = "student_following_roadmap_per_department_and_major_histogram"
var chartId10 = "student_not_following_roadmap_per_department_and_major_histogram"
var chartId11 = "association_analysis_frequent_itemset"
var chartId12 = "association_analysis_frequent_rules"


function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function loadData(id){
    const jsonData = document.getElementById(id).dataset.json
    // console.log(jsonData)
    return JSON.parse(jsonData)
}

// chart1
function getChartData1(){
    
    const data = loadData(chartId1)
    // console.log("chart1 data",data)
    return data

}


// chart2
function getChartData2(){
    let result;
    const data = loadData(chartId2)
    console.log(data)
    return data
    

}



// chart3
function getChartData3(){
    
    const data_ = loadData(chartId3)
    let labels = data_.data.map(value=>value[5])
    let data = data_.data.map(value=>value[6])
    // console.log("data",data.slice(0,10)," labes",labels.slice(10))
    return {
        labels,
        data
    }

}



// chart4
function getChartData4(){
    let result;
    const data = loadData(chartId4)

    return data

}



// chart5
function getChartData5(){
    let result;
    const data = loadData(chartId1)

    return result

}


// chart6
function getChartData6(){
    let result;
    const data = loadData(chartId1)

    return result

}




// chart7
function getChartData7(){
    let result;
    const data = loadData(chartId7)
     
    return data

}



// chart8
function getChartData8(){
    let result;
    const data = loadData(chartId1)

    return result

}



// chart9
function getChartData9(){
    let result;
    const data = loadData(chartId1)

    return result

}




// chart10
function getChartData10(){
    let result;
    const data = loadData(chartId1)

    return result

}



// chart11
function getChartData11(){
    let result;
    const data = loadData(chartId1)

    return result

}



// chart12
function getChartData12(){
    let result;
    const data = loadData(chartId1)

    return result

}