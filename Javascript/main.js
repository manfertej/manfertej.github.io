function goToTop() {
  document.documentElement.scrollTop = 0; 
} 

function goTo(id) {
  document.getElementById(id).scrollIntoView(true);
}


function includeFile() {

	let file, request;

	const elements = document.getElementsByName("component");
	elements.forEach(element => {
		file = element.getAttribute("file");
		request = new XMLHttpRequest();
		request.open("GET", "./Components/"+file)
		request.send();

	});
}