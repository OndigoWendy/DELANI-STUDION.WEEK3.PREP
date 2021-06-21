


$('.switch').hover(function() {
    $(this).closest('.showWords').hide();
    $(this).next('div').closest('.portfolioParagraph').show();
}, function() {
    $(this).next('div').closest('.portfolioParagraph').hide();
    $(this).closest('.showWords').show();
});



