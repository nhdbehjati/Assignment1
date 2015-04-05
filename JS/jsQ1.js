var pressed = false;

var down = function(event , self)
{
	var code = event.keyCode || event.which;
		if( code==65 || code==85 || code==79 || code==67 || code==78 )
			{
				document.getElementById(self).value = " ";
				if(!pressed)
				{
					pressed = true ;
					var warning = document.createElement("DIV");
					warning.innerHTML = "Don't use A,O,U,N,C" ;
					var tab = document.getElementById("table");
					tab.insertBefore(warning,tab.childNodes[0]);
				}
			}
}