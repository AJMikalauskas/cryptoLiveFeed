// function httpGet(theUrl)
// {
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
//     xmlHttp.send( null );
//     return xmlHttp.responseText;
// }

// JSON.pasre() variables
var jsnCnvrtr;
var jsnCnvrtr2;

// Key names and property values which are form the .txt file
var keyNames;
var keyValues;

// xmlHTTPRequest variables
var getRqstUrl = "https://coingecko.p.rapidapi.com/coins/markets?vs_currency=usd&ids=";
var symbolUrl = "https://coingecko.p.rapidapi.com/coins/";
const data = null;

// const xhrCall2 = new XMLHttpRequest();
// xhrCall2.withCredentials = false;

var keyNames;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

// window.onload = getFileInfo();

function getCryptoPrice(arrWithObjElements) {
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
      jsnCnvrtr = JSON.parse(this.responseText);
      //   console.log(jsnCnvrtr);
      //   console.log(jsnCnvrtr.ripple.usd);

      //   var cryptos = Object.keys(jsnCnvrtr);
      //   console.log(cryptos);

      //console.log(jsnCnvrtr[0]["current_price"]);


      /* Edit Carousel Elements */
      for (
        var cryptoSelected = 0;
        cryptoSelected < keyNames.length;
        cryptoSelected++
      ) {
        var cnvrtToStringVal = +
          jsnCnvrtr[cryptoSelected]["current_price"].toString();
          //["ripple"/"decentraland"/"ethereum"]["usd"]

        var withDollarSign = "$" + cnvrtToStringVal;
        document.getElementById(
          "currentPriceOf" + jsnCnvrtr[cryptoSelected]["id"]
        ).innerHTML = withDollarSign;

        document.getElementById(
          "numberOf" + jsnCnvrtr[cryptoSelected]["id"]
        ).innerHTML = arrWithObjElements[jsnCnvrtr[cryptoSelected]["id"]];

        var tokenToUsdConversion =
          "$" + arrWithObjElements[jsnCnvrtr[cryptoSelected]["id"]] * cnvrtToStringVal;
        document.getElementById(
          "total" + jsnCnvrtr[cryptoSelected]["id"] + "ToUsd"
        ).innerHTML = tokenToUsdConversion;
      }

      
    }
  });

  // xhr.open("GET", "https://coingecko.p.rapidapi.com/coins/list");
  // xhr.setRequestHeader("x-rapidapi-key", "93da5c882bmshca883f546251ac6p1f0c49jsn63020d879234");
  // xhr.setRequestHeader("x-rapidapi-host", "coingecko.p.rapidapi.com");
  //console.log(arrWithObjElements);
  keyNames = Object.keys(arrWithObjElements);
  console.log(keyNames);
  for (var cryptoNum = 0; cryptoNum < keyNames.length; cryptoNum++) {
    if (cryptoNum == keyNames.length - 1) {
      getRqstUrl += keyNames[cryptoNum];
      console.log(getRqstUrl);
    } else {
      getRqstUrl += keyNames[cryptoNum] + "%2C";
      console.log(getRqstUrl);
    }
  }

  xhr.open("GET", getRqstUrl);
  xhr.setRequestHeader("x-rapidapi-host", "coingecko.p.rapidapi.com");
  xhr.setRequestHeader(
    "x-rapidapi-key",
    "93da5c882bmshca883f546251ac6p1f0c49jsn63020d879234"
  );

  xhr.send(data);

//   xhrCall2.open("GET", "https://coingecko.p.rapidapi.com/coins/ripple?localization=false");
// xhr.setRequestHeader("x-rapidapi-host", "coingecko.p.rapidapi.com");
// xhr.setRequestHeader("x-rapidapi-key", "93da5c882bmshca883f546251ac6p1f0c49jsn63020d879234");

// xhr.send(data);
}

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

var numcnvrtr;
var stringExample = '{"decentraland": 35,"ripple": 50,"ethereum": 1}';
//document.querySelector("#read-button").addEventListener("click",
window.onload = function getFileInfo(event) {
  //let file = document.querySelector("#file-input").files[0];
  //let file = event.target.files[0];

  var createdFile = new File(
    [stringExample],
    "C:\\Users\\ajmik\\OneDrive\\Desktop\\Xander's Small Coding Projects 2022\\cryptoFeedTest2\\cryptoData.txt"
  );
  console.log(createdFile);

  //console.log(file.name);
  let reader = new FileReader();
  reader.onload = function (e) {
    let text = e.target.result;
    console.log(text);

    jsnCnvrtr2 = JSON.parse(text);
    console.log(jsnCnvrtr2);
    console.log(jsnCnvrtr2["decentraland"]);

    // keyNames = Object.keys(jsnCnvrtr2);
    // console.log(keyNames);
    // keyValues = Object.values(jsnCnvrtr2);
    // console.log(keyValues);
    //var entries = Object.entries(jsnCnvrtr2);
    //console.log(entries);

    numcnvrtr = Number(jsnCnvrtr2.ripple);

    console.log(numcnvrtr);
    getCryptoPrice(jsnCnvrtr2);
  };
  reader.readAsText(createdFile);
};

function goToNewPage(nameOfCryptoSelected) {
  // window.location.href = "http://127.0.0.1:5500/indexcrypto.html/cryptoSpecific.html"
  // var url1 = new URL('/page', "http://127.0.0.1:5500/indexcrypto.html");
  // console.log(url1);
  // window.location.href = url1
  var url1 = new URL("http://127.0.0.1:5500/cryptoSpecific.html");
  url1.searchParams.set("cryptoName", nameOfCryptoSelected);

  for(var cryptoFinder = 0; cryptoFinder < keyNames.length; cryptoFinder++)
  {
  if(keyNames[cryptoFinder] == nameOfCryptoSelected)
  {
    url1.searchParams.set("cryptoAmt", keyValues[cryptoFinder]) 
  }
  }

  console.log(url1);
  // console.log(url1.href);
  var getQueryParam = url1.search;
  var endRes = getQueryParam.slice(12);
  console.log(endRes);
  console.log(url1.pathname);
  window.location.href = url1.pathname + url1.search;
  //individualCrypto();
}
//goToNewPage();


function adjustTable()
{
  console.log(document.getElementById('adjustingTable').rows)
  var x = document.getElementById('adjustingTable').rows[0].cells;
  x[0].innerHTML= "numbers";
}