$(document).on('ready',inicio);

function inicio(){

	$('#buscar_button').on('click',cargarRss);
	
}

function cargarRss()
{

	var rssId = $('#instituciones option:selected').val();
	//Cantidad de Feeds
	var limiteFeeds = $('#cantidad_feeds').val();
	limiteFeeds = parseInt(limiteFeeds);
	//Ordenamiento por fecha
	var opcionOrdenamiento = $('#sortByDate option:selected').val();
	console.log('orden = ' + opcionOrdenamiento);
	var rssUrl =  instituciones[rssId];

	if(rssUrl!='')
	{
		$("#feedSection").html('Cargando ...');
		$("#feedSection").rssfeed(rssUrl,
		{
			limit:limiteFeeds
		});
	}else{
		$("#feedSection").html('<span class="no-encontrado">No se tiene registrado un recursos RSS en la institución, si eres el encargado del sitio, mándanos un email con el RSS para que lo añadamos o Contribuye con nosotros en nuestro repositorio :D </span>');
	}
	

}