function goToTop() {
  document.documentElement.scrollTop = 0; 
} 

function goTo(id) {
  document.getElementById(id).scrollIntoView(true);
}