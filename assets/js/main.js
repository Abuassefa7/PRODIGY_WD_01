/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

/* Menu show */
if (navToggle) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

/* Menu hidden */
if (navClose) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}

function changeBackgroundColor() {
	var scrollTop = window.scrollY || document.documentElement.scrollTop;
	var scrollPercentage =
		(scrollTop / (document.documentElement.scrollHeight - window.innerHeight)) *
		100;

	// Change background color based on scroll percentage
	if (scrollPercentage < 25) {
		document.body.style.backgroundColor = "#ccffcc"; // Light green
	} else if (scrollPercentage < 50) {
		document.body.style.backgroundColor = "#ffffcc"; // Light yellow
	} else if (scrollPercentage < 75) {
		document.body.style.backgroundColor = "#ffcccc"; // Light red
	} else {
		document.body.style.backgroundColor = "#ccccff"; // Light blue
	}
}

// Add scroll event listener to trigger background color change
window.addEventListener("scroll", changeBackgroundColor);
