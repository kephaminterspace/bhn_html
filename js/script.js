
function resizeScreen() {
    if ($(window).width() <= 780) {
        $('#nav-moblie-default').show();
        $('.reg-now').css({"top": 0});
        $('.bao-hiem').css({"padding-top": "10px"});
        $('.text-bao-hiem').css({"width": "100%"});
        $('.table_phi').css({"padding-left": "0", "padding-right": "0"});
        $('.su-menh').css({
            "margin-bottom": "0",
            "margin-top": "0",
            "padding-left": "15px",
            "padding-right": "15px",
            "text-align": "center"
        });
    } else {
        $('#nav-moblie-default').hide();
        $('.reg-now').css({"top": "80px"});
        $('.bao-hiem').css({"padding-top": "200px"});
        $('.text-bao-hiem').css({"width": "70%"});
        $('.table_phi').css({"padding-left": "55px", "padding-right": "55px"});
        $('.su-menh').css({
            "margin-bottom": "200px",
            "margin-top": "0",
            "padding-left": "265px",
            "padding-right": "265px",
            "text-align": "center"
        });
    }

}

resizeScreen();
$(window).resize(function () {

    resizeScreen();
});