/*
8.Crea un html amb un dropdownlist (amb diverses opcions) i un botó. Enllaça’l amb
un javascript i fes que el botó elimini el valor seleccionat del dropdownlist.
*/
function removecolor()
{
let list = document.getElementById("colorSelect");
list.remove(list.selectedIndex);
}           