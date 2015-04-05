var jsq3 = function ()
{
	var table = document.getElementById("myTable");
    var row = table.insertRow(1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
	var cell3 = row.insertCell(2);
	var cell4 = row.insertCell(3);
    cell1.innerHTML = document.getElementById("input1").value;
	document.getElementById("input1").value ="";
    cell2.innerHTML = document.getElementById("input2").value;
	document.getElementById("input2").value="";
	cell3.innerHTML = document.getElementById("input3").value;
	document.getElementById("input3").value="";
	cell4.innerHTML = document.getElementById("input4").value;
	document.getElementById("input4").value="";
	var attr = document.createAttribute("colspan");
    attr.value = "2";
    var t = document.getElementsByTagName("TD")[7];
    t.setAttributeNode(attr); 
}