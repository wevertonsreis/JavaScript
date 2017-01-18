
var nome = document.getElementById("nome-1").textContent;
var peso = document.getElementById("peso-1").textContent;
var altura = document.getElementById("altura-1").textContent;

console.log(nome);
console.log(peso);
console.log(altura);

var passiente = {
	nome : nome,
	peso : peso,
	altura : altura
};

var idDoImc = document.getElementById("imc-1");

if (passiente.altura > 0) {

	var imc = passiente.peso / (passiente.altura * passiente.altura);
	
	console.log(imc);

	idDoImc.textContent = imc;
	
} else {
	console.log("Altura invalida para o calculo do IMC.");
}

