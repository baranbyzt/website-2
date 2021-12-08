

$(function () {

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 100);


});




document.getElementById("burger_menu_item").onclick = function() {my1Function()};
function my1Function( s ) {
document.getElementById("slider_menu").style.visibility = "visible";

}

document.getElementById("back_font").onclick = function() {my2Function()};
function my2Function( s ) {
	document.getElementById("slider_menu").style.visibility = "hidden";
}







