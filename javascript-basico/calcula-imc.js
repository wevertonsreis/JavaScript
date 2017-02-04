var botao = document.getElementById("calcula-imcs");

botao.addEventListener("click", function(){

	var pacientesTrs = document.getElementsByClassName("paciente");
	percorreArray(pacientesTrs, imprimeEModificaTdDeImc);

});


function imprimeEModificaTdDeImc(trPaciente) {
		
	var paciente = montaPaciente(trPaciente);
	var trImc = trPaciente.getElementsByClassName("info-imc")[0];
	var imc = paciente.pegaImc();
		
	trImc.textContent = imc;
	
}

function montaPaciente(pacienteTr) {

	var nome = pacienteTr.getElementsByClassName("info-nome")[0];
	var peso = pacienteTr.getElementsByClassName("info-peso")[0];
	var altura = pacienteTr.getElementsByClassName("info-altura")[0];

	var paciente = {
		nome : nome.textContent,
		peso : peso.textContent,
		altura : altura.textContent,
		pegaImc : function(){
			if (this.altura > 0) {
				return this.peso / (this.altura * this.altura);
			} else {
				console.log("Altura invalida para o calculo do IMC.");
			}
		}
	};	

	return paciente;

}
