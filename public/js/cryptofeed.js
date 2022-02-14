// const fs = require("fs");
// const request = require("request");
// const http = require('http');

// var storeBody;
// var specifiedUserData;
// //const port = 3000;

// // Running a live server on localhost:3000 and doing all the other functions below
// // const server = http.createServer(function(req, res) {
// //     res.writeHead(200, {"Content-Type": "text/html"})
// //     fs.readFile('index.html', function(error, data) {
// //         if(error)
// //         {
// //             res.writeHead(404);
// //             res.write('Error: File Not Found')
// //         } else {
// //             res.write(data);
// //         }
// //         res.end()
// //        })
// // })

// // server.listen(port, function(err) {
// //    if(err) {
// //        console.log("Something went wrong", err)
// //    } else {
// //        console.log("Server is listening on port " + port)
// //    }
// // })

// // JSON.parse() variables
// var jsnCnvrtr;
// var jsnCnvrtr2;

// // Key names and property values which are form the .txt file
// var keyNames;
// var keyValues;
// var imageOfCrypto;
// var storedKeys = [];
// var trackerOfChanges = 0;

// // xmlHTTPRequest variables
// //var getRqstUrl = "https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&ids=";
// //var symbolUrl = "https://coingecko.p.rapidapi.com/coins/";
// //const data = null;
// fs.readFile(
//   "C:\\Users\\ajmik\\OneDrive\\Desktop\\Xander's Small Coding Projects 2022\\testNewNodeProj\\dadData.txt",
//   "utf8",
//   (err, data) => {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     console.log(data);
//     specifiedUserData = JSON.parse(data);
//     console.log(specifiedUserData);
//     console.log(specifiedUserData["decentraland"]);
//     //console.log(Object.entries(specifiedUserData));
//     callReq(specifiedUserData);
//   }
// );

// //Make request using request from nodeJS
// function callReq(kvps) {
//   var keysInKvps = Object.keys(kvps);
//   var idStr = "";
//   for (
//     var cryptoNameNum = 0;
//     cryptoNameNum < keysInKvps.length;
//     cryptoNameNum++
//   ) {
//     if (cryptoNameNum != keysInKvps.length - 1) {
//       idStr += keysInKvps[cryptoNameNum] + ",";
//     } else {
//       idStr += keysInKvps[cryptoNameNum];
//     }
//   }
//   console.log(idStr);

//   const options = {
//     method: "GET",
//     url: "https://coingecko.p.rapidapi.com/coins/markets",
//     qs: { vs_currency: "usd", ids: idStr },
//     headers: {
//       "x-rapidapi-host": "coingecko.p.rapidapi.com",
//       "x-rapidapi-key": "93da5c882bmshca883f546251ac6p1f0c49jsn63020d879234",
//       useQueryString: true,
//     },
//   };

//   request(options, function (error, response, body) {
//     if (error) throw new Error(error);

//     console.log(body);
//     storeBody = JSON.parse(body);
//     changeTheDom(storeBody);
//   });
// }

// function changeTheDom(receivedjsn)
// {
// //     for (var cryptoSelected = 0; cryptoSelected < keyNames.length; cryptoSelected++) {
// //         console.log(jsnCnvrtr[cryptoSelected]["symbol"]);

// //         document.getElementById("imageOfCrypto" + cryptoSelected).src = jsnCnvrtr[cryptoSelected]["symbol"] + "Picture.png";

// //         document.getElementById("cryptoName" + cryptoSelected).innerHTML = jsnCnvrtr[cryptoSelected]["symbol"].toUpperCase();

// //         var cnvrtToStringVal = jsnCnvrtr[cryptoSelected]["current_price"].toString();

// //         var withDollarSign = "$" + cnvrtToStringVal;
// //         document.getElementById("currentPriceOfcrypto" + cryptoSelected).innerHTML = withDollarSign;

// //         document.getElementById("numberOfcrypto" + cryptoSelected).innerHTML = receivedjsn[jsnCnvrtr[cryptoSelected]["id"]];

// //         var tokenToUsdConversion = "$" + receivedjsn[jsnCnvrtr[cryptoSelected]["id"]] * cnvrtToStringVal;
// //         document.getElementById("totalcrypto" + cryptoSelected + "ToUsd").innerHTML = tokenToUsdConversion;
// //     }
//  }
// const xhrCall2 = new XMLHttpRequest();
// xhrCall2.withCredentials = false;

// var keyNames;

// const xhr = new XMLHttpRequest();
// xhr.withCredentials = false;

// // window.onload = getFileInfo();

// function getCryptoPrice(arrWithObjElements) {
//   xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === this.DONE) {
//       console.log(this.responseText);
//       jsnCnvrtr = JSON.parse(this.responseText);
//       //console.log(jsnCnvrtr[0])
//       //   console.log(jsnCnvrtr);
//       //   console.log(jsnCnvrtr.ripple.usd);

//       //   var cryptos = Object.keys(jsnCnvrtr);
//       //   console.log(cryptos);

//       //console.log(jsnCnvrtr[0]["current_price"]);

//       /* Edit Carousel Elements */
//       for (
//         var cryptoSelected = 0;
//         cryptoSelected < keyNames.length;
//         cryptoSelected++
//       ) {
//         console.log(jsnCnvrtr[cryptoSelected]["symbol"]);

//         document.getElementById("imageOfCrypto" + cryptoSelected).src = jsnCnvrtr[cryptoSelected]["symbol"] + "Picture.png";

//         document.getElementById("cryptoName" + cryptoSelected).innerHTML = jsnCnvrtr[cryptoSelected]["symbol"].toUpperCase();

//         var cnvrtToStringVal =
//           +jsnCnvrtr[cryptoSelected]["current_price"].toString();
//         //["ripple"/"decentraland"/"ethereum"]["usd"]

//         var withDollarSign = "$" + cnvrtToStringVal;
//         document.getElementById(
//           "currentPriceOfcrypto" + cryptoSelected
//         ).innerHTML = withDollarSign;

//         document.getElementById(
//           "numberOfcrypto" + cryptoSelected
//         ).innerHTML = arrWithObjElements[jsnCnvrtr[cryptoSelected]["id"]];

//         var tokenToUsdConversion =
//           "$" +
//           arrWithObjElements[jsnCnvrtr[cryptoSelected]["id"]] *
//             cnvrtToStringVal;
//         document.getElementById(
//           "totalcrypto" + cryptoSelected + "ToUsd"
//         ).innerHTML = tokenToUsdConversion;
//       }

//       /* Table DOM Manipulation*/

//       for (var i = 0; i < keyNames.length; i++) {
//         // if(trackerOfChanges == 1)
//         // {
//         //   for(var storedKeyCount = 0; storedKeyCount < storedKeys.length; storedKeyCount++)
//         //   {
//         //     if(jsnCnvrtr[i]["id"] == storedKeys[storedKeyCount])
//         //     {
//         //       break;
//         //     }
//         //   }
//         // }
//         // else{
//         //   storedKeys.push(keyNames[i]);
//         //   console.log(storedKeys);
//         // }
//         // //console.log(document.getElementById('adjustingTable').rows)

//         var x = document.getElementById("adjustingTable").rows[i + 1].cells;
//         //Resets the values of the first column which inclued the name, symbol, and picture because they're appeneded elements which makes them
//           // not as easily reset as innerHTML is
//         if(trackerOfChanges >= 1)
//         {
//           for(var i2 = 0; i2 < 4; i2++)
//           {
//             x[i2].innerHTML = " ";
//           }
//         }
//         imageOfCrypto = document.createElement("img");
//         imageOfCrypto.height = "60";
//         imageOfCrypto.style.paddingRight = "15px";
//         imageOfCrypto.style.marginBottom = "10px";
//         imageOfCrypto.src = jsnCnvrtr[i]["symbol"] + "Picture.png";

//         console.log(imageOfCrypto.src)
//         console.log(imageOfCrypto.src.indexOf(jsnCnvrtr[i]["symbol"]))
//         x[0].appendChild(imageOfCrypto);

//         var symbolCapitalized = document.createElement("span");
//         symbolCapitalized.innerHTML = jsnCnvrtr[i]["symbol"].toUpperCase();
//         symbolCapitalized.style.fontWeight = "bold";
//         symbolCapitalized.style.paddingRight = "15px";
//         x[0].appendChild(symbolCapitalized);

//         var CrrntCrypto = document.createElement("span");
//         CrrntCrypto.innerHTML = jsnCnvrtr[i]["name"];
//         x[0].appendChild(CrrntCrypto);
//        //x[0].innerHTML = imageOfCrypto;
//         x[1].innerHTML = jsnCnvrtr[i]["current_price"].toLocaleString("en-US", {
//           style: "currency",
//           currency: "USD",
//         });

//         if (jsnCnvrtr[i]["price_change_percentage_24h"].toFixed(2) > 0) {
//           x[2].style.color = "green";
//           x[2].innerHTML =
//             "+" + jsnCnvrtr[i]["price_change_percentage_24h"].toFixed(2) + "%";
//         } else {
//           x[2].style.color = "red";
//           x[2].innerHTML =
//             jsnCnvrtr[i]["price_change_percentage_24h"].toFixed(2) + "%";
//         }
//         var mktCap = "$ " + jsnCnvrtr[i]["market_cap"].toLocaleString();
//         x[3].innerHTML = mktCap;
//         //x[].innerHTML= "numbers";
//       }
//       trackerOfChanges++;
//       console.log(trackerOfChanges);
//     }
//   });

//   // xhr.open("GET", "https://coingecko.p.rapidapi.com/coins/list");
//   // xhr.setRequestHeader("x-rapidapi-key", "93da5c882bmshca883f546251ac6p1f0c49jsn63020d879234");
//   // xhr.setRequestHeader("x-rapidapi-host", "coingecko.p.rapidapi.com");
//   //console.log(arrWithObjElements);
//   if(trackerOfChanges >= 1)
//   {
//     getRqstUrl = "https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&ids=";
//   }
//   keyNames = Object.keys(arrWithObjElements);
//   console.log(keyNames);
//   keyNames.sort();
//   for (var cryptoNum = 0; cryptoNum < keyNames.length; cryptoNum++) {
//     if (cryptoNum < keyNames.length - 1) {
//       getRqstUrl += keyNames[cryptoNum] + "%2C";
//       console.log(getRqstUrl);
//     } else {
//       getRqstUrl += keyNames[cryptoNum];
//       console.log(getRqstUrl);
//     }
//   }

//   xhr.open("GET", getRqstUrl);
//   xhr.setRequestHeader("x-rapidapi-host", "coingecko.p.rapidapi.com");
//   xhr.setRequestHeader(
//     "x-rapidapi-key",
//     "93da5c882bmshca883f546251ac6p1f0c49jsn63020d879234"
//   );

//   xhr.send(data);

//   //   xhrCall2.open("GET", "https://coingecko.p.rapidapi.com/coins/ripple?localization=false");
//   // xhr.setRequestHeader("x-rapidapi-host", "coingecko.p.rapidapi.com");
//   // xhr.setRequestHeader("x-rapidapi-key", "93da5c882bmshca883f546251ac6p1f0c49jsn63020d879234");

//   // xhr.send(data);
// }

// function showCryptoPriceToDoc() {
//    var xrpPrice = document.getElementById("currentPriceOfXrp");
//    xrpPrice.innerHTML = jsnCnvrtr.ripple.usd;
// }
//showCryptoPriceToDoc();
// const CoinGecko = require("coingecko-api");
// const CoinGeckoClient = new CoinGecko();
// //const CoinGeckoClient = new CoinGecko();
// var func = async () => {
//   let data = await CoinGeckoClient.exchanges.fetchTickers("bitfinex", {
//     coin_ids: ["bitcoin"],
//   });
//   var _coinList = {};
//   var _datacc = data.data.tickers.filter((t) => t.target == "USD");
//   ["BTC"].forEach((i) => {
//     var _temp = _datacc.filter((t) => t.base == i);
//     var _res = _temp.length == 0 ? [] : _temp[0];
//     _coinList[i] = _res.last;
//   });
//   console.log(_coinList);
// };
// httpGet("https://www.coingecko.com/en/api/ping");

// var func = async() =>
// {

//     let data = await CoinGeckoClient.ping();
//     //let data = await CoinGeckoClient.coins.fetchTickers('bitcoin');
//     //console.log(data);
// }

// function readTextFile(file)
// {
//   const fs = require('fs');

// fs.readFile(file, (err, data) => {
//   if (err) throw err;

//   console.log(data.toString());
// })
// console.log(file);
//   var rawFile = new XMLHttpRequest();
//   rawFile.open("GET", file, false);
//   rawFile.onreadystatechange = function ()
//   {
//       if(rawFile.readyState === 4)
//       {
//           if(rawFile.status === 200 || rawFile.status == 0)
//           {
//               var allText = rawFile.responseText;
//               console.log(allText);
//           }
//       }
//   }
//   rawFile.send(null);
//}
var numcnvrtr;
//var stringExample = '{"decentraland": 35,"ripple": 50,"ethereum": 1}';
// window.onload = function changeCryptoAmts(fileToData)
// {
//   if(fileToData != undefined)
//   {
//     stringExample = fileToData;
//   }

// }
var createdFile;
//document.querySelector("#read-button").addEventListener("click",
//window.onload =
// function getFileInfo() {
//   //let file = document.querySelector("#file-input").files[0];
//   //let file = event.target.files[0];

//   // if(newUser == undefined)
//   // {
//     // if(createdFile != null)
//     // {
//     //   createdFile = fileName;
//     // }
//     // else
//     // {
//       createdFile = new File(
//         [stringExample],
//         "C:\\Users\\ajmik\\OneDrive\\Desktop\\Xander's Small Coding Projects 2022\\cryptoLiveFeed\\cryptoData.txt"
//       );
//       console.log(createdFile);
//     //}
//     // newUser = "newUser";
//   // }
//   // else
//   // {
//   //   readText("C:\\Users\\ajmik\\OneDrive\\Desktop\\Xander's Small Coding Projects 2022\\cryptoLiveFeed\\dadData.txt");
//   //   //createdFile = File("C:\\Users\\ajmik\\OneDrive\\Desktop\\Xander's Small Coding Projects 2022\\cryptoFeedTest2\\cryptoData.txt")
//   // }

//   //console.log(file.name);
//   let reader = new FileReader();
//   reader.onload = function (e) {
//     let text = e.target.result;
//     console.log(text);

//     jsnCnvrtr2 = JSON.parse(text);
//     console.log(jsnCnvrtr2);
//     console.log(jsnCnvrtr2["decentraland"]);

//     keyNames = Object.keys(jsnCnvrtr2);
//     console.log(keyNames);
//     keyValues = Object.values(jsnCnvrtr2);
//     console.log(keyValues);
//     //var entries = Object.entries(jsnCnvrtr2);
//     //console.log(entries);

//     numcnvrtr = Number(jsnCnvrtr2.ripple);

//     console.log(numcnvrtr);
//     getCryptoPrice(jsnCnvrtr2);
//   };
//   reader.readAsText(createdFile);
// };
// getFileInfo();



function goToNewPage(numOfCryptoSelect) {
  // window.location.href = "http://127.0.0.1:5500/indexcrypto.html/cryptoSpecific.html"
  // var url1 = new URL('/page', "http://127.0.0.1:5500/indexcrypto.html");
  // console.log(url1);
  // window.location.href = url1
  var url1 = new URL("localhost:3000/cryptoSpecific.ejs");
  var imgNames = document.getElementsByClassName('cryptoPicture');
  console.log(imgNames[numOfCryptoSelect].alt);
  var idOfCrypto = imgNames[numOfCryptoSelect].alt;
  //var lowercaseCrypto = (imgNames[numOfCryptoSelect].innerHTML).toLowerCase();

  url1.searchParams.set("cryptoName", idOfCrypto);

  var cryptoAmts = document.getElementsByClassName('cryptoNames');
  var cryptAmt = cryptoAmts[numOfCryptoSelect].innerText;
  url1.searchParams.set("cryptoAmt", cryptAmt);
  // for (var cryptoFinder = 0; cryptoFinder < keyNames.length; cryptoFinder++) {
  //   if (keyNames[cryptoFinder] == nameOfCryptoSelected) {
  //     url1.searchParams.set("cryptoAmt", keyValues[cryptoFinder]);
  //   }
  // }

  console.log(url1);
  // console.log(url1.href);
  var getQueryParam = url1.search;
  var endRes = getQueryParam.slice(12);
  console.log(endRes);
  console.log(url1.pathname.slice(4));
  window.location.href = url1.pathname.slice(4) + url1.search;
  //individualCrypto();
}

function searchForCryptos() {
  var input = document.getElementById("myInput");
  var filter = input.value.toUpperCase();
  var tableElement = document.getElementById("adjustingTable");
  // Grabs each row and uses for loop to go through each row and selects first td element which has the crypto name
  var tableRowElements = tableElement.getElementsByTagName("tr");
  for (
    var cryptoSearch = 1;
    cryptoSearch < tableRowElements.length;
    cryptoSearch++
  ) {
    var td = tableRowElements[cryptoSearch].getElementsByTagName("td")[0];
    var spanElements = td.getElementsByTagName("span")[1].innerText;
    if (td) {
      var txtValue = spanElements;
      if (txtValue.toUpperCase().indexOf(filter) == -1) {
        // tableRowElements[cryptoSearch].style.display = "";
        tableRowElements[cryptoSearch].style.display = "none";
      } else {
        tableRowElements[cryptoSearch].style.display = "";
      }
    }
    console.log(td.getElementsByTagName("span")[1].innerText);
  }
  //console.log(tableRowElement);
}

function changeFileData() {
  //Test different amounts of the crypto, successful but with the appended elemnts in the table it made it harder
  //stringExample = '{"decentraland": 100,"ripple": 100,"ethereum": 100}';

  //Test Different Cryptos
  stringExample = '{"terra-luna": 100,"ripple": 100,"ethereum": 100}';
  getFileInfo();
}
