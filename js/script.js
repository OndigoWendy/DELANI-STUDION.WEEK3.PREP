
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

(function($) {window.fnames = new Array(); window.ftypes = new Array();
    fnames[0]='EMAIL';
    ftypes[0]='email';
    fnames[1]='FNAME';
    ftypes[1]='text';
    fnames[2]='LNAME';
    ftypes[2]='text';
    fnames[3]='MMERGE3';
    ftypes[3]='text';}
    
    (jQuery));var $mcj = jQuery.noConflict(true);



