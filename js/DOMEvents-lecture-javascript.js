var button1 = document.getElementById("btn1");
var button2 = document.getElementById("btn2");

button1.addEventListener("click", function (){
	// alert("Hello Quasar!");

	var listItems = document.getElementsByTagName("li");

	for (var i = 0; i < listItems.length; i++) {
		listItems[i].style.backgroundColor = "purple";
	}
})