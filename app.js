// Imports
const express = require("express");
const app = express();
const fs = require("fs");
const request = require("request");
const eventEmitter = require("events");
const myEmitter = new eventEmitter();
const port = 3000;
//const http = require('http');
//const url = require("url");

// Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`));

// Static Files
app.use(express.static("public"));
app.use("/css", express.static(__dirname + "public/css"));
app.use("/js", express.static(__dirname + "public/js"));
app.use("/img", express.static(__dirname + "public/img"));

// To display the html files in views
// app.get("", (req, res) => {
//   res.sendFile(__dirname + "/views/index.html");
// });

// Getting File Data and using the JSON response information using node js modules
fs.readFile(
  "C:\\Users\\ajmik\\OneDrive\\Desktop\\Xander's Small Coding Projects 2022\\testNewNodeProj\\dadData.txt",
  "utf8",
  (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
    specifiedUserData = JSON.parse(data);
    console.log(specifiedUserData);
    console.log(specifiedUserData["decentraland"]);
    //console.log(Object.entries(specifiedUserData));
    callReq(specifiedUserData);
  }
);

function callReq(kvps) {
  var keysInKvps = Object.keys(kvps);
  var idStr = "";
  for (
    var cryptoNameNum = 0;
    cryptoNameNum < keysInKvps.length;
    cryptoNameNum++
  ) {
    if (cryptoNameNum != keysInKvps.length - 1) {
      idStr += keysInKvps[cryptoNameNum] + ",";
    } else {
      idStr += keysInKvps[cryptoNameNum];
    }
  }
  console.log(idStr);

  const options = {
    method: "GET",
    url: "https://coingecko.p.rapidapi.com/coins/markets",
    qs: { vs_currency: "usd", ids: idStr },
    headers: {
      "x-rapidapi-host": "coingecko.p.rapidapi.com",
      "x-rapidapi-key": "93da5c882bmshca883f546251ac6p1f0c49jsn63020d879234",
      useQueryString: true,
    },
  };

  request(options, function (error, response, body) {
    if (error) throw new Error(error);

    console.log(body);
    storeBody = JSON.parse(body);
    //changeTheDom(storeBody);
    console.log(storeBody[0]["id"]);
    console.log(kvps[storeBody[0]["id"]]);
    //document.getElementById('cryptoName0').innerHTML = storeBody[0]["id"];
  });
}

// function goToNewPage(nameOfCryptoSelected) {
//     // window.location.href = "http://127.0.0.1:5500/indexcrypto.html/cryptoSpecific.html"
//     // var url1 = new URL('/page', "http://127.0.0.1:5500/indexcrypto.html");
//     // console.log(url1);
//     // window.location.href = url1
//     var url1 = new URL("http://127.0.0.1:5500/cryptoSpecific.html");
//     url1.searchParams.set("cryptoName", nameOfCryptoSelected);

//     for (var cryptoFinder = 0; cryptoFinder < keyNames.length; cryptoFinder++) {
//       if (keyNames[cryptoFinder] == nameOfCryptoSelected) {
//         url1.searchParams.set("cryptoAmt", keyValues[cryptoFinder]);
//       }
//     }

//     console.log(url1);
//     // console.log(url1.href);
//     var getQueryParam = url1.search;
//     var endRes = getQueryParam.slice(12);
//     console.log(endRes);
//     console.log(url1.pathname);
//     window.location.href = url1.pathname + url1.search;
//     //individualCrypto();
// }

// Changing files to ejs and showing instead of html
app.set("views", "./views");
app.set("view engine", "ejs");
app.get("", (req, res) => {
  res.render("index", {
    cryptoImg1: "../img/xrpPicture.png",
    cryptoImg2: "../img/manaPicture.png",
    cryptoImg3: "../img/ethPicture.png",
    storeBody: storeBody,
    specifiedUserData: specifiedUserData,
  });
  //res.render('index', { storeBody : storeBody});
  //myEmitter.addListener('click', goToNewPage());
});



// API call to get Data for the chart

// const options = {
//   method: 'GET',
//   url: 'https://coingecko.p.rapidapi.com/coins/ripple/market_chart',
//   qs: {vs_currency: 'usd', days: '7'},
//   headers: {
//     'x-rapidapi-host': 'coingecko.p.rapidapi.com',
//     'x-rapidapi-key': '93da5c882bmshca883f546251ac6p1f0c49jsn63020d879234',
//     useQueryString: true
//   }
// };

// request(options, function (error, response, body) {
// 	if (error) throw new Error(error);

// 	console.log(body);
// });


// Node JS and Chart JS Example Code

// const  CanvasRenderService  = require('chartjs-node-canvas');
// const width = 1000;   // define width and height of canvas 
// const height = 1000;   
// const chartCallback = (ChartJS) => {
//  console.log('chart built')
// };
// const canvasRenderService = new CanvasRenderService(width, height, chartCallback);

// var xLabels = ['1','2','3','4','5','6','7','8','9','10','11']

// const createImage = async () => {
//     const configuration = {
//         type: 'line',   // for line chart
//           data: {
//               labels: [150,300,450,600,750,900,1050,1200,1350,1500],
//               datasets: [{
//                   label: "sample 1",
//                   data: [100,43],
//                   fill: false,
//                   borderColor: ['rgba(255, 99, 132, 1)'],
//                   borderWidth: 1,
//                   xAxisID: 'xAxis1' //define top or bottm axis ,modifies on scale
//               },
//               {
//                   label: "sample 2",
//                   data: [72,83],
//                   fill: false,
//                   borderColor: ['rgba(265, 99, 132, 1)'],
//                   borderWidth: 1,
//                   xAxisID: 'xAxis1'
//               },
//               {
//                   label: "sample3",
//                   data: [30,56],
//                   fill: false,
//                   borderColor: ['rgba(235, 99, 122, 1)'],
//                   borderWidth: 1,
//                   xAxisID: 'xAxis1'
//               }
//               ],
              
//           },
//           options: {
//                   scales: {
//                   xAxes:[
//                       {
//                       id:'xAxis1',
//                       position: 'bottom',
//                       type:"category",

//                       },
//                       {
//                       id:'xAxis2',
//                       position: 'top',
//                       type:"category",
//                       ticks:{
//                           callback: function(value, index, values) {
//                               return xLabels[index];  // gives points of top x axis 
//                           }
//                   },
//               }],
//                   yAxes: [{
//                   display: true,
//                   ticks: {
//                       max: 200,
//                       stepSize: 10, //defines y axis step scale
//                   }
//               }]
//           ,   
//               }
//           }
//           }

//     const dataUrl = await canvasRenderService.renderToDataURL(configuration); // converts chart to image
//     return dataUrl;
// };

// module.exports = {
// createImage   //for exporting to another file
// }

// var specificStringParam = window.location.search;
// var endOfFirstParam = specificStringParam.indexOf("&");
// var firstParamValue = specificStringParam.slice(12, endOfFirstParam);
// Have to set the /cryptoSpecific.ejs because this is where the url will be expecting the code from cryptospecific.ejs
var str = "";
app.get("/cryptoSpecific.ejs", (req, res) => {
  //const queryObject = url.parse(req.url, true).query;
  //console.log(queryObject);
  res.render("cryptoSpecific", {storedBodySinglePage: storeBody, requestUrl : req.url.slice(19)});
  //str=req.url;
});
console.log(str);
// Sending Hello World to the page
// app.get('', (req, res) => {
//     res.send('Hello World');
// });

// app.get('/cryptoSpecific', (req, res) => {
//     res.render('cryptoSpecific', {text : 'About Page'})
// })

//  const server = http.createServer(function(req, res) {
//      res.writeHead(200, {"Content-Type": "text/html"})
//      fs.readFile('index.html', function(error, data) {
//          if(error)
//          {
//              res.writeHead(404);
//              res.write('Error: File Not Found')
//          } else {
//              res.write(data);
//          }
//          res.end()
//         })
//  })

//  server.listen(port, function(err) {
//     if(err) {
//         console.log("Something went wrong", err)
//     } else {
//         console.log("Server is listening on port " + port)
//     }
// })

//  console.log("Test");

//  const fs = require('fs')

// fs.readFile('C:\\Users\\ajmik\\OneDrive\\Desktop\\Xander\'s Small Coding Projects 2022\\cryptoLiveFeed\\dadData.txt', 'utf8' , (err, data) => {
//   if (err) {
//     console.error(err)
//     return
//   }
//   document.getElementById("testCryptoShow").innerHTML = data;
//   console.log(data)
// })
