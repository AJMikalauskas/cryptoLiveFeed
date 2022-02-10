//var cryptoTickerSymbol;

const data = null;
var xhr = new XMLHttpRequest();
xhr.withCredentials = false;

var specificStringParam = window.location.search;
var endOfFirstParam = specificStringParam.indexOf("&");
var firstParamValue = specificStringParam.slice(12, endOfFirstParam);
console.log(firstParamValue);

window.onload = function settingInitialValues() {
  // var specificStringParam = window.location.search;
  // var endOfFirstParam = specificStringParam.indexOf("&");
  // var firstParamValue = specificStringParam.slice(12, endOfFirstParam);
  // console.log(firstParamValue);

  var startOfSecondParam = specificStringParam.lastIndexOf("=");
  var secondParamValue = specificStringParam.slice(
    startOfSecondParam + 1,
    specificStringParam.length
  );
  console.log(secondParamValue);

  // var nameOfCrypto = window.location.href.slice(53);
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
      jsnCnvrtr = JSON.parse(this.responseText);
      console.log(jsnCnvrtr[0]["id"]);

      var cnvrtToStringVal = jsnCnvrtr[0]["current_price"];
      console.log(cnvrtToStringVal);
      cnvrtToStringVal = cnvrtToStringVal.toString();

      if(firstParamValue == jsnCnvrtr[0]["id"])
      {
        document.getElementById("cryptoPicture").src = "/" + jsnCnvrtr[0]["symbol"] + "Picture.png";
      }
      document.getElementById("cryptoNameBold").innerHTML = jsnCnvrtr[0]["symbol"].toUpperCase() + ":";

      var withDollarSign = "$" + cnvrtToStringVal;
      document.getElementById("currentPriceOfSelectedCrypto").innerHTML =
        withDollarSign;

      document.getElementById("amtOfCryptoOwned").innerHTML = secondParamValue;

      var tokenToUsdConversion = "$" + secondParamValue * cnvrtToStringVal;
      document.getElementById("totalCryptoToUsd").innerHTML =
        tokenToUsdConversion;

      var marketCap = jsnCnvrtr[0]["market_cap"].toString();
      document.getElementById("marketCapOfCrypto").innerHTML = marketCap;

      var marketCapRank = jsnCnvrtr[0]["market_cap_rank"].toString();
      document.getElementById("marketCapRankOfCrypto").innerHTML =
        marketCapRank;
    }
  });
  xhr.open(
    "GET",
    "https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&ids=" +
      firstParamValue
  );
  xhr.setRequestHeader("x-rapidapi-host", "coingecko.p.rapidapi.com");
  xhr.setRequestHeader(
    "x-rapidapi-key",
    "93da5c882bmshca883f546251ac6p1f0c49jsn63020d879234"
  );

  xhr.send(data);
};
//creatingALineChartForSpecificCrypto();
const data2 = null;
var xhr2 = new XMLHttpRequest();
xhr2.withCredentials = false;
var jsnCnvrtr;
var keyValues;
var xValues = [];
var yValues = [];

function creatingALineChartForSpecificCrypto() {
  xhr2.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      // console.log(this.responseText);
      jsnCnvrtr = JSON.parse(this.responseText);
      var jsnPrices = jsnCnvrtr["prices"];
      // console.log(jsnPrices);
      //jsnPrices.forEach(console.log("Hello"))

      // var xValues = [50,60,70,80,90,100,110,120,130,140,150];
      // var yValues = [7,8,8,9,9,9,10,11,14,14,15];
      // keyNames = Object.keys(jsnCnvrtr);
      // console.log(keyNames);

      keyValues = Object.values(jsnCnvrtr);
      console.log(keyValues[0].length);
      var getXValues = keyValues[0];
      var xValues = getXValues.map(getUnixTimeValue);
      console.log(xValues);

      var getYValues = keyValues[0];
      var yValues = getYValues.map((item) => {return item[1];});
      console.log(yValues);
      //console.log(keyValues[0]);

     // var yValues = getYValues.map(getPriceOfCryptoForChart);


      // console.log(keyValues[0][0].length);
      // for (var arrNum = 0; arrNum < keyValues[0].length; arrNum++) {
      //   var dateCnvrtr = new Date((keyValues[0][arrNum][0]));
      //   //console.log(dateCnvrtr);
      //   if(dateCnvrtr.getHours() > 12)
      //   {
      //     var dateHours = dateCnvrtr.getHours() - 12;
      //   }
      //   if(dateCnvrtr.getMinutes() < 10)
      //   {
      //     var dateMin = "0" + dateCnvrtr.getMinutes();
      //   }
      //   var dates = dateHours + ":" + dateMin;

      //   xValues.push(dates);
      //  // console.log(keyValues[0][arrNum][0]);
      //   //console.log(dateCnvrtr);

      //   //console.log(dateCnvrtr.getHours() + ":" + dateCnvrtr.getMinutes());
      //   //console.log((keyValues[0][arrNum][1]));
      //   yValues.push(keyValues[0][arrNum][1]);
      //   //var date = new Date (xValues[0] * 1000);

      // }
      // console.log(xValues.length);
      // console.log(xValues);
      //var date = new Date (xValues[0] * 1000);
      // console.log(date);
      // console.log(date.getHours());
      // console.log(date.getMinutes());
      // console.log((date.getHours() + ":" + date.getMinutes()).toString());

      console.log(yValues.length);
      console.log(yValues);
      createChart(xValues, yValues);
      //   console.log(keyValues[0][0][0]);
      //   // Displays both the UNIX Time value and the Price if show in console both keyValues
      //   var kv2 = Object.values(keyValues[0][0]);
      //     console.log(kv2);
      // document.getElementById('myChart')
      // new Chart("myChart", {
      //   type: "line",
      //   data: {
      //     labels: xValues,
      //     datasets: [
      //       {
      //         label: "Coin Price Tracker",
      //         backgroundColor: "#B5D3E7",
      //         borderColor: "#B5D3E7",
      //         data: yValues,
      //         fill: false,
      //       }]
      //   },
      //   options: {
      //     responsive: true,
      //     title:{
      //       display:true,
      //       text:'Chart.js Line Chart Test'
      //     },
      //     tooltips: {
      //       mode: 'index',
      //       intersect: false,
      //     },
      //    interaction: {
      //       mode: 'nearest',
      //       intersect: true
      //     }
      // scales: {
      //   xAxes: [{
      //     display: true,
      //     scaleLabel: {
      //       display: true,
      //     }
      //   }],
      //   yAxes: [{
      //     display: true,
      //     scaleLabel: {
      //       display: true,
      //     },
      //   }]
      //}
      // onClick: (e) => {
      //   const canvasPosition = getRelativePosition(e, chart);

      //   // Substitute the appropriate scale IDs
      //   const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
      //   const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);
      //   console.log(x);
      //   console.log(y);
      // }
    }
  });
  //}
  //  });
  xhr2.open(
    "GET",
    "https://coingecko.p.rapidapi.com/coins/" +
      firstParamValue +
      "/market_chart?vs_currency=usd&days=7"
  );
  xhr2.setRequestHeader("x-rapidapi-host", "coingecko.p.rapidapi.com");
  xhr2.setRequestHeader(
    "x-rapidapi-key",
    "93da5c882bmshca883f546251ac6p1f0c49jsn63020d879234"
  );

  xhr2.send(data2);
}

// Get Position of mouse and display closest point based on location of the mouse
// document.getElementById("myChart").onmousemove = function (e) {
//   var pos = getMousePos(this, e), /// provide this canvas and event
//     x = pos.x,
//     y = pos.y;
//    //console.log(x);
//    //console.log(y);

//   /// check x and y against the grid
// };

// /// the main function
// function getMousePos(canvas, e) {
//   /// getBoundingClientRect is supported in most browsers and gives you
//   /// the absolute geometry of an element
//   var rect = canvas.getBoundingClientRect();

//   /// as mouse event coords are relative to document you need to
//   /// subtract the element's left and top position:
//   return { x: e.clientX - rect.left, y: e.clientY - rect.top };
// }

function createChart(xValues, yValues) {
  //Test Chart with values
  window.chartColors = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(231,233,237)",
  };

  var config = {
    type: "line",
    data: {
      labels: xValues,
      datasets: [
        {
          label: "Coin Price and Time Tracker",
          backgroundColor: window.chartColors.blue,
          borderColor: window.chartColors.blue,
          data: yValues,
          fill: false,
          pointRadius: 1,
        },
      ],
    },
    options: {
      responsive: true,
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
      tooltips: {
        mode: "index",
        intersect: false,
      },
      hover: {
        mode: "nearest",
        intersect: true,
      },
      scales: {
        xAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
            },
          },
        ],
        yAxes: [
          {
            display: true,
            scaleLabel: {
              display: true,
            },
          },
        ],
      },
    },
  };

  var ctx = document.getElementById("canvas").getContext("2d");
  var myLine = new Chart(ctx, config);
}

function getUnixTimeValue(item) {
  var dateCnvrtr = new Date(item[0]);
  console.log(dateCnvrtr);
  var dateHours = dateCnvrtr.getHours();
  var dateMin = dateCnvrtr.getMinutes();

  if (dateCnvrtr.getHours() > 12) {
     dateHours -= 12;
  }
  if (dateCnvrtr.getMinutes() < 10) {
     dateMin = "0" + dateCnvrtr.getMinutes();
  }
  var dates = dateHours + ":" + dateMin;

  return dates;
}

function getPriceOfCryptoForChart(item) {
  return item[1];
}

creatingALineChartForSpecificCrypto();
