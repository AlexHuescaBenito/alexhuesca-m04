/*
9.Crea un html amb un dropdownlist (amb diverses opcions) i un botó. Enllaça’l amb
un javascript i fes que el botó dispari un  “alert” on surti el nombre i els valors
dels elements del dropdownlist.
*/
function showAlert(){
    var list, i, options;
            list = document.getElementById("colorSelect");
            options = "";
            number = "1."
            for (i = 0; i < list.length; i++) {
               options = options + " \n " + list.options[i].text;
            }
    var number = document.getElementById("colorSelect").length;
    alert("Options in the DropDown list: "+number + "\n" +options);
}
