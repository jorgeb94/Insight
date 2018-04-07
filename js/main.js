
function showiphoneChart() {
  var iPhonectx = document.getElementById("iphoneChart").getContext('2d');
  var myChart = new Chart(iPhonectx, {
    type: 'line',
    data: {
        labels: ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
            label: 'John',
            data: [2, 3.5, 3, 1, 2, 3, 2.5],
            backgroundColor: [
                'rgba(33, 193, 237, 0.6)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
        },{
            label: 'Bethany',
            data: [3, 2, 1.6, 8, 7, 2, 1],
            backgroundColor: [
                'rgba(219, 76, 63, 0.6)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
        }

      ],


    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  });
}
showiphoneChart();

function showxBoxChart() {
  var xboxctx = document.getElementById("xboxChart").getContext('2d');
  var myChart = new Chart(xboxctx, {
    type: 'line',
    data: {
        labels: ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
            label: 'John',
            data: [4, 7, 7, 5, 3, 5, 3],
            backgroundColor: [
                'rgba(33, 193, 237, 0.6)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
        },{
            label: 'Bethany',
            data: [6, 3, 2, 6, 8, 7, 5],
            backgroundColor: [
                'rgba(219, 76, 63, 0.6)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
        }

      ],


    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  });
}


function showxCompChart() {
  var xboxctx = document.getElementById("compChart").getContext('2d');
  var myChart = new Chart(xboxctx, {
    type: 'line',
    data: {
        labels: ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{
            label: 'John',
            data: [1, 0, 2, 1, 0, 1, 0],
            backgroundColor: [
                'rgba(33, 193, 237, 0.6)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
        },{
            label: 'Bethany',
            data: [1, 3, 2, 0, 1, 2, 0],
            backgroundColor: [
                'rgba(219, 76, 63, 0.6)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
        }

      ],


    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
  });
}

var iphoneBtn = document.getElementById('iphoneBtn');

function iphoneChart() {
  var canvas = document.getElementById('chart');
  canvas.innerHTML = '';
  var node = document.createElement("canvas");                 // Create a <li> node
  var textnode = document.createTextNode("");         // Create a text node
  node.appendChild(textnode);                              // Append the text to <li>
  document.getElementById("chart").appendChild(node);
  document.getElementsByTagName("canvas")[0].setAttribute("id", "iphoneChart");

  var gameType = document.getElementById('game-type');
  gameType.innerText = "";
  gameType.innerText = "iPhone"

  var user1 = document.getElementById('user1');
  var user1Hours = document.getElementById('user1Hours');
  var progressBar1 = document.getElementById('progress-bar1');
  user1.innerHTML = "John";
  user1Hours.innerHTML = "";
  user1Hours.innerHTML = "<b>17</b> Hours / 30 Hours";
  progressBar1.innerHTML = "";
  progressBar1.innerHTML = "<div class='progress-bar progress-bar-aqua' style='width: 60%'></div>";

  var user2 = document.getElementById('user2');
  var user2Hours = document.getElementById('user2Hours');
  var progressBar2 = document.getElementById('progress-bar2');
  user2.innerHTML = "Bethany";
  user2Hours.innerHTML = "";
  user2Hours.innerHTML = "<b>24.6</b> Hours / 25 Hours";
  progressBar2.innerHTML = "";
  progressBar2.innerHTML = "<div class='progress-bar progress-bar-red' style='width: 95%'></div>";

  showiphoneChart();
}

iphoneBtn.addEventListener('click', iphoneChart);

var xboxBtn = document.getElementById('xboxBtn');

function xboxChart() {
  var canvas = document.getElementById('chart');
  canvas.innerHTML = '';
  var node = document.createElement("canvas");                 // Create a <li> node
  var textnode = document.createTextNode("");         // Create a text node
  node.appendChild(textnode);                              // Append the text to <li>
  document.getElementById("chart").appendChild(node);
  document.getElementsByTagName("canvas")[0].setAttribute("id", "xboxChart");

  var gameType = document.getElementById('game-type');
  gameType.innerText = "";
  gameType.innerText = "Xbox One"

  var user1 = document.getElementById('user1');
  var user1Hours = document.getElementById('user1Hours');
  var progressBar1 = document.getElementById('progress-bar1');
  user1.innerHTML = "John";
  user1Hours.innerHTML = "";
  user1Hours.innerHTML = "<b>25</b> Hours / 30 Hours";
  progressBar1.innerHTML = "";
  progressBar1.innerHTML = "<div class='progress-bar progress-bar-aqua' style='width: 80%'></div>";

  var user2 = document.getElementById('user2');
  var user2Hours = document.getElementById('user2Hours');
  var progressBar2 = document.getElementById('progress-bar2');
  user2.innerHTML = "Bethany";
  user2Hours.innerHTML = "";
  user2Hours.innerHTML = "<b>20</b> Hours / 25 Hours";
  progressBar2.innerHTML = "";
  progressBar2.innerHTML = "<div class='progress-bar progress-bar-red' style='width: 75%'></div>";

  showxBoxChart();
}

xboxBtn.addEventListener('click', xboxChart);

var compBtn = document.getElementById('compBtn');

function compChart() {
  var canvas = document.getElementById('chart');
  canvas.innerHTML = '';
  var node = document.createElement("canvas");                 // Create a <li> node
  var textnode = document.createTextNode("");         // Create a text node
  node.appendChild(textnode);                              // Append the text to <li>
  document.getElementById("chart").appendChild(node);
  document.getElementsByTagName("canvas")[0].setAttribute("id", "compChart");

  var gameType = document.getElementById('game-type');
  gameType.innerText = "";
  gameType.innerText = "Computer"

  var user1 = document.getElementById('user1');
  var user1Hours = document.getElementById('user1Hours');
  var progressBar1 = document.getElementById('progress-bar1');
  user1.innerHTML = "John";
  user1Hours.innerHTML = "";
  user1Hours.innerHTML = "<b>5</b> Hours / 30 Hours";
  progressBar1.innerHTML = "";
  progressBar1.innerHTML = "<div class='progress-bar progress-bar-aqua' style='width: 16%'></div>";

  var user2 = document.getElementById('user2');
  var user2Hours = document.getElementById('user2Hours');
  var progressBar2 = document.getElementById('progress-bar2');
  user2.innerHTML = "Bethany";
  user2Hours.innerHTML = "";
  user2Hours.innerHTML = "<b>8</b> Hours / 25 Hours";
  progressBar2.innerHTML = "";
  progressBar2.innerHTML = "<div class='progress-bar progress-bar-red' style='width: 32%'></div>";

  showxCompChart();
}

compBtn.addEventListener('click', compChart);
