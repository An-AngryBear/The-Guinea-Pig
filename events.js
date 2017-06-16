/*You'll be using element.classList to manipulate the CSS classes on elements.*/

const outputTarget = document.getElementById("output-target"),
	h1Element = document.getElementById("page-title"),
	inputField = document.getElementById("keypress-input"),
	addColorBtn = document.getElementById("add-color"),
	makeLargeBtn = document.getElementById("make-large"),
	addBorderBtn = document.getElementById("add-border"),
	addRoundingBtn = document.getElementById("add-rounding"),
	guineaPig = document.getElementById("guinea-pig");

/*When any section is clicked the output target text should be "You clicked on the {text of the section} section"*/
window.addEventListener("click", function() {
	if (event.target.classList.contains("article-section")) {
		outputTarget.innerHTML = `You clicked on the ${event.target.innerHTML} section`;
	};
})

/*When the mouse is over the h1 tag, the output element should contain the text "You moved your mouse over the header".*/
h1Element.addEventListener("mouseover", function() {
	outputTarget.innerHTML = "You moved your mouse over the header";
})

/*When the mouse leaves the h1 tag, the output element should contain the text "You left me!!".*/
h1Element.addEventListener("mouseleave", function() {
	outputTarget.innerHTML = "You left me!!";
})

/*When you type characters into the input field, the output element should mirror the text in the input field.*/
inputField.addEventListener("keyup", function() {
	outputTarget.innerHTML = inputField.value;
})

/*When you click the "Add color" button, the guinea-pig element's text color should change to blue.*/
addColorBtn.addEventListener("click", function() {
	guineaPig.classList.toggle("colorize");
})

/*When you click the "Hulkify" button, the guinea-pig element's font size should become much larger.*/
makeLargeBtn.addEventListener("click", function() {
	guineaPig.classList.toggle("hulkify");
})

/*When you click the "Capture it" button, the guinea-pig element should have a border added to it.*/
addBorderBtn.addEventListener("click", function() {
	guineaPig.classList.toggle("capture");
})

/*When you click the "Rounded" button, the guinea-pig element's border should become rounded.*/
addRoundingBtn.addEventListener("click", function() {
	guineaPig.classList.toggle("rounding");
})