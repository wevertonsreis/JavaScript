
var servico = "http://localhost:9090/api/tarefas/";

$(function() {

	$.getJSON(servico)
		.done(carregarTarefasDone)
		.fail(carregarTarefasFail);

	function carregarTarefasDone(tarefas) {
		$(tarefas).each(function(pos, tarefa) {
			addTarefa(tarefa);
		});
	}

	function carregarTarefasFail(data) {
		alert("Falha ao buscar as tarefas: " + data.responseText);
	}

	var $lastClicked;

	$("#tarefa").keydown(onTarefaKeydown);
	$(".tarefa-delete").click(onTarefaDeleteClick);
	$(".tarefa-item").click(onTarefaItemClick);

	function onTarefaDeleteClick () {
		console.log('chamando onTarefaDeleteClick');

		$(this).parent(".tarefa-item")
			.off("click")
			.hide('slow', function(){
				$(this).remove();
		});
	}

	function onTarefaItemClick () {
		console.log('chamando onTarefaItemClick');

		if (!$(this).is($lastClicked)) {

			if($lastClicked !== undefined) {
				savePendingEdition($lastClicked);
			}

			$lastClicked = $(this);

			var text = $lastClicked.children(".tarefa-texto").text();
			var inputText = "<input type='text' class='tarefa-edit' value='"+ text +"' >";

			$lastClicked.html(inputText);

			$(".tarefa-edit").keydown(onTarefaEditKeydown);
		}
	}

	function onTarefaEditKeydown () {
		console.log('chamando onTarefaEditKeydown');

		if (event.which === 13) {
			savePendingEdition($lastClicked);
			$lastClicked = undefined;
		}
	}

	function savePendingEdition ($tarefa) {
		console.log('chamando savePendingEdition');

		var text = $tarefa.children(".tarefa-edit").val();
		$tarefa.empty();

		$tarefa.append($("<div />").addClass("tarefa-texto").text(text))
			.append($("<div />").addClass("tarefa-delete"))
			.append($("<div />").addClass("clear"));

		$(".tarefa-delete").click(onTarefaDeleteClick);
		$(".tarefa-item").click(onTarefaItemClick);
	}

	function onTarefaKeydown (event) {
		if (event.which === 13) {
			var tarefa = {
				texto: $("#tarefa").val(),
				usuario: "teste"
			};

			$.ajax({
				type: "POST",
				url: servico,
				data: JSON.stringify(tarefa),
				contentType: 'application/json',
				dataType: "json"
			})
			.done(salvarTarefaDone)
			.fail(salvarTarefaFail);	

		}
	}

	function salvarTarefaDone(data) {
		alert("Tarefa salva com sucesso.");
		addTarefa(data);
	}

	function salvarTarefaFail(data) {
		alert("Falha ao salvar a tarefa: " + data.responseText);
	}

	function addTarefa (tarefa) {
		var $tarefa = $("<div />").addClass("tarefa-item")
			.append($("<input type='hidden' value='" + tarefa.id +"' />").addClass("tarefa-id"))
			.append($("<div />").addClass("tarefa-texto").text(tarefa.texto))
			.append($("<div />").addClass("tarefa-delete"))
			.append($("<div />").addClass("clear"));
		
		$("#tarefa-lista").append($tarefa);

		$(".tarefa-delete").click(onTarefaDeleteClick);
		$(".tarefa-item").click(onTarefaItemClick);
	}

});