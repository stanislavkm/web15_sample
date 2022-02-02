
$(document).ready(function (){

    //------------РАБОТА С БЛОКАМИ-----------------------

    $('.block').hover(function (){
            let idS = $(this).attr('id');
            $('div[data-id='+idS+' ]').removeClass('hide').addClass('show');
        });

    $('header, footer, .wrapper-0').hover(function (){
        $('.fullBlock').addClass('hide');
    });

    //------------МОДАЛЬНОЕ ОКНО-----------------------

    $('.header_nav_button').click(function (){
        $('.hide_modal_window').fadeIn(1);//ПОЧЕМУ МОДАЛЬНОЕ ОКНО ПОЯВЛЯЕТСЯ НЕ ЧЕТКО?????
        return false;    //КАК ЭТО РАБОТАЕТ?
        });

    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            e.stopPropagation(); //ЗАЧЕМ ТУТ ЭТО?
            $('.hide_modal_window').fadeOut(1);
        }
    });
 //СКРЫТИЕ МОДАЛЬНОГО ОКНА ПО НАЖАТИЮ ВНЕ ЭТОГО ОКНА
 //    $('.hide_modal_window').click(function(e) {
 //        if ($(e.target).closest('.modal_project').length == 0) {
 //            $(this).fadeOut();
 //        }
 //    });
});


