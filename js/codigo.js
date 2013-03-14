$(document).on('ready',inicio);

function inicio(){

	$('#instituciones').on('change',cargarRss);
	
}

function cargarRss()
{

	var rssId = $('#instituciones option:selected').val();
	var rssUrl =  instituciones[rssId];

	$("#feedSection").html('Cargando ...');
	$("#feedSection").rssfeed(rssUrl,
		{limit:5});

}