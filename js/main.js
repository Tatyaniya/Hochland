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
        $( ".top-menu" ).animate({
            display: "flex",
            height: "toggle"
          }, 500, function() {
          });
    });

    $('.victors__rollup_1').click(function(){
        $( ".victors__overlay_1" ).animate({
            display: "table",
            height: "toggle"
        }, 300, function() {
        });
        setTimeout(function () {
            $( ".victors__rol-text1" ).toggleClass('victors__rol-text--r1');
        }, 250);
    });

    $('.victors__rollup_2').click(function(){
        $( ".victors__overlay_2" ).animate({
            display: "table",
            height: "toggle"
        }, 300, function() {
        });
        setTimeout(function () {
            $( ".victors__rol-text2" ).toggleClass('victors__rol-text--r2');
        }, 250);
    });




    $('.btn_doc').click(function(){
        $('.form_docs').css('display','block');
    });
    $('.form_docs .btn_close').click(function(){
        $('.form_docs').css('display','none');
    });



    $('.check-upload__btn-close, .check-upload_bg1').click(function(){
        $('.check-upload_bg, .check-upload_bg1').css('display','none');
    });

    $('.action-info__link_upload-check').click(function(e){
        e.preventDefault();
        $('.check-upload_bg, .check-upload_bg1').css('display','flex');
    });

    // modal confirmation of registration

    $('.confirmation, .confirmation__close').click(function(){
        $('.confirmation').css('display','none');
    });

    $('.form__submit').click(function(e){
        e.preventDefault();
        $('.confirmation').css('display','flex');
    });

    // description sertificates

    $('.check-description, .check-description-close').click(function(){
        $('.check-description').css('display','none');
    });

    $('.cert-list__item').click(function(e){
        e.preventDefault();
        $('.check-description').css('display','flex');
    });

    

    $('.check-desc__btn-close').click(function(){
        $('.check-desc_bg').css('display','none');
    });


    $('.view-info .view-info__link:nth-child(2)').click(function(e){
        e.preventDefault();
        $(this).addClass('view-info__link_current');
        $('.uploads-checks').css('display', 'block');
        $('.detail-balance').css('display', 'none');
        $('.view-info .view-info__link:first-child').removeClass('view-info__link_current');
    });

    $('.view-info .view-info__link:first-child').click(function(e){
        e.preventDefault();
        $(this).addClass('view-info__link_current');
        $('.detail-balance').css('display', 'block');
        $('.uploads-checks').css('display', 'none');
        $('.view-info .view-info__link:nth-child(2)').removeClass('view-info__link_current');
    });



    $('.btn_doc-feedback').click(function(e){
        e.preventDefault();
        $(this).addClass('link-active');
        $('.form_fdback').css('display', 'none');
        $('.form_lk-fback').css('display', 'block');
        $('.wr-btns a:nth-child(2)').removeClass('link-active');
    });



    $('.btn_feedback').click(function(e){
        e.preventDefault();
        $(this).addClass('link-active');
        $('.form_fdback').css('display', 'block');
        $('.form_lk-fback').css('display', 'none');
        $('.wr-btns a:first-child').removeClass('link-active');
    });






});