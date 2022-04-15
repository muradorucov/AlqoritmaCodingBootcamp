/**
 * An array of data on cryptocurrency quotes
 * name - currency name,
 * ticker - abbreviation,
 * value - the current price value,
 * change - change in the last 24 hours.
 */
document.write("<table border=1 width=500>");
document.write("<tr>");
document.write("<th>" + 'Name' + "</th>" + "<th>" + 'Ticker' + "</th>" + "<th>" + 'Value' + "<th>" + 'Change' + "</th>");
document.write("</tr>");
document.write("</table>");

const elemenTable = document.querySelector('table');
for (let j = 0; j < data.length; j++) {
    const createTr = document.createElement('tr');
    elemenTable.append(createTr);
}
const elemenTr = document.querySelectorAll('tr');
for (let i = 1; i < 5; i++) {
    let createTd = document.createElement('td');
    elemenTr[i].append(createTd);
};

const data = [
    { "name": "Bitcoin", "ticker": "BTC", "value": "9685", "change": "2.83%" },
    { "name": "Ethereum", "ticker": "ETH", "value": "210.5", "change": "6.17%" },
    { "name": "Ripple", "ticker": "XRP", "value": "0.2812", "change": "2.47%" },
    { "name": "Bitcoin Cash", "ticker": "BCH", "value": "441.4", "change": "5.01%" },
    { "name": "Bitcoin SV", "ticker": "BSV", "value": "303.17", "change": "5.53%" },
    { "name": "Litecoin", "ticker": "LTC", "value": "74.935", "change": "4.25%" },
    { "name": "Tether", "ticker": "USDT", "value": "0.9994", "change": "-1.7%" },
    { "name": "EOS", "ticker": "EOS", "value": "4.6161", "change": "3.15%" },
    { "name": "Binance Coin", "ticker": "BNB", "value": "19.824", "change": "-3.82%" },
    { "name": "Cardano", "ticker": "ADA", "value": "0.060389", "change": "2.93%" },
    { "name": "Tezos", "ticker": "XTZ", "value": "2.1247", "change": "6.12%" },
    { "name": "Ethereum Classic", "ticker": "ETC", "value": "12.5988", "change": "4.09%" },
    { "name": "Stellar", "ticker": "XLM", "value": "0.07034", "change": "-4.10%" },
    { "name": "Monero", "ticker": "XMR", "value": "79.523", "change": "3.45%" },
    { "name": "TRON", "ticker": "TRX", "value": "0.020881", "change": "5.21%" }
];

const td = document.querySelectorAll('td');

data.forEach((item, index) => {
    td[0].append(item.name);
    td[1].append(item.ticker);
    td[2].append(item.value);
    td[3].append(item.change);


});