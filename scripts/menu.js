/*
* Mostra il sotto-menu specificato dal parametro e nasconde tutti gli altri
*/
function showMenu(parMenuListId)
{
	var tMenuList;
	var tDisplayStyle;

	for (var tMenuListId = 1; tMenuListId <= 5; tMenuListId++)
	{
		tDisplayStyle = (tMenuListId == parMenuListId) ? 'block' : 'none';
		tTextDecoration = (tMenuListId == parMenuListId) ? 'underline' : 'none';
		if (document.getElementById('menuList' + tMenuListId))
		{	
			document.getElementById('menuList' + tMenuListId).style.display = tDisplayStyle;
			document.getElementById('menuItem' + tMenuListId).style.textDecoration = tTextDecoration;
		}
	}
}

window.onload = 'showMenu(0)';