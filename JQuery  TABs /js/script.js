$(document).ready(function(){

    $('.tab_content').hide();
    $('.tab_content:first-child').show();


    $('.tabs li').click(function(){
        $('.tabs li').removeClass('active');
        $(this).addClass('active');


        const now_tab = $(this).attr('data-attr');
        $('.tab_content').hide();
        $('.' + now_tab).show();

    });
});