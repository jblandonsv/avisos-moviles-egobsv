var instituciones = new Array();
instituciones['ASAMBLEA']='http://www.asamblea.gob.sv/noticias/rss?com=1&Subject:list=Econom%C3%ADa%20y%20agricultura';
instituciones['ANDA']='http://www.anda.gob.sv/index.php?option=com_content&view=category&layout=blog&id=25&Itemid=76&format=feed&type=rss';
instituciones['ISSS']='http://www.isss.gob.sv/index.php?option=com_content&view=section&layout=blog&id=4&Itemid=76&format=feed&type=rss';
instituciones['MAG']='http://www.mag.gob.sv/index.php?option=com_content&view=category&id=25%3Aavisos-ciudadano&Itemid=76&layout=default&format=feed&type=rss';
instituciones['MOP']='http://www.mop.gob.sv/index.php?option=com_content&view=category&id=25&Itemid=76&format=feed&type=rss';
instituciones['PNC']='http://www.pnc.gob.sv/core/index.php/component/content/category/51?format=feed&type=rss';

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