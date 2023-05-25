// Selection of id's and classes from html document
const bgclr = document.getElementById("clr");
const headingg = document.querySelector(".head");

// Here we are adding event listener which
// is used to detect the mouse movement
bgclr.addEventListener("input", () => {
// This updates the background color which is
// picked by the user from the picker
document.body.style.backgroundColor = bgclr.value;

// This is the conditional statement that is used
// to change the text color from BLACK to WHITE
// when the background color changes to dark!
if (
	bgclr.value.includes("00") ||
	bgclr.value.includes("0a") ||
	bgclr.value.includes("0b") ||
	bgclr.value.includes("0c") ||
	bgclr.value.includes("0d") ||
	bgclr.value.includes("0e") ||
	bgclr.value.includes("0f")
) {
	headingg.style.color = "#fff";
} else {
	headingg.style.color = "#000";
}
});
