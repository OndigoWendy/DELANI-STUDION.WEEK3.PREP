

$('.switch').hover(function() {
    $(this).closest('.functionBlock').hide();
    $(this).next('div').closest('.portfolioParagraph').show();
}, function() {
    $(this).next('div').closest('.portfolioParagraph').hide();
    $(this).closest('.functionBlock').show();
});


$('.switch').hover(function() {
    $(this).closest('.avg_words').hide();
    $(this).next('div').closest('.avg_num').show();
}, function() {
    $(this).next('div').closest('.avg_num').hide();
    $(this).closest('.avg_words').show();
});