google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

      var data = google.visualization.arrayToDataTable([
        ['City', 'Population',],
        ['1-st City', 8175000],
        ['2-nd City', 3792000],
        ['3-d City', 2695000],
        ['4-th City', 2099000],
        ['5-th City', 1526000]
      ]);

      var options = {
        title: 'Population of Largest RUS. Cities',
        chartArea: {width: '50%'},
        hAxis: {
          title: 'Total Population',
          minValue: 0
        },
        vAxis: {
          title: 'City'
        }
      };

      var chart = new google.visualization.BarChart(document.getElementById('chart_div'));

      chart.draw(data, options);
    }
