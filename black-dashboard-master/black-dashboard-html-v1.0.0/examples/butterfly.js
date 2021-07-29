
// Data gathered from http://populationpyramid.net/germany/2015/
$(function () {
    // Age categories
    var categories = ['Civil Engineering', 'Computer Science', 'Construction', 'Electric & Electronic Engr', 'Computer Engineering', 'Mechanical Engineering']
    $(document).ready(function () {
        Highcharts.chart('followers_vs_non_followers_butterfly_chart', {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Overall roadmap'
            },
            subtitle: {
                // text: 'Source: <a href="http://populationpyramid.net/germany/2015/">Population Pyramids of the World from 1950 to 2100</a>'
            },
            xAxis: [{
                categories: categories,
                reversed: false,
                labels: {
                    step: 1
                }
            }, /*{ // mirror axis on right side
        opposite: true,
        reversed: false,
        categories: categories,
        linkedTo: 0,
        labels: {
            step: 1
        }
    }*/],
            yAxis: {
                // categories: ['G7', 'A8', 'V9', 'V4', 'V3', 'V1', 'V5'],
                title: {
                    text: null
                },
                labels: {
                    formatter: function () {
                        return Math.abs(this.value) + '%';
                    }
                }
            },

            plotOptions: {
                series: {
                    stacking: 'normal'
                }
            },

            tooltip: {
                formatter: function () {
                    return '<b>' + this.series.name + ', Roadmap Followers ' + this.point.category + '</b><br/>' +
                        'department: ' + Highcharts.numberFormat(Math.abs(this.point.y), 0);
                }

            },

            series: [{
                name: 'RoadMap Followers',
                color: ' #005440',
                data: [-2.2, -2.2, -2.3, -2.5, -2.7, -3.1]

            }, {
                name: '"Non-RoadMap Followers"',
                color: '#c5b783',
                data: [2.1, 2.0, 2.2, 2.4, 2.6, 3.0]

            }]
        });
    });

});