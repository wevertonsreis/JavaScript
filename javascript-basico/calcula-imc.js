
var pacientesTrs = document.getElementsByClassName("paciente");

for (var i = 0; i < pacientesTrs.length; i++) {
	
	var trAtual = pacientesTrs[i];

	var nome = trAtual.getElementsByClassName("info-nome")[0];
	var peso = trAtual.getElementsByClassName("info-peso")[0];
	var altura = trAtual.getElementsByClassName("info-altura")[0];

	var paciente = {
		nome : nome.textContent,
		peso : peso.textContent,
		altura : altura.textContent
	};

	if (paciente.altura > 0) {

		var imc = trAtual.getElementsByClassName("info-imc")[0];
	
		imc.textContent = paciente.peso / (paciente.altura * paciente.altura);

	} else {
		console.log("Altura invalida para o calculo do IMC.");
	}
	
}

var frutas = ["banana","maçã", "uva", "laranja", "pêssego", "limão", "melão", "melancia"];
var posicao = 0;

while( posicao < frutas.length ){
    var frutaAtual = frutas[posicao];
    console.log(frutaAtual);
    posicao++;
}

