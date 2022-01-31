// console.log('main js is worked')
// window.addEventListener('click', function (event){
//     if (event.target.classList.contains('block')) {
//         let block = event.target;
//         let columnId = block.getAttribute('id');
//         if (columnId === 'column-1') {
//             let innerColumn = document.getElementById('inner-column-1');
//             innerColumn.style.display = 'block';
//         }
//         if (columnId === 'column-2') {
//             let innerColumn = document.getElementById('inner-column-2');
//             innerColumn.style.display = 'block';
//         }
//         if (columnId === 'column-3') {
//             let innerColumn = document.getElementById('inner-column-3');
//             innerColumn.style.display = 'block';
//         }
//     }
// });
//
//
// window.addEventListener('click', function (event) {
//     if (event.target.classList.contains('btn')){
//         let fullBlock = document.querySelectorAll('.fullBlock');
//         fullBlock.forEach(function (item){
//             item.style.display='none';
//         })
//
//     }
//
// });
$(document).ready(function (){
    $('.block').hover(function (){
            let idS = $(this).attr('id');
            $('div[data-id='+idS+' ]').removeClass('hide').addClass('show');
        });
    });

    $('header, footer, .wrapper-0').hover(function (){
        $('.fullBlock').addClass('hide');
    });

    // $('.fullBlock').hover(function (){
    //     $(this).addClass('hide');
    //
    // });


// css:
// 1) opacity. непрозрачность. обратиться к элементу можем
// 2) visibility(colapse, hidden). collapse как d:none (применятся для перерасчета простр-ва в таблицах)
// 3) display: none. отображение. обратиться не можем. элемент пропадает из структуры.
// 4) display: grid
// 5) transform: translate X(Y)
// 6) transition. анимация (работа только со временем?).
// 7) backface-visibility. отвечает за отображение задних (невидимых при просмотре спереди) граней элемента.
//посмотреть как работает .on
//поработать с translate
//заполнить текстом блоки
