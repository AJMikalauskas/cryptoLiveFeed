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
var propertyValues;

// xmlHTTPRequest variables
var getRqstUrl = "https://coingecko.p.rapidapi.com/simple/price?ids=";
var symbolUrl = "https://coingecko.p.rapidapi.com/coins/";
const data = null;

const xhrCall2 = new XMLHttpRequest();
xhrCall2.withCredentials = false;

const xhr = new XMLHttpRequest();
xhr.withCredentials = false;

// window.onload = getFileInfo();

function getCryptoPrice(cryptosArr, cryptosAmt) {
  xhr.addEventListener("readystatechange", function () {
    if (this.readyState === this.DONE) {
      console.log(this.responseText);
      jsnCnvrtr = JSON.parse(this.responseText);
      //   console.log(jsnCnvrtr);
      //   console.log(jsnCnvrtr.ripple.usd);

      //   var cryptos = Object.keys(jsnCnvrtr);
      //   console.log(cryptos);

      for (
        var cryptoSelected = 0;
        cryptoSelected < cryptosArr.length;
        cryptoSelected++
      ) {
        var cnvrtToStringVal = +
          jsnCnvrtr[cryptosArr[cryptoSelected]]["usd"].toString();

        var withDollarSign = "$" + cnvrtToStringVal;
        document.getElementById(
          "currentPriceOf" + cryptosArr[cryptoSelected]
        ).innerHTML = withDollarSign;

        document.getElementById(
          "numberOf" + cryptosArr[cryptoSelected]
        ).innerHTML = cryptosAmt[cryptoSelected];

        var tokenToUsdConversion =
          "$" + cryptosAmt[cryptoSelected] * cnvrtToStringVal;
        document.getElementById(
          "total" + cryptosArr[cryptoSelected] + "ToUsd"
        ).innerHTML = tokenToUsdConversion;
        //moveAllElements();
      }
    }
  });

  // xhr.open("GET", "https://coingecko.p.rapidapi.com/coins/list");
  // xhr.setRequestHeader("x-rapidapi-key", "93da5c882bmshca883f546251ac6p1f0c49jsn63020d879234");
  // xhr.setRequestHeader("x-rapidapi-host", "coingecko.p.rapidapi.com");
  for (var cryptoNum = 0; cryptoNum < cryptosArr.length; cryptoNum++) {
    if (cryptoNum == cryptosArr.length - 1) {
      getRqstUrl += cryptosArr[cryptoNum] + "&vs_currencies=usd";
      console.log(getRqstUrl);
    } else {
      getRqstUrl += cryptosArr[cryptoNum] + "%2C";
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

    keyNames = Object.keys(jsnCnvrtr2);
    console.log(keyNames[0] + keyNames[1]);
    keyValues = Object.values(jsnCnvrtr2);
    //var entries = Object.entries(jsnCnvrtr2);
    //console.log(entries);

    numcnvrtr = Number(jsnCnvrtr2.ripple);

    console.log(numcnvrtr);
    getCryptoPrice(keyNames, keyValues);
  };
  reader.readAsText(createdFile);
};

function goToNewPage() {
  location.href = "http://127.0.0.1:5500/indexcrypto.html/newPage";
}
