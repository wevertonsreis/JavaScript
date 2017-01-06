
var peso = 50;
var altura = 0;

console.log(peso);
console.log(altura);

if (altura > 0) {

	var imc = peso / (altura * altura);
	console.log(imc);	

} else {
	console.log("Altura invalida para o calculo do IMC.");
}

