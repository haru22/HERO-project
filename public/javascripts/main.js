 window.sr = ScrollReveal();
  sr.reveal('.animate-image', { origin: 'bottom', easing: 'ease', duration: 1000, distance: '100px', opacity: 0, scale: 1, mobile: false});
   sr.reveal('.animate-text', { origin: 'bottom', easing: 'ease', duration: 1000, distance: '100px', opacity: 0, scale: 1, delay: 600, mobile: false});
  

setTimeout(sr.reveal,3000);


/* fade in pictures index.html*/
$(window).on('load',function(){

	// fade-in
    $(window).scroll(function (){
        $('.fade-in').each(function(){
            var POS = $(this).offset().top;  //fade-inがついている要素の位置
            var scroll = $(window).scrollTop();  //スクロール一
            var windowHeight = $(window).height();  //ウィンドウの高さ

            if (scroll > POS - windowHeight + windowHeight/5){
                $(this).css("opacity","1" );
            } else {
                $(this).css("opacity","0" );
            }
        });
    });
});
