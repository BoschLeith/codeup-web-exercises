var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");

var purple = function (){

	var listItems = document.getElementsByTagName("li");

	for (var i = 0; i < listItems.length; i++) {
		listItems[i].style.backgroundColor = "purple";
	}
}

button1.addEventListener("click", purple)

button2.addEventListener("click", function() {

	button1.removeEventListener("click", purple)

})