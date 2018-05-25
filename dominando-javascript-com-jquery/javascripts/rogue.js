
function moneyTextToFloat(text) {
	var cleanText = text.replace("R$", "").replace(",", ".");
	return parseFloat(cleanText);
}

function floatToMoneyText(value) {
	var text = (value < 1 ? "0" : "") + Math.floor(value * 100);
	text = "R$ " + text;
	return text.substr(0, text.length - 2) + "," + text.substr(-2);
}

function readTotal() {
	var total = document.getElementById('total');
	return moneyTextToFloat(total.innerHTML);
}

function writeTotal(value) {
	var total = document.getElementById("total");
	total.innerHTML = floatToMoneyText(value);
}

function calculateTotalProducts() {
	var produtos = document.getElementsByClassName("produto");

	var totalProdutos = 0;

	for (var i = 0; i < produtos.length; i++) {
		var priceElement = document.getElementsByClassName("price");
		var priceText = priceElement[i].innerHTML;
		var price = moneyTextToFloat(priceText);

		var quantityElement = document.getElementsByClassName("quantity");
		var quantityText = quantityElement[i].value;
		var quantity = moneyTextToFloat(quantityText);

		var subTotal = quantity * price;

		totalProdutos += subTotal;
	}
	return totalProdutos;
}

function quantidadeMudou() {
	writeTotal(calculateTotalProducts());
}

function onDocumentLoad() {

	var quantityElements = document.getElementsByClassName("quantity");

	for (var i = 0; i < quantityElements.length; i++) {
		quantityElements[i].onchange = quantidadeMudou;
	}

}

