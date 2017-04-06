$(document).ready(function () {

    $('.country').styler();

    $('form').submit(function () {
            this.ajax({
                url: 'ajax/test.html',
                success: function(){
                    alert('success!');
                }
            });
        });
});