

var tabela = document.querySelector("table");
var botaoAdcionar = document.querySelector("#adicionar-paciente");
var campoNome = document.querySelector("#campo-nome"); 
var campoPeso = document.querySelector("#campo-peso");
var campoAltura = document.querySelector("#campo-altura");

botaoAdcionar.addEventListener("click", function(event){
 
	event.preventDefault();

	if(!validarCampos()) {
		return;
	}

	var pacienteNovo =  "<tr class='paciente'>" +
							"<td class='info-nome'>" + campoNome.value + "</td>" +
							"<td class='info-peso'>" + campoPeso.value + "</td>" +
							"<td class='info-altura'>" + campoAltura.value + "</td>" +
							"<td class='info-imc'></td>" +
				    	"</tr>";

	tabela.innerHTML += pacienteNovo;

	limparFormulario();

});

/**
 * Funcao responsavel por validar os campos do formulario
 */
function validarCampos() {

	if (campoNome.value == "") {
		alert("Informe o campo nome.");
		return false;
	}

	if (campoPeso.value == "") {
		alert("Informe o campo peso.");
		return false;
	}

	if (campoAltura.value == "") {
		alert("Informe o campo altura");
		return false;
	}
	return true;
}

/**
 * Funcao responsavel por limpar o formulario
 */
function limparFormulario() {
	campoNome.value = "";
	campoPeso.value = "";
	campoAltura.value = "";
}