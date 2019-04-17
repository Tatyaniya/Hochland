$(function () {

    // tabs
    
    $('.tabs__link').click(function(){
        let linkActive = document.querySelectorAll('.tabs__item');

        for (var j = 0; j < linkActive.length; j++) {
            linkActive[j].classList.remove('tabs__item--active');
        }
        $(this).parent().addClass('tabs__item--active');

        switch_tabs($(this));
    });
    
    function switch_tabs(obj) {
        let tabActive = document.querySelectorAll('.tabs__cont');
      
        for (var i=0; i < tabActive.length; i++) {
            tabActive[i].classList.remove('tabs__cont--active');
        }

        let id = obj.attr('rel');
        $('#'+id).addClass('tabs__cont--active');
    }

});