$(document).ready(function() {
    $("#toggle_btn").click(function(){
        $(".menu_bar").toggleClass("show");
        $("#toggle_btn").toggleClass("active");
    })
})