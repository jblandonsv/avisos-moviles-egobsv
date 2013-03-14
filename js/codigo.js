$(document).on('ready',inicio);

function inicio(){

	$('#instituciones').on('change',cargarRss);
	
}

function cargarRss()
{

	var rssId = $('#instituciones option:selected').val();
	var rssUrl =  instituciones[rssId];

	if(rssUrl!='')
	{
		$("#feedSection").html('Cargando ...');
		$("#feedSection").rssfeed(rssUrl,
		{limit:5});
	}else{
		$("#feedSection").html('<span class="no-encontrado">No se tiene registrado un recursos RSS en la institución, si eres el encargado del sitio, mándanos un email con el RSS para que lo añadamos o Contribuye con nosotros en nuestro repositorio :D </span>');
	}
	

}