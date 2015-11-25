//spins gear on filter expansion
$( '.toggle-filters' ).click(function() {
    $('.filters').slideToggle('normal');
    $('.fa-cog').toggleClass('fa-spin');
    setTimeout(function(){
        $('.fa-cog').toggleClass('fa-spin');
    }, 700);
});

//expands cards on mobile
$(document).on('click', '.card', function(){
    $("#"+this.id).find('.details').slideToggle('normal');
    $("#"+this.id).find('.upper-share').children().toggleClass('hidden-icons');
    $("#"+this.id).find('.fa-chevron-down').toggleClass('fa-rotate-180');
});


$(document).on('mouseover mouseout', '.card', function(){
    $("#"+this.id).find('.fa-chevron-down').toggleClass('fa-rotate-180');
});

/*$(document).ready(function() {
    $("#templates").load("template.html #cardWrapper",function(){
    var template = document.getElementById('cardWrapper').innerHTML;
    for(i=0; i<amtCards; i++) {
        (function(i) { // protects i in an immediately called function
            var jqxhr = $.getJSON("https://sheetsu.com/apis/a0252596", function(json)  {
                cardData = (json.result[i]);
                checkForCardData();
                console.log("success in the foor loop");
            });
        })(i);
    }
});
*/
