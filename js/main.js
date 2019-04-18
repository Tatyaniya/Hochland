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

    // man / woman

    $('.tabs__item--man').click(function(){
        $('.reg-login__box').addClass('reg-login__box--man');
    });

    $('.tabs__item--woman').click(function(){
        $('.reg-login__box').removeClass('reg-login__box--man');
    });

    // humburger

    $('.humburger').click(function(){
        //$('.top-menu__list').toggleClass('top-menu__list--open');
        $( ".top-menu__list" ).animate({
            display: "flex",
            height: "toggle"
          }, 250, function() {
          });
    });      

});