console.log("inicio del programa");
function printList(lista)
{
	var listhtml = '<ol>';
	for (var i = 0; i <lista.length; i ++)
	{
		listhtml += '<li>'+ lista[i] + '</li>';
}
	listhtml += '</ol>'; 
print(listhtml);
}
function print(html)
{
	document.write(html);
}
var productos = [];
productos.push("tv");
productos.push("cocina");
	productos.push("lavadora");
		productos.push("impresora");
		productos.push("computadora");
		
		while (true)
		{
			var prodSeatch = prompt ("ingrese el poducto a buscar")
			if (prodSeatch == "q")
		{
			break;
		}
			else if (prodSeatch == "lista")
			{
				printList(productos);
		}
else
{
	var encontrado = productos.indexOf(prodSeatch);
	if (encontrado >= 0)
	{
		alert ("Producto en stock");
	}
	else if (encontrado < 0)
	{
		alert ("Producto no existe");
	}
	}
}


console.log ("programa completo");

