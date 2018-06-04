
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
	var total = $("#total").text();
	return moneyTextToFloat(total);
}

function writeTotal(value) {
	var valueText = floatToMoneyText(value);
	$("#total").text(valueText);
}

function calculateTotalProducts() {

	var produtos = $(".produto");

	var totalProdutos = 0;

	$(produtos).each(function(pos, produto) {
		var $produto = $(produto);

		var price = moneyTextToFloat($produto.find(".price").text());
		var quantity = moneyTextToFloat($produto.find(".quantity").val());

		var subTotal = quantity * price;

		totalProdutos += subTotal;

	});

	return totalProdutos;
}

$(document).ready(function () {

	$(".quantity").change(function(){
		writeTotal(calculateTotalProducts());
	});
	
});

