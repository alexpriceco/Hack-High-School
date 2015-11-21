$( '.toggle-filters' ).click(function() {
    $('.filters').slideToggle('normal');
    $('.fa-cog').toggleClass('fa-spin');
    setTimeout(function(){
        $('.fa-cog').toggleClass('fa-spin');
    }, 700);
});
