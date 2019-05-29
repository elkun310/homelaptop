//back2top  
// kéo xuống khoảng cách 500px thì xuất hiện nút Top-up
var offset = 500;
// thời gian di trượt 0.75s ( 1000 = 1s )
var duration = 750;
$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > offset)
            $('#__back2top').fadeIn(duration); else
            $('#__back2top').fadeOut(duration);
    });
    $('#__back2top').click(function () {
        $('body,html').animate({ scrollTop: 0 }, duration);
    });
});

//end back2top