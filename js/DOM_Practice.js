// 1. When the box with the id of dbl-click-box is double-clicked, an alert should pop up with the text 'BOX DOUBLE-CLICKED!'

$('.dbl-click-box').dblclick(function (){
	alert('BOX DOUBLE-CLICKED!');
});

// 2. Clicking on the button with an id of dark-mode-btn toggles dark mode on and off. HINT: changes should be applied to the body of the HTML.

$('#dark-mode-btn').click(function (){
	$('body').toggleClass('dark-mode');
});

// 3. When the cursor hovers over the span with the id of uppercase (<span id="uppercase">), take the text of that span and display it, in lowercase, in the span with the id of lowercase (<span id="lowercase">).

$('#uppercase').hover(
	function () {
		var upper = $('#uppercase').html();
		$('#lowercase').html(upper.toLowerCase());
	},
	function (){
		$('#lowercase').html('');
	}
);

// 4. The span with an id of counter should increment by one every second.

let count = 0;
function showTime() {
	count += 1;
	$('#counter').html(count)
}

let display = setInterval(showTime, 1000);

// 5. When the user clicks on the button (<button id="list-chars-btn">), take any text the user has typed in the input field (<input id="characters">), and output each individual character as a separate list item within the unordered list (<ul id="characters-list">). Clicking the button multiple times should not append additional list items.

$('#list-chars-btn').click(function (e){
	e.preventDefault()
	let userInput = $('#characters').val()
	// console.log(userInput);
	let userArr = userInput.split('');
	// console.log(userArr);
	// console.log(userArr[3]);
	for (let i = 0; i < userArr.length; i++){
		$('#characters-list').append('<li>' + userArr[i] + '</li>');
	}
})

// 6. When the user clicks on the button (<button id="clean-animal-list-btn">), the text of each list item that has a class (<li class="animal-list-item">) should be concatenated to the list item that immediately follows it.

let string = $('.animal-list-item').next().html()
console.log(string);
$('#clean-animal-list-btn').click(function (){
	$('.animal-list-item').each(function (){
		console.log($(this).html());
		$(this).next().html(string + $(this).html())
		$(this).css('display', 'none')
	})
})

// 7. When hovering over the divs within the div with a class of hidden-letters, a letter will become visible in a span within the div being hovered over.

$('.hidden-letters').hover(
	function (){

	},
	function (){

	}
)