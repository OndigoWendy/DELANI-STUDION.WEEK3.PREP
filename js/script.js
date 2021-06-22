
// USER INTERFACE LOGIC
function showMessage(){
    alert("Hello!,Your Message has been received");
}

$('.switch').hover(function() {
    $(this).closest('.showWords').hide();
    $(this).next('div').closest('.portfolioParagraph').show();
}, function() {
    $(this).next('div').closest('.portfolioParagraph').hide();
    $(this).closest('.showWords').show();
});





