$(document).on('ready',inicio);

function inicio(){

	$("#feedSection").rssfeed('http://www.anda.gob.sv/index.php?option=com_content&view=category&layout=blog&id=25&Itemid=76&format=feed&type=rss',
		{limit:5});
	
}