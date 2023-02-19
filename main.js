fetch("./currencies.xml")
  .then((response) => response.text())
  .then((data) => renderRates(data));

function renderRates(data) {
  const parser = new DOMParser();
  const xml = parser.parseFromString(data, "text/xml");

  const usd = xml.getElementsByTagName("Valute")[4];
  const usdRate = usd.querySelector("Value").innerHTML;

  const eur = xml.getElementsByTagName("Valute")[5];
  const eurRate = eur.querySelector("Value").innerHTML;

  const usdElement = document.getElementById("usd");
  const eurElement = document.getElementById("eur");

  usdElement.innerText = usdRate;
  eurElement.innerText = eurRate;
}
